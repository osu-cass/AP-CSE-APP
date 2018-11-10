import React from 'react';
import { Styles, blueGradient, Colors } from '../../constants';

export interface GenericPageProps {
  title: string;
}

export const GenericPage: React.SFC<GenericPageProps> = ({ title, children }) => (
  <div>
    <div className="title-bar">
      <div className="width-enforcer">
        <h1>{title}</h1>
      </div>
    </div>
    <div className="page-content width-enforcer">{children}</div>
    <style jsx>{`
      .title-bar {
        background-image: ${blueGradient};
        color: ${Colors.sbWhite};
        margin-bottom: ${Styles.paddingUnit};
      }

      h1 {
        font-weight: normal;
        padding: 7px 0;
        margin: 0;
      }

      .width-enforcer {
        margin: 0 auto;
        max-width: ${Styles.maxPageWidth};
      }

      .page-content {
        margin: ${Styles.paddingUnit} auto;
      }

      @media (max-width: ${Styles.maxPageWidth}) {
        .width-enforcer {
          margin: 0 ${Styles.paddingUnit};
        }
      }
    `}</style>
  </div>
);
