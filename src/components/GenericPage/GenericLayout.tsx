import React from 'react';
import { PageWidthEnforcer } from './PageWidthEnforcer';
import homeLogo from '../../assets/images/home-page.jpg';
import { MobileBreakSize } from '../MediaQuery/MediaQueryWrapper';

export const genericLayout = <T extends object>(
  title: React.ReactNode,
  Component: React.ComponentType<T>,
  mainContentClass?: string
): React.SFC<T> => {
  return (props: T) => (
    <React.Fragment>
      <div className="title-and-content">
        <div>{title}</div>
        <div className={`content ${mainContentClass}`} id="main-content-scroll">
          <PageWidthEnforcer>
            <Component {...props} />
          </PageWidthEnforcer>
        </div>
      </div>
      <style jsx>{`
        .title-and-content {
          flex-grow: 1;
          display: flex;
          flex-direction: column;
          font-size: 14px;
        }

        .content {
          overflow-y: auto;
          -webkit-overflow-scrolling: touch;
          flex-grow: 1;
        }
        @media (max-width: ${MobileBreakSize.maxWidth}px) {
          .title-and-content {
            max-height: 86vh;
          }
        }
      `}</style>
    </React.Fragment>
  );
};
