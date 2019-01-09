import React from 'react';
import { Element } from 'react-scroll';

import { GenericContentProps } from '.';
import { ContentNav } from '../ContentNav';
import { ItemProps } from '../ContentNav/Item';

export interface HeaderProps {
  text: string;
}
export interface SectionProps {
  name: string;
}
export const Section: React.SFC<SectionProps> = ({ name, children }) => (
  <Element name={name}>
    <div>{children}</div>
    <style jsx>{`
      div {
        padding-left: 0.5em;
      }
    `}</style>
  </Element>
);

export const MainHeader = ({ text }: HeaderProps) => (
  <header>
    <h2>{text}</h2>
  </header>
);
export const SubHeader = ({ text }: HeaderProps) => (
  <header>
    <h3>{text}</h3>
  </header>
);

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
    scrollOffset: scrollOffset || undefined,
    subItems: (section.subsections || []).map(ss => ({
      name: `${section.title}-${ss.title}`,
      referenceContainer: 'main-content-scroll',
      scrollOffset: scrollOffset || undefined
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
