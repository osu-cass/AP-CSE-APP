import React from 'react';
import { PageWidthEnforcer } from './PageWidthEnforcer';
import homeLogo from '../../assets/images/home-page.jpg';
import { SubHeader } from '../MainContent/Components';
import { MobileBreakSize } from '../MediaQueryWrapper';

export const genericLayout = <T extends object>(
  title: React.ReactNode,
  Component: React.ComponentType<T>,
  mainContentClass?: string,
  subheader?: React.ReactNode
): React.SFC<T> => {
  return (props: T) => (
    <React.Fragment>
      <div className="title-and-content">
        <div id="titleContainer">{title}</div>
        <div className={`content ${mainContentClass}`} id="main-content-scroll">
          <PageWidthEnforcer>
            <div>{subheader}</div>
            <Component {...props} />
          </PageWidthEnforcer>
          <div className="mobile-padding" />
        </div>
      </div>
      <style jsx>{`
        .title-and-content {
          flex-grow: 1;
          display: flex;
          flex-direction: column;
          font-size: 14px;
          position: fixed;
          top: 50px;
          bottom: 50px;
          width: 100%;
        }

        .content {
          overflow-y: auto;
          -webkit-overflow-scrolling: touch;
          flex-grow: 1;
        }
        @media (max-width: ${MobileBreakSize.maxWidth}px) {
          .mobile-padding {
            height: 200px;
            width: 100px;
          }
          .title-and-content {
            max-height: 95vh;
          }
        }
      `}</style>
    </React.Fragment>
  );
};
