import React from 'react';
import { ResourceLinkBtn, ResourceLinkBtnProps } from './ResourceLinkBtn';
import { Colors } from '../../constants/style';
import { MobileBreakSize } from '../MediaQueryWrapper';
export interface ResourceLinkProps {
  title: string;
  imgUrl: string;
  desc: string;
  linkBtnProps: ResourceLinkBtnProps;
}

export const ResourceLink = ({ title, imgUrl, desc, linkBtnProps }: ResourceLinkProps) => (
  <div className="container">
    <div className="title">
      <span>{title}</span>
    </div>
    <div className="linkImg">
      <a href={linkBtnProps.url} target="__Blank">
        <img src={imgUrl} alt={title} />
      </a>
    </div>
    <div className="desc">{desc}</div>
    <div>
      <ResourceLinkBtn text={linkBtnProps.text} url={linkBtnProps.url} />
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
        color: ${Colors.sbBlueLighter};
        font-size: 25px;
        font-weight: 500;
      }
      .linkImg {
        padding: 0;
        border: 1px solid;
        height: 220px;
      }
      .linkImg img {
        width: 100%;
        height: 100%;
      }
      .desc {
        text-align: justify;
        font-size: 1em;
        height: 80px;
      }
      @media (max-width: ${MobileBreakSize.maxWidth}px) {
        .desc {
          height: auto;
        }
      }
    `}</style>
  </div>
);
