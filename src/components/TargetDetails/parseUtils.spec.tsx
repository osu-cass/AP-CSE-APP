import React from 'react';

import {
  parseExamples,
  parseTableFromRows,
  parseColumns,
  parseTables,
  parseContent
} from './parseUtils';
import { ITable, Table } from './Table';

const mockExamples = [
  'Primary Target 2A (Content Domain NBT), Secondary Target 1E (CCSS 3.NBT.A), Tertiary Target 2C',
  'Example Item 2A.2a (Grade 3)',
  'Examples',
  'Sabina has a jar full of dimes. A pack of cards costs 76 cents. How many dimes would she need to buy the cards if she uses no other coins?\r\n\r\nEnter your answer in the response box.',
  '(1 point) The student enters the correct number of dimes (8).',
  'This item requires the student to interpret the value of a collection of dimes as a multiple of ten, and so draws on the skill set identified in Claim 2C.',
  'NA'
];

const multipleTablesMock: string =
  '|   | Source #1: [title] |  Source #2: [title] |\r\n|---|--------|--------|\r\n| [idea/opinion] _____________   |  |   |\r\n| [idea/opinion] _____________   |  |   |\r\n $~$ \r\n\r\n \r\n-   Look at the [ideas/opinions] in the table. Decide if the information in Source \\#1, Source \\#2, both sources, or neither source supports each [idea/opinion]. Click on the box to match the source that supports each [idea/opinion]. There will be only one box selected for each [idea/opinion].\r\n\r\n**Example of Formatting:**\r\n\r\n\r\n\r\n|  |  Source #1: [title] |  Source #2: [title] |  Both  |  Neither  | \r\n|------------------|---|---|---|---|\r\n| [idea/opinion] |   |   |   |   |  \r\n| [idea/opinion] |   |   |   |   |  \r\n| [idea/opinion] |   |   |   |   |';

const table1Mock: string =
  '|   | Source #1: [title] |  Source #2: [title] |\r\n|---|--------|--------|\r\n| [idea/opinion] _____________   |  |   |\r\n| [idea/opinion] _____________   |  |   |';
const table1HeaderRowMock: string = '|   | Source #1: [title] |  Source #2: [title] |';
const table1DataRowsMock: string[] = [
  '| [idea/opinion] _____________   |  |   |',
  '| [idea/opinion] _____________   |  |   |'
];
const parsedTable1Mock: ITable = {
  HeaderRow: ['   ', ' Source #1: [title] ', '  Source #2: [title] '],
  DataRows: [
    [' [idea/opinion] _____________   ', '  ', '   '],
    [' [idea/opinion] _____________   ', '  ', '   ']
  ]
};

describe('ParseUtils', () => {
  it('handles string vs string array parsing', () => {
    const array = parseExamples(mockExamples);
    const single = parseExamples(
      'Sabina has a jar full of dimes. A pack of cards costs 76 cents. How many dimes would she need to buy the cards if she uses no other coins?\r\n\r\nEnter your answer in the response box.'
    );
    if (array && single) {
      expect(array.length).toBe(9);
      expect(single.length).toBe(3);
    }
    const emptyElement: React.ReactNode[] = [];
    expect(parseExamples('')).toEqual(emptyElement);
  });

  it('parses a string into columns as an array of string', () => {
    const parsedTable1HeaderColumn = parseColumns(table1HeaderRowMock);
    expect(parsedTable1HeaderColumn.length).toBe(3);
    expect(parsedTable1HeaderColumn).toEqual(parsedTable1Mock.HeaderRow);
  });

  it('parses table rows into Table component', () => {
    const parsedTable1: ITable = parseTableFromRows(table1HeaderRowMock, table1DataRowsMock);
    expect(parsedTable1).toEqual(parsedTable1Mock);
  });

  it('parses string with a table', () => {
    const parsedTableJSX: React.ReactNode[] = parseTables(table1Mock, false);
    const renderedTableJSX: React.ReactNode[] = [];
    // NOTE: `key="1"` in <Table> is necessary to pass this test
    // Expected key value is 1 with the given mock
    renderedTableJSX.push(<Table key="1" table={parsedTable1Mock} />);
    expect(parsedTableJSX).toEqual(renderedTableJSX);
  });

  it('parse string with multiple tables', () => {
    const parsedContent: React.ReactNode[] = parseContent(multipleTablesMock);
    expect(parsedContent).toMatchSnapshot();
  });
});
