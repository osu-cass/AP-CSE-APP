import React from 'react';
import { ITarget } from '../../models/target';
import { Accordion } from '../Accordion';

export const TargetContainerMobile: React.SFC<ITarget> = (props: ITarget) => {
  const standardsJsx = props.standards.map(s => (
    <Accordion key={s.stdCode} title={s.stdCode} content={s.stdDesc} indentBody />
  ));

  return (
    <div>
      <Accordion
        title="Standards"
        titleClass="accordion-title-h1"
        content={standardsJsx}
        indentBody
      />
      <style jsx global>{`
        .accordion-title-h1 {
          fontsize: 1.5em;
          padding: 5px 0;
          border-bottom: 1px solid #006298;
        }
      `}</style>
    </div>
  );
};
