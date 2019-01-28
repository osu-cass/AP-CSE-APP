import React from 'react';
import { ITable, Table } from './Table';

export const splitByNewLine = (text: string | undefined) => {
  if (text) {
    return text.split('\r\n');
  }
};

const isUnderlined = (line: string) => {
  return line.includes(
    '*(**Note**: In this automated version of the item specification, underlined text appears in italics.)*'
  );
};

export const NewLine: React.SFC = ({ children }) => (
  <div>
    {children}
    <style jsx>{`
      div {
        margin-top: 1em;
      }
    `}</style>
  </div>
);

const removeDashWithSpaces = (text: string) => text.replace(/^-[ ]*/, '');

const removeBackSlash = (text: string) => text.replace(/(\\)([_<>#])/g, '$2');

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

const parsers = [removeDashWithSpaces, removeBackSlash, replaceCharRef, replaceFractions];
const applyParsers = (parsers: ((text: string) => string)[], text: string) => {
  let parsedText: string = text;
  parsers.forEach((parser: (text: string) => string) => {
    parsedText = parser(parsedText);
  });

  return parsedText;
};

const parseSingleAsterisk = (text: string, underlined: boolean) => {
  const parts = text.split('*');

  return parts.map((part, index) => {
    let content: React.ReactNode | string;

    const parsedText: string = applyParsers(parsers, part);

    if (index % 2 === 1) {
      content = underlined ? <u key={index}>{parsedText}</u> : <i key={index}>{parsedText}</i>;
    } else {
      content = parsedText;
    }

    return content;
  });
};

const parseDoubleAsterisks = (text: string, underlined: boolean) => {
  const parts = text.split('**');

  return parts.map((part, index) => {
    const parsedLine = parseSingleAsterisk(part, underlined);

    return index % 2 === 1 ? <strong key={index}>{parsedLine}</strong> : parsedLine;
  });
};

const parseUnorderedList = (text: string, underlined: boolean) => {
  if (text.startsWith('- ')) {
    return (
      <ul>
        <li>{parseDoubleAsterisks(text, underlined)}</li>
      </ul>
    );
  }

  return parseDoubleAsterisks(text, underlined);
};

// I'm assuming you've already checked if this line of the
// content is an image prior to this function call
export const parseImageTags = (text: string): React.ReactNode => {
  const urlPattern = /\!\[.*\]\((.*)\)/;
  const match = text.match(urlPattern);
  const url = match && match[1];

  return <img src={url || ''} role="presentation" alt="" />;
};

export const parseColumns = (dataRow: string) => {
  const sanitizedDataRow = dataRow.match(/\|(.+)\|/);

  // index 1 is the data grepped
  // from '| | data 1 | data 2 |' to ' | data 1 | data 2 '
  if (sanitizedDataRow && sanitizedDataRow[1]) {
    return sanitizedDataRow[1].split('|');
  }

  // NOTE: this will happen as an exception.
  return dataRow.split('|');
};

export const parseTableFromRows = (headerRow: string | undefined, dataRows: string[]) => {
  const iTable: ITable = {
    HeaderRow: [],
    DataRows: []
  };

  if (headerRow) {
    iTable.HeaderRow = parseColumns(headerRow);
  }

  while (dataRows.length !== 0) {
    const dataRow = dataRows.pop();
    if (dataRow) {
      iTable.DataRows.push(parseColumns(dataRow));
    }
  }

  return iTable;
};

const tableRowRegex = /\|.*\|/; // ex) '| data 1 | data 2 | data 3 |'
const headerDelimiterRegex = /\|\-([\|\-]*)\-\|/; // ex) '|--|---|---|'

const parseTablesFromLines = (lines: string[], underlined: boolean) => {
  const tablesWithStringsJSX: React.ReactNode[] = [];
  let foundHeaderRow: boolean = false;
  const dataRows: string[] = [];

  lines
    .filter(line => line.trim() !== '')
    .reverse()
    .forEach((line: string, index) => {
      if (line.match(tableRowRegex)) {
        if (foundHeaderRow) {
          tablesWithStringsJSX.push(
            <Table key={index} table={parseTableFromRows(line, dataRows)} />
          );

          foundHeaderRow = false;
        } else {
          if (line.match(headerDelimiterRegex)) {
            foundHeaderRow = true; // because next line of delimiter is the header row
          } else {
            dataRows.push(line);
          }
        }
      } else {
        tablesWithStringsJSX.push(
          <NewLine key={index}>{parseUnorderedList(line, underlined)}</NewLine>
        );
      }
    });

  // Since parsing tables logic approached from bottom to top, the result JSX should be reversed.
  return tablesWithStringsJSX.reverse();
};

export const parseTables = (text: string, underlined: boolean) => {
  let tablesWithStringsJSX: React.ReactNode[] = [];

  const lines = splitByNewLine(text);
  if (lines) {
    tablesWithStringsJSX = parseTablesFromLines(lines, underlined);
  }

  return tablesWithStringsJSX;
};

const parseNoneTableContent = (text: string, underlined: boolean) => {
  const noneTableContentJSX: React.ReactNode[] = [];

  const lines = splitByNewLine(text);
  if (lines) {
    if (underlined) {
      lines.splice(0, 2);
    }

    lines
      .filter(line => line.trim() !== '')
      .forEach((line, index) => {
        let content;
        if (line.startsWith('![') && line.endsWith(')')) {
          content = parseImageTags(line);
        } else {
          content = parseUnorderedList(line, underlined);
        }

        noneTableContentJSX.push(<NewLine key={index}>{content}</NewLine>);
      });
  }

  return noneTableContentJSX;
};

const grepTablesRegex = /(\|.+\|)/s;

const parseTableContent = (text: string, underlined: boolean) => {
  // 2. Capture first and last pipes, returning all of the table content.
  const parts = text.split(grepTablesRegex);

  let parsedTableContentJSX: React.ReactNode[] = [];

  parts.forEach(part => {
    const containsTables = part.match(grepTablesRegex);
    if (containsTables) {
      parsedTableContentJSX = parsedTableContentJSX.concat(parseTables(part, underlined));
    } else {
      parsedTableContentJSX = parsedTableContentJSX.concat(parseNoneTableContent(part, underlined));
    }
  });

  return parsedTableContentJSX;
};

export const parseContent = (text: string) => {
  const underlined: boolean = isUnderlined(text);

  // 1. Check if the content contains tables, and then call the correct parsing function.
  const containsTables = text.match(grepTablesRegex);
  if (containsTables) {
    return parseTableContent(text, underlined);
  }

  return parseNoneTableContent(text, underlined);
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
