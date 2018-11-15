import React from 'react';
import { GenericContentProps } from '.';
import { Accordion } from '../Accordion';

export const MobileGenericContentPage: React.SFC<GenericContentProps> = ({ contentSections }) => {
  const sectionsJsx = contentSections.map((s, i) => {
    const subsectionsJsx = (s.subsections || []).map((ss, j) => (
      <Accordion key={j} title={<h3>{ss.title}</h3>}>
        {ss.jsx}
      </Accordion>
    ));

    return (
      <Accordion key={i} title={<h2>{s.title}</h2>}>
        {s.jsx}
        {subsectionsJsx}
      </Accordion>
    );
  });

  return <React.Fragment>{sectionsJsx}</React.Fragment>;
};
