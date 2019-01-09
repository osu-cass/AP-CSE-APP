import React from 'react';

import { OrderedList } from '../Lists';
import { parseContent } from '../parseUtils';
import { IEvidence } from '../../../models/target';

export interface EvidenceProps {
  evidence: IEvidence[];
}

export const Evidence: React.SFC<EvidenceProps> = ({ evidence }) => {
  const evidenceJsx = evidence.map(e => parseContent(e.evDesc));

  return <OrderedList elements={evidenceJsx} />;
};
