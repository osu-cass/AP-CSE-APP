import React from 'react';
import { NavBar } from '../NavBar';
import { PageWidthEnforcer } from './PageWidthEnforcer';

export const genericLayout = <T extends object>(
  title: React.ReactNode,
  Component: React.ComponentType<T>
): React.SFC<T> => {
  return (props: T) => (
    <React.Fragment>
      <div className="title-and-content">
        <div>{title}</div>
        <div className="content" id="main-content-scroll">
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
        }

        .content {
          overflow-y: auto;
          flex-grow: 1;
        }
      `}</style>
    </React.Fragment>
  );
};
