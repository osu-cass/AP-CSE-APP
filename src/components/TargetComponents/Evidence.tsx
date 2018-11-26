import React from 'react';
import { IEvidence } from '../../models/target';
import { OrderedList } from './Lists';

export interface EvidenceProps {
  evidence: IEvidence[];
}

export const Evidence: React.SFC<EvidenceProps> = ({ evidence }) => {
  const evidenceJsx = evidence.map((e, i) => <li key={i}>{e.evDesc}</li>);

  return <OrderedList elements={evidenceJsx} />;
};
