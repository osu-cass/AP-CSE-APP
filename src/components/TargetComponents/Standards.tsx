import React from 'react';
import { IStandards } from '../../models/target';
import { parseContent } from '../MainContent/parseUtils';

const shortenStandardCode = (code: string) => {
  const parts = code.split('.');
  if (parts.length !== 7) return code;

  return `${parts[4]}-${parts[6]}`;
};

const sortStandards = (a: IStandards, b: IStandards) => {
  if (shortenStandardCode(a.stdCode) < shortenStandardCode(b.stdCode)) return -1;
  if (shortenStandardCode(a.stdCode) > b.stdCode) return 1;

  return 0;
};

const colorStandardCode = (code: string) => {
  const found = code.match('^.*[0-9]$');
  if (found) {
    return (
      <span>
        {code}
        <style jsx>{`
          span {
            color: #e00;
          }
        `}</style>
      </span>
    );
  }

  return code;
};

export const Standards: React.SFC<IStandards[]> = standards => {
  const standardsJsx = standards.sort(sortStandards).map((standard, index) => {
    const code = colorStandardCode(shortenStandardCode(standard.stdCode));
    const desc = parseContent(standard.stdDesc);

    return (
      <li key={index}>
        <strong>{code}</strong> {desc}
      </li>
    );
  });

  return <React.Fragment>standardsJsx</React.Fragment>;
};
