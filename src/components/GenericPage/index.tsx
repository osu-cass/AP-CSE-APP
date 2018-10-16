import React from 'react';
import { Styles, blueGradient } from '../../constants';
import { TitleBar, TitleBarProps } from '../TitleBar';

export interface GenericPageProps {
  title: string;
}

export const GenericPage: React.SFC<TitleBarProps> = props => (
  <div>
    <div className="title-bar">
      <TitleBar {...props} />
    </div>
    <div className="page-content">{props.children}</div>
    <style jsx>{`
      .title-bar {
        background-image: ${blueGradient};
      }

      .page-content {
        max-width: ${Styles.maxPageWidth};
        margin: ${Styles.paddingUnit} auto;
      }

      @media (max-width: ${Styles.maxPageWidth}) {
        .page-content {
          margin: ${Styles.paddingUnit};
        }
      }
    `}</style>
  </div>
);
