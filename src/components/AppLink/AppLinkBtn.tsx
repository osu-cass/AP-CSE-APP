import React from 'react';
import { ArrowRight } from 'react-feather';
import { blueGradient, Colors } from '../../constants';

export interface AppLinkBtnProps {
  text: string;
  url: string;
}

export const AppLinkBtn = ({ text, url }: AppLinkBtnProps) => (
  <a aria-label="Link" href={url}>
    <div className="container">
      <span>{text}</span>
      <ArrowRight />
    </div>
    <style jsx>{`
      * {
        margin: 0;
        padding: 0;
      }
      a {
        text-decoration: none !important;
        color: ${Colors.sbGrayLighter};
      }
      a:hover {
        text-shadow: 2px 2px ${Colors.sbGray};
        font-size: 102%;
      }
      .container {
        display: inline-flex;
        min-height: 35px;
        border-radius: 5px;
        background-image: ${blueGradient};
        align-items: center;
        justify-content: center;
        width: 230px;
        padding-left: 10px;
        padding-right: 10px;
      }
      a div span {
        padding-right: 10px;
      }
    `}</style>
  </a>
);
