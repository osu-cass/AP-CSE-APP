import React from 'react';
import { Section, MainHeader, Passage } from '../../components/MainContent/Components';
import { HelpClaims, HelpTargets } from '../../components/HelpContent';
import { ContentNav } from '../../components/ContentNav';

const names = {
  claimsTargets: 'Claims/Targets',
  itemSpec: 'Item Specifications Page',
  glossary: 'Glossary',
  faq: 'FAQ'
};

export const HelpPage: React.SFC = () => (
  <div className="page-container">
    <div className="content-nav">
      <ContentNav />
    </div>
    <div className="content">
      <Section name={names.claimsTargets}>
        <MainHeader text={names.claimsTargets} />
        <Passage>
          <HelpClaims />
          <HelpTargets />
        </Passage>
      </Section>
    </div>
  </div>
);
