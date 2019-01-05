import React from 'react';

export interface ITable {
  Headers: string[];
  DataRows: string[][];
}

export interface TableProps {
  table: ITable;
}

export const Table: React.SFC<TableProps> = ({ table }) => {
  return (
    <React.Fragment>
      <table className="content-table">
        <thead>
          <tr>
            {table.Headers.map((e, i) => (
              <th key={i}>{e}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {table.DataRows.map((row, i) => (
            <tr key={i}>
              {row.map((col, i) => (
                <td key={i}>{col}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
      <style jsx>{`
        .content-table {
          border-collapse: collapse;
        }
        .content-table th {
          font-weight: normal;
        }
        .content-table,
        th,
        td {
          border: 1px solid black;
        }
      `}</style>
    </React.Fragment>
  );
};
