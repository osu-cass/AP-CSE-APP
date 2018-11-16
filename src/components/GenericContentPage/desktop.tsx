import React from 'react';
import { Section, MainHeader, SubHeader } from '..//MainContent/Components';
import { ContentNav } from '../ContentNav';
import { ItemProps } from '../ContentNav/Item';
import { mediaQueries } from '../../constants';
import { GenericContentProps } from '.';

export const DesktopGenericContentPage: React.SFC<GenericContentProps> = ({ contentSections }) => {
  const sectionsJsx = contentSections.map((s, i) => {
    const subsectionsJsx = (s.subsections || []).map((ss, j) => (
      <Section name={`${s.title}-${ss.title}`} key={j}>
        <SubHeader text={ss.title} />
        {ss.jsx}
      </Section>
    ));

    return (
      <React.Fragment>
        <Section name={s.title} key={i}>
          <MainHeader text={s.title} />
          {s.jsx}
        </Section>
        {subsectionsJsx}
      </React.Fragment>
    );
  });

  const itemProps: ItemProps[] = contentSections.map(section => ({
    name: section.title,
    referenceContainer: 'main-content-scroll',
    scrollOffset: -115,
    subItems: (section.subsections || []).map(ss => ({
      name: `${section.title}-${ss.title}`,
      referenceContainer: 'main-content-scroll',
      scrollOffset: -115
    }))
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
