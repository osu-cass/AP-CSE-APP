import React from 'react';
import { GenericContentProps } from '.';
import { Accordion } from '../Accordion';

export const MobileGenericContentPage: React.SFC<GenericContentProps> = ({ contentSections }) => {
  const sectionsJsx = contentSections.map((s, i) => (
    <Accordion key={i} title={<h2>{s.title}</h2>}>
      {s.jsx}
    </Accordion>
  ));

  return <React.Fragment>{sectionsJsx}</React.Fragment>;
};
