import React from 'react';

import { OrderedList } from '../Lists';
import { parseContent } from '../parseUtils';
import { IEvidence } from '../../../models/target';

export interface EvidenceProps {
  evidence: IEvidence[];
}

export const Evidence: React.SFC<EvidenceProps> = ({ evidence }) => {
  const evidenceJsx = evidence.map((e, i) => (
    <React.Fragment key={i}>{parseContent(e.evDesc)}</React.Fragment>
  ));

  return <OrderedList elements={evidenceJsx} />;
};
