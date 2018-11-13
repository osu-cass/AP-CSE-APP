import React from 'react';
import { Section, MainHeader, Passage } from '../../components/MainContent/Components';
import {
  HelpClaims,
  HelpTargets,
  HelpItemSpec,
  HelpContentSpec,
  HelpAccessibility,
  HelpPTOverview,
  HelpTestDevOverview,
  HelpFaq
} from '../../components/HelpContent';
import { ContentNav } from '../../components/ContentNav';
import { ItemProps } from '../../components/ContentNav/Item';
import { GenericPage } from '../../components/GenericPage';
import { mediaQueries } from '../../constants';

interface HelpSection {
  title: string;
  jsx: React.ReactNode;
}

const helpSections: HelpSection[] = [
  {
    title: 'Claims',
    jsx: <HelpClaims />
  },
  {
    title: 'Targets',
    jsx: <HelpTargets />
  },
  {
    title: 'Item Specifications Overview',
    jsx: <HelpItemSpec />
  },
  {
    title: 'Content Specifications',
    jsx: <HelpContentSpec />
  },
  {
    title: 'Accessibility',
    jsx: <HelpAccessibility />
  },
  {
    title: 'FAQ',
    jsx: <HelpFaq />
  },
  {
    title: 'About Test Development and Design',
    jsx: <HelpTestDevOverview />
  },
  {
    title: 'Performance Task Item Specification',
    jsx: <HelpPTOverview />
  }
];

export const HelpPage: React.SFC = () => {
  const sectionsJsx = helpSections.map(s => (
    <Section name={s.title}>
      <MainHeader text={s.title} />
      <Passage>{s.jsx}</Passage>
    </Section>
  ));

  const itemProps: ItemProps[] = helpSections.map(section => ({
    name: section.title,
    referenceContainer: 'main-content-scroll',
    subItems: [],
    scrollOffset: -50
  }));

  return (
    <GenericPage title="Help">
      <div className="page-container">
        <div className="nav-container">
          <div id="help-content-nav">
            <ContentNav items={itemProps} referenceContainer="main-content-scroll" />
          </div>
        </div>
        <div id="help-content">{sectionsJsx}</div>
        <style jsx>{`
          .page-container {
            display: flex;
            flex-direction: row;
            align-items: stretch;
            height: 100%;
          }

          .nav-container {
            min-width: 200px;
            width: 200px;
          }

          #help-content-nav {
            width: 200px;
            position: fixed;
          }

          #help-content {
            flex-grow: 1;
          }

          @media ${mediaQueries.mobile} {
            .page-container {
              flex-direction: column;
              height: auto;
            }

            .nav-container {
              display: none;
            }
          }
        `}</style>
      </div>
    </GenericPage>
  );
};
