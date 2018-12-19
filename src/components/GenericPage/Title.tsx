import React from 'react';
import { blueGradient, Colors, Styles } from '../../constants/style';
import { PageWidthEnforcer } from './PageWidthEnforcer';

export const Title: React.SFC = ({ children }) => (
  <div className="title-bar">
    <PageWidthEnforcer noVerticalMargin>
      <h1>{children}</h1>
    </PageWidthEnforcer>
    <style jsx>{`
      .title-bar {
        background-image: ${blueGradient};
        color: ${Colors.sbWhite};
      }

      h1 {
        font-weight: normal;
        padding: 7px 0;
        margin: 0;
      }
    `}</style>
  </div>
);
