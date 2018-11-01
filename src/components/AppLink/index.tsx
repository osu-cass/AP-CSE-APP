import React from 'react';
import { AppLinkBtn, AppLinkBtnProps } from './AppLinkBtn';
import { Colors } from '../../constants';

export interface AppLinkProps {
  title: string;
  imgUrl: string;
  desc: string;
  linkBtnProps: AppLinkBtnProps;
}

export const AppLink = ({ title, imgUrl, desc, linkBtnProps }: AppLinkProps) => (
  <div className="container">
    <div className="title">
      <span>{title}</span>
    </div>
    <div className="linkImg">
      <img src={imgUrl} alt={title} />
    </div>
    <div className="desc">{desc}</div>
    <div>
      <AppLinkBtn text={linkBtnProps.text} url={linkBtnProps.url} />
    </div>
    <style jsx>{`
      * {
        margin: 0;
        padding: 0;
      }
      div {
        padding: 4px;
      }
      .container {
        text-align: center;
        max-width: 450px;
      }
      .title span {
        color: ${Colors.sbBlue};
        font-size: 20px;
        font-weight: 500;
      }
      .linkImg {
        border: 1px solid;
        min-height: 180px;
      }
      .desc {
        text-align: justify;
      }
    `}</style>
  </div>
);
