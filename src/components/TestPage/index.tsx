import React from 'react';
import { blueGradientBgImg } from '../../constants';
import { NavBar } from '../NavBar';
import { TitleBar } from '../TitleBar';
import { ContentNav, ContentNavProps, ContentNavState } from '../ContentNav/index';
import { ItemProps } from '../ContentNav/Item';
import { MainContent } from '../MainContent';

export interface TestPageProps {
  pageTitle: string;
  items: ItemProps[];
  pageContent: JSX.Element;
}

const style = {
  ...blueGradientBgImg,
  maxWidth: '1024px'
};

export const TestPage = (props: TestPageProps): JSX.Element => {
  return (
    <div>
      <NavBar links={[]} siteName={'test'} mainContentId={'main'} />
      <div style={style}>
        <TitleBar claimTitle={props.pageTitle} />
      </div>
      <div className="page-container">
        <div className="left-menu">
          <ContentNav items={props.items} />
        </div>
        <div id="main-content" className="content-pane">
          {props.pageContent}
        </div>
      </div>
      <style jsx>{`
        .content-pane {
          margin-right: auto;
          padding-left: 1em;
          padding-top: 0;
          font-family: PT Sans Caption;
        }
        .page-container {
          display: flex;
          justify-content: space-between;
        }
        .left-menu {
          margin-left: 8em;
        }
      `}</style>
    </div>
  );
};
