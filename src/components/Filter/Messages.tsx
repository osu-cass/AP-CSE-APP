import React from 'react';
import { Colors } from '../../constants';

export const Message: React.SFC = ({ children }) => (
  <div className="message">
    {children}
    <style jsx>{`
      .message {
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
        color: ${Colors.sbError};
        text-align: center;
      }
    `}</style>
  </div>
);
