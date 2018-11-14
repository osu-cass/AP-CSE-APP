import React from 'react';
import { HelpPageProps } from '.';
import { Accordion } from '../../components/Accordion';

export const MobileHelpPage: React.SFC<HelpPageProps> = ({ helpSections }) => {
  const sectionsJsx = helpSections.map((s, i) => (
    <Accordion key={i} title={<h2>{s.title}</h2>}>
      {s.jsx}
    </Accordion>
  ));

  return <React.Fragment>{sectionsJsx}</React.Fragment>;
};
