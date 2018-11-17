import React from 'react';
import { IEvidence } from '../../models/target';
import { NumberList } from '../MainContent/Components';

export const Evidence: React.SFC<IEvidence[]> = evidence => {
  const evidenceJsx = evidence.map((e, i) => <li key={i}>{e.evDesc}</li>);

  return <NumberList>{evidenceJsx}</NumberList>;
};
