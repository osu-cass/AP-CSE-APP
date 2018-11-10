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
import { GenericPage } from '../../components/GenericPage';
import { mediaQueries } from '../../constants';

const names = {
  claimsTargets: 'Claims/Targets',
  itemSpec: 'Item Specifications Page',
  glossary: 'Glossary',
  faq: 'FAQ'
};

const itemProps: ItemProps[] = Object.values(names).map(name => ({
  name,
  referenceContainer: 'main-content-scroll',
  subItems: []
}));

export const HelpPage: React.SFC = () => (
  <GenericPage title="Help">
    <div className="page-container">
      <div id="help-content-nav">
        <ContentNav items={itemProps} referenceContainer="main-content-scroll" />
      </div>
      <div id="help-content">
        <Section name={names.claimsTargets}>
          <MainHeader text={names.claimsTargets} />
          <Passage>
            <HelpClaims />
            <HelpTargets />
          </Passage>
        </Section>

        <Section name={names.itemSpec}>
          <MainHeader text={names.itemSpec} />
          <Passage>
            <HelpItemSpec />
            <HelpContentSpec />
          </Passage>
        </Section>

        <Section name={names.glossary}>
          <MainHeader text={names.glossary} />
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
          min-width: 200px;
        }

        #help-content {
          flex-grow: 1;
        }

        @media ${mediaQueries.tablet} {
          #help-content-nav {
            min-width: auto;
          }
        }

        @media ${mediaQueries.mobile} {
          .page-container {
            flex-direction: column;
            height: auto;
          }

          // #help-content {
          //   overflow-y: auto;
          // }

          #help-content-nav {
            display: none;
          }
        }
      `}</style>
    </div>
  </GenericPage>
);
