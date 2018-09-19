import React from 'react';
import { ITarget } from '../../models/target';

export const TargetContainerMobile: React.SFC<ITarget> = (props: ITarget) => {
  const standardsJsx = props.standards.map(s => (
    <details key={s.stdCode}>
      <summary>{s.stdCode}</summary>
      <p>{s.stdDesc}</p>
    </details>
  ));

  return (
    <details>
      <summary>Standards</summary>
      {standardsJsx}
    </details>
  );
};
