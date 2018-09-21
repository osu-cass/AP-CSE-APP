import React from 'react';
import { ITarget } from '../../models/target';
import { Accordion } from '../Accordion';

export const TargetContainerMobile: React.SFC<ITarget> = (props: ITarget) => {
  const standardsJsx = props.standards.map(s => (
    <Accordion key={s.stdCode} title={s.stdCode} content={s.stdDesc} indentBody />
  ));

  return <Accordion title="Standards" content={standardsJsx} indentBody />;
};
