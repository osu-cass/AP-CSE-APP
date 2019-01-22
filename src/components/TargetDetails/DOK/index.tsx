import React from 'react';

import { IDOK } from '../../../models/target';

export interface DOKProps {
  dok: IDOK[];
}

export const DOK: React.SFC<DOKProps> = ({ dok }) => {
  const dokJsx = dok.map((d, i) => <p key={i}>{d.dokDesc}</p>);

  return <React.Fragment>{dokJsx}</React.Fragment>;
};
