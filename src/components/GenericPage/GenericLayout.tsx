import React from 'react';
import { NavBar } from '../NavBar';
import { PageWidthEnforcer } from './PageWidthEnforcer';

export const genericLayout = <T extends object>(
  title: JSX.Element,
  Component: React.ComponentType<T>
): React.SFC<T> => {
  return (props: T) => (
    <div className="full-page">
      <div className="nav-bar">
        <NavBar />
      </div>
      <div>{title}</div>
      <div className="main-content" id="main-content-scroll">
        <PageWidthEnforcer>
          <Component {...props} />
        </PageWidthEnforcer>
      </div>
      <style jsx>{`
        .full-page {
          height: 100vh;
          width: 100vw;
          display: flex;
          flex-direction: column;
        }

        .main-content {
          overflow-y: auto;
          flex-grow: 1;
        }
      `}</style>
    </div>
  );
};
