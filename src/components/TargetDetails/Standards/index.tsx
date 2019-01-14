import React from 'react';

import { parseContent } from '../parseUtils';
import { IStandards } from '../../../models/target';

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

export interface StandardsProps {
  standards: IStandards[];
}

export const Standards: React.SFC<StandardsProps> = ({ standards }) => {
  const standardsJsx = standards.sort(sortStandards).map((standard, index) => {
    const code = shortenStandardCode(standard.stdCode);
    const desc = parseContent(standard.stdDesc);

    return (
      <p key={index}>
        <strong>{code}</strong> {desc}
      </p>
    );
  });

  return <React.Fragment>{standardsJsx}</React.Fragment>;
};
