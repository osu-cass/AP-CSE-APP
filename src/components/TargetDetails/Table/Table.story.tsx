import React from 'react';
import { storiesOf } from '@storybook/react';
import { ITable, Table } from '.';

export const tableMock: ITable = {
  HeaderRow: [' ', ' Source #1: [title] ', ' Source #2: [title] ', ' Both ', ' Neither '],
  DataRows: [
    [' [idea/opinion] ', ' ', ' ', ' ', ' '],
    [' [idea/opinion] ', ' ', ' ', ' ', ' '],
    [' [idea/opinion] ', ' ', ' ', ' ', ' ']
  ]
};

storiesOf('TargetDetails/Table', module).add('Render a table in the content of target page', () => (
  <Table table={tableMock} />
));
