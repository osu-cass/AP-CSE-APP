import React from 'react';
import { Colors, blueGradient } from '../../constants';

export interface LinkButtonProps {
  url: string;
  text: string;
  icon: JSX.Element;
}

export const LinkButton: React.SFC<LinkButtonProps> = ({ url, text, icon }): JSX.Element => (
  <React.Fragment>
    <a href={url} role="button">
      {icon}
      <br />
      {text}
    </a>
    <style jsx>{`
      a {
        color: ${Colors.sbWhite};
        margin: 2px;
        padding: 12px 0;
        background: ${blueGradient};
        border-radius: 10px;
        width: 100px;
        text-align: center;
        font-size: 0.8em;
        text-decoration: none;
      }
    `}</style>
  </React.Fragment>
);
