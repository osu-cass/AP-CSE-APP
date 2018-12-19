import React from 'react';
import { Section, MainHeader, SubHeader } from '..//MainContent/Components';
import { ContentNav } from '../ContentNav';
import { ItemProps } from '../ContentNav/Item';
import { mediaQueries } from '../../constants/style';
import { GenericContentProps } from '.';

export const DesktopGenericContentPage: React.SFC<GenericContentProps> = ({
  contentSections,
  scrollOffset,
  rightContent
}) => {
  const sectionsJsx = contentSections.map((s, i) => {
    const subsectionsJsx = (s.subsections || []).map((ss, j) => (
      <Section name={`${s.title}-${ss.title}`} key={j}>
        <SubHeader text={ss.title} />
        {ss.jsx}
      </Section>
    ));

    return (
      <React.Fragment key={i}>
        <Section name={s.title}>
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
    scrollOffset: scrollOffset || -115,
    subItems: (section.subsections || []).map(ss => ({
      name: `${section.title}-${ss.title}`,
      referenceContainer: 'main-content-scroll',
      scrollOffset: scrollOffset || -115
    }))
  }));

  const rightContentWrapper = rightContent ? (
    <div className="right-container">
      <div className="right-content">{rightContent}</div>
      <style jsx>{`
        .right-container {
          min-width: 200px;
        }

        .right-content {
          width: 200px;
          position: fixed;
        }
      `}</style>
    </div>
  ) : (
    undefined
  );

  return (
    <div className="page-container">
      <div className="left-container">
        <div className="left-content">
          <ContentNav items={itemProps} referenceContainer="main-content-scroll" />
        </div>
      </div>
      <div id="help-content">{sectionsJsx}</div>
      {rightContentWrapper}
      <style jsx>{`
        .page-container {
          display: flex;
          flex-direction: row;
          align-items: stretch;
          height: 100%;
        }

        .left-container {
          min-width: 200px;
        }

        .left-content {
          width: 200px;
          position: fixed;
        }

        #help-content {
          flex-grow: 1;
          overflow-x: hidden;
        }
      `}</style>
    </div>
  );
};
