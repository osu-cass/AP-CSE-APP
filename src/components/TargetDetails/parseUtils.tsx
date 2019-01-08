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

// remove the last elem each row in data stack since it has one more column
const sanitizeDataStack = (dataStack: string[], columnCount: number) => {
  const columnCountWithEmpty: number = columnCount + 1;
  let rowCount = Math.floor(dataStack.length / columnCountWithEmpty);

  const newDataArray: string[] = [];
  for (let i = 0; dataStack.length; i++) {
    const data = dataStack.pop();
    if (i % columnCountWithEmpty === 0 && rowCount > 0) {
      rowCount--;
      continue;
    }
    if (data !== undefined) {
      newDataArray.push(data);
    }
  }

  // reverse array since it is a stack
  return newDataArray.reverse();
};

const getTableStacks = (text: string) => {
  const tableStacks: { headerStack: string[]; cleanDataStack: string[] }[] = [];
  let headerStack: string[] = [];
  let dataStack: string[] = [];
  let columnCount: number = 0;
  let tableFound: Boolean = false;
  const parts = text.split('|');

  for (let i = parts.length; i--; ) {
    const dashs = parts[i].match(/\-+/);

    if (dashs && dashs[0] && dashs[0].length === parts[i].length) {
      if (!tableFound) {
        tableFound = true;
      }
      columnCount++;
      continue;
    }

    if (tableFound) {
      headerStack.push(parts[i]);

      if (columnCount === 1) {
        const cleanDataStack: string[] = sanitizeDataStack(dataStack, headerStack.length);
        tableStacks.push({ headerStack, cleanDataStack });
        headerStack = [];
        dataStack = [];

        columnCount = 0;
        tableFound = false;
        continue;
      }
      columnCount--;
    } else {
      dataStack.push(parts[i]);
    }
  }

  return tableStacks;
};

const renderTable = (tableStack: { headerStack: string[]; cleanDataStack: string[] }) => {
  const table: ITable = { Headers: [], DataRows: [] };
  table.Headers = tableStack.headerStack.reverse();

  let curColCount: number = 0;
  let curRowIndex: number = 0;
  let curRowData: string[] = [];
  // if the last row doesn't match the number of columns, render it out of the table
  while (tableStack.cleanDataStack.length !== 0) {
    // NOTE: Argument of type 'string | undefined' is not assignable to parameter of type 'string'
    curRowData.push(tableStack.cleanDataStack.pop());
    curColCount++;

    if (curColCount === tableStack.headerStack.length) {
      table.DataRows.push(curRowData);

      curColCount = 0;
      curRowIndex++;
      curRowData = [];
    }
  }

  let elementJsx = <Table table={table} />;

  // NOTE: Operator '+=' cannot be applied to types 'Element' and 'Element[]'
  elementJsx += curRowData.map((col, index) => {
    return <React.Fragment key={index}>{col}</React.Fragment>;
  });

  return elementJsx;
};

export const parseTable = (text: string) => {
  const parts = text.split(/(\|.+\|)/s);

  if (parts.length === 1) return parts[0]; // no table syntax found

  return parts.map((part, index) => {
    if (index === 1) {
      // array[1] is the table syntax
      const tableStacks: { headerStack: string[]; cleanDataStack: string[] }[] = getTableStacks(
        part
      );
      tableStacks.map((tableStack, index) => {
        return renderTable(tableStack);
      });
    }

    return <React.Fragment key={index}>{part}</React.Fragment>;
  });
};

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

export const parseContent = (text: string | undefined) => {
  // NOTE: this function should be refactored in order to parse tables
  // NOTE: Argument of type 'string | undefined' is not assignable to parameter of type 'string'
  const parsedTextWithTables = parseTable(text);

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
