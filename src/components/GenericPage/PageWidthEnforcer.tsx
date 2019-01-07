import React from 'react';

import { Styles } from '../../constants/style';

export interface PageWidthEnforcerProps {
  noVerticalMargin?: boolean;
}
export const PageWidthEnforcer: React.SFC<PageWidthEnforcerProps> = ({
  noVerticalMargin,
  children
}) => (
  <div className="page-content width-enforcer">
    {children}
    <style jsx>{`
      .width-enforcer {
        margin: ${noVerticalMargin ? 0 : Styles.paddingUnit} auto;
        max-width: ${Styles.maxPageWidth};
      }

      @media (max-width: ${Styles.maxPageWidth}) {
        .width-enforcer {
          margin: ${noVerticalMargin ? 0 : Styles.paddingUnit} ${Styles.paddingUnit};
        }
      }
    `}</style>
  </div>
);
