import React from 'react';
import { PageWidthEnforcer } from './PageWidthEnforcer';
import homeLogo from '../../assets/images/home-page.jpg';

export const genericLayout = <T extends object>(
  title: React.ReactNode,
  Component: React.ComponentType<T>
): React.SFC<T> => {
  return (props: T) => (
    <React.Fragment>
      <div className="title-and-content">
        <div>{title}</div>
        <div
          className={`content ${window.location.pathname === '/' ? 'home-image' : ''}`}
          id="main-content-scroll"
        >
          <div className="content">
            <PageWidthEnforcer>
              <Component {...props} />
            </PageWidthEnforcer>
          </div>
        </div>
      </div>
      <style jsx>{`
        .title-and-content {
          overflow-y: auto;
          flex-grow: 1;
          display: flex;
          flex-direction: column;
        }
        .content {
          flex-grow: 1;
          height: 100%;
        }
        .home-image {
          background-image: url("${homeLogo}");
          background-size: cover;
          background-position: 0% 20%;
          background-repeat: no-repeat;
          height: 100%;
        }
      `}</style>
    </React.Fragment>
  );
};
