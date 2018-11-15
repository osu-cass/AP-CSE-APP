import React from 'react';
import { Section, MainHeader } from '../../components/MainContent/Components';
import { ContentNav } from '../../components/ContentNav';
import { ItemProps } from '../../components/ContentNav/Item';
import { mediaQueries } from '../../constants';
import { HelpPageProps } from '.';

export const DesktopHelpPage: React.SFC<HelpPageProps> = ({ helpSections }) => {
  const sectionsJsx = helpSections.map((s, i) => (
    <Section name={s.title} key={i}>
      <MainHeader text={s.title} />
      {s.jsx}
    </Section>
  ));

  const itemProps: ItemProps[] = helpSections.map(section => ({
    name: section.title,
    referenceContainer: 'main-content-scroll',
    subItems: [],
    scrollOffset: -50
  }));

  return (
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
  );
};