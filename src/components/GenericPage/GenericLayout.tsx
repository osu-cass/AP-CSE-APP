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
        <div className="content" id="main-content-scroll">
          <div
            className="content"
            id={
              window.location.pathname === '/' || window.location.pathname.includes('home')
                ? 'main-content-scroll-home'
                : ''
            }
          >
            <PageWidthEnforcer>
              <Component {...props} />
            </PageWidthEnforcer>
          </div>
        </div>
      </div>
      <style jsx>{`
  .title-and-content {
    flex-grow: 1;
    display: flex;
    flex-direction: column;
  }
  .content {
    overflow-y: auto;
    flex-grow: 1;
  }
  .home-content {
    overflow-y: auto;
    height:85vh;
  }
  #main-content-scroll-home {
    background-image: url("${homeLogo}");
    background-size: cover;
    background-position: 0% 20%;
    background-repeat: no-repeat;
    height:85vh;
  }

  `}</style>
    </React.Fragment>
  );
};
