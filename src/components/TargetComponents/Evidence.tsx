import React from 'react';
import { IEvidence } from '../../models/target';
import { OrderedList } from './Lists';
import { parseContent } from './parseUtils';

export interface EvidenceProps {
  evidence: IEvidence[];
}

export const Evidence: React.SFC<EvidenceProps> = ({ evidence }) => {
  const evidenceJsx = evidence.map(e => parseContent(e.evDesc));

  return <OrderedList elements={evidenceJsx} />;
};
