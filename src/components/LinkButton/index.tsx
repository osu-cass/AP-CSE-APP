import React from 'react';
import { blueGradientBgImg } from '../../constants';

const style = {
  ...blueGradientBgImg
};

export interface LinkButtonProps {
  url: string;
  text: string;
  icon: JSX.Element;
}

export const LinkButton = (props: LinkButtonProps): JSX.Element => (
  <div>
    <a href={props.url} style={style} role="button">
      {props.icon}
      <br />
      {props.text}
    </a>
    <style jsx>{`
      a {
        display: inline-block;
        min-height: 5em;
        min-width: 5em;
        color: #ffffff;
        margin: auto;
        padding: 1em;
        text-decoration: none;
        border-radius: 1em;
        font-family: 'PT Sans Caption';
        font-size: 0.8em;
      }
      div {
        text-align: center;
        width: 10%;
        margin: 0.2em;
      }
    `}</style>
  </div>
);
