import React from 'react';
import { ITable, Table } from './Table';

const splitByNewLine = (text: string | undefined) => {
  if (text) {
    return text.split('\r\n');
  }
};

const isUnderlined = (line: string) => {
  return (
    line ===
    '*(**Note**: In this automated version of the item specification, underlined text appears in italics.)*'
  );
};

export const NewLine: React.SFC = ({ children }) => (
  <span>
    {children}
    <br />
  </span>
);

const replaceDashWithDot = (text: string) => text.replace('-   ', '• ');

const removeBackSlash = (text: string) => text.replace(/(\\)([_<>])/g, '$2');

const replacer = (match: string, code: string) => String.fromCharCode(Number(code));
const replaceCharRef = (text: string) => text.replace(/&#(\d*)/g, replacer);

function replaceFractions(text: string): string {
  let newContent = text;
  const fractionPattern = /\$.*\\frac{(\w+)}{(\w+)}\$/g;
  const match = text.match(fractionPattern);

  if (match) {
    const numbersPattern = /{(\w+)}{(\w+)}/;
    match.forEach(m => {
      const newMatch = m.match(numbersPattern);
      const numerator = newMatch && newMatch[1];
      const denominator = newMatch && newMatch[2];
      if (numerator && denominator) {
        newContent = newContent.replace(m, `${numerator}/${denominator}`);
      }
    });
  }

  return newContent;
}

const parsers = [replaceDashWithDot, removeBackSlash, replaceCharRef, replaceFractions];
const applyParsers = (parsers: ((text: string) => string)[], text: string) => {
  let parsedText: string = text;
  parsers.forEach((parser: (text: string) => string) => {
    parsedText = parser(parsedText);
  });

  return parsedText;
};

const grepTablesRegex = /(\|.+\|)/s;

const parseSingleAsterisk = (text: string, underlined: boolean) => {
  const parts = text.split('*');

  return parts.map((part, index) => {
    const parsedText: string = applyParsers(parsers, part);

    if (index % 2 === 1) {
      if (underlined) return <u key={index}>{parsedText}</u>;

      return <i key={index}>{parsedText}</i>;
    }

    return <React.Fragment key={index}>{parsedText}</React.Fragment>;
  });
};

const parseDoubleAsterisks = (text: string, underlined: boolean) => {
  const parts = text.split('**');

  return parts.map((part, index) => {
    const parsedLine = parseSingleAsterisk(part, underlined);
    if (index % 2 === 1) {
      return <strong key={index}>{parsedLine}</strong>;
    }

    return <React.Fragment key={index}>{parsedLine}</React.Fragment>;
  });
};

// I'm assuming you've already checked if this line of the
// content is an image prior to this function call
export const parseImageTags = (text: string): JSX.Element => {
  const urlPattern = /\!\[.*\]\((.*)\)/;
  const match = text.match(urlPattern);
  const url = match && match[1];

  return <img src={url || ''} role="presentation" alt="" />;
};

const parseColumns = (dataRow: string) => {
  const sanitizedDataRow = dataRow.match(/\|(.+)\|/);

  // index 1 is the data grepped
  // from '| | data 1 | data 2 |' to ' | data 1 | data 2 '
  if (sanitizedDataRow && sanitizedDataRow[1]) {
    return sanitizedDataRow[1].split('|');
  }

  // NOTE: this will happen as an exception.
  return dataRow.split('|');
};

const parseTable = (headerRow: string, dataRows: string[]) => {
  const iTable: ITable = {
    HeaderRow: parseColumns(headerRow),
    DataRows: []
  };

  while (dataRows.length !== 0) {
    const dataRow = dataRows.pop();
    if (dataRows) {
      iTable.DataRows.push(parseColumns(dataRow));
    }
  }

  return iTable;
};

const parseTables = (text: string) => {
  const tablesWithStringsJSX: JSX.Element[] = [];
  const dataRows: string[] = [];

  const lines = splitByNewLine(text);

  if (!lines) return;
  const underlined = isUnderlined(lines[0]);

  let key = lines.length;
  while (lines.length > 0) {
    const line = lines.pop();
    const matchedTableRow = line.match(/\|.*\|/); // ex) '| | data 1 | data 2 |'
    if (matchedTableRow) {
      const matchedTableHeaderDataDivider = line.match(/\|\-([\|\-]*)\-\|/); // ex) '|--|---|---|'
      if (matchedTableHeaderDataDivider) {
        const headerRow = lines.pop();
        tablesWithStringsJSX.push(<Table table={parseTable(headerRow, dataRows)} />);
        continue;
      }

      dataRows.push(line);
      continue;
    }

    tablesWithStringsJSX.push(
      <NewLine key={key}>{parseDoubleAsterisks(line, underlined)}</NewLine>
    );
    key--;
  }

  // Since parsing tables logic approached from bottom to top, the result JSX should be reversed.
  return tablesWithStringsJSX.reverse();
};

const parseNoneTableContent = (text: string | undefined) => {
  const lines = splitByNewLine(text);

  if (!lines) return;
  const underlined = isUnderlined(lines[0]);

  if (underlined) {
    lines.splice(0, 2);
  }

  return lines.map((line, index) => {
    let content;
    if (line.startsWith('![') && line.endsWith(')')) {
      content = parseImageTags(line);
    } else {
      content = parseDoubleAsterisks(line, underlined);
    }

    return <NewLine key={index}>{content}</NewLine>;
  });
};


const parseTableContent = (text: string | undefined) => {
  const parts = text.split(grepTablesRegex);

  return parts.map(part => {
    const tableMatched = part.match(grepTablesRegex);
    if (tableMatched) {
      return parseTables(part);
    }

    return parseNoneTableContent(part);
  });
};

export const parseContent = (text: string | undefined) => {
  const foundTables = text.match(grepTablesRegex);

  if (foundTables) {
    return parseTableContent(text);
  }

  return parseNoneTableContent(text);
};

export const parseExamples = (example: string | string[]) => {
  let lines: string[] | undefined = [];
  if (typeof example === 'string') {
    lines = splitByNewLine(example);
  } else if (Array.isArray(example)) {
    example.forEach(e => {
      const splits = splitByNewLine(e);
      if (splits && lines) {
        lines = lines.concat(splits);
      }
    });
  }

  return lines ? lines.map(parseContent) : parseContent(example as string);
};
