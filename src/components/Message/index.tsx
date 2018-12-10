import React from 'react';
import { Colors, Styles } from '../../constants';

export const Message: React.SFC = ({ children }) => (
  <div className="message">
    {children}
    <style jsx>{`
      .message {
        margin: ${Styles.paddingUnit} 0;
        text-align: center;
      }
    `}</style>
  </div>
);

export const ErrorMessage: React.SFC = ({ children }) => (
  <div className="error">
    {children}
    <style jsx>{`
      .error {
        margin: ${Styles.paddingUnit} 0;
        color: ${Colors.sbError};
        text-align: center;
      }
    `}</style>
  </div>
);
