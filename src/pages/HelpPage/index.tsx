import React from 'react';
import { Section, MainHeader, Passage } from '../../components/MainContent/Components';
import {
  HelpClaims,
  HelpTargets,
  HelpItemSpec,
  HelpContentSpec
} from '../../components/HelpContent';
import { ContentNav } from '../../components/ContentNav';
import { ItemProps } from '../../components/ContentNav/Item';

const names = {
  'claims-targets': 'Claims/Targets',
  'item-spec': 'Item Specifications Page',
  glossary: 'Glossary',
  faq: 'FAQ'
};

const itemProps: ItemProps[] = Object.entries(names).map(([key, val]) => ({
  referenceContainer: key,
  name: val,
  subItems: []
}));

export const HelpPage: React.SFC = () => (
  <div className="page-container">
    <div id="help-content-nav">
      <ContentNav items={itemProps} referenceContainer="help-content" />
    </div>
    <div id="help-content">
      <Section name="claims-targets">
        <MainHeader text={names['claims-targets']} />
        <Passage>
          <HelpClaims />
          <HelpTargets />
        </Passage>
      </Section>

      <Section name="item-spec">
        <MainHeader text={names['item-spec']} />
        <Passage>
          <HelpItemSpec />
          <HelpContentSpec />
        </Passage>
      </Section>
    </div>
    <style jsx>{`
      .page-container {
        display: flex;
        flex-direction: row;
        align-items: stretch;
        height: 100%;
      }

      #help-content-nav {
        width: 250px;
        flex-basis: 250px;
      }

      #help-content {
        flex-grow: 1;
        overflow-y: scroll;
      }
    `}</style>
  </div>
);
