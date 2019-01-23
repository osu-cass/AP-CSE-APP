import React from 'react';

import { Colors } from '../../constants/style';
import { MobileBreakSize } from '../MediaQueryWrapper';
import { ResourceLinkBtn, ResourceLinkBtnProps } from './ResourceLinkBtn';
export interface ResourceLinkProps {
  title: string;
  imgUrl: string;
  subHeading: string;
  desc: string[];
  linkBtnProps: ResourceLinkBtnProps;
}

export const ResourceLink = ({
  title,
  imgUrl,
  desc,
  subHeading,
  linkBtnProps
}: ResourceLinkProps) => (
  <div className="container">
    <div className="title">
      <span>{title}</span>
    </div>
    <div className="linkImg">
      <a href={linkBtnProps.url} target="__Blank">
        <img src={imgUrl} alt={title} />
      </a>
    </div>
    <div className="subHeading">{subHeading}</div>
    <ul className="desc">
      {desc.map((description: string, key: number) => (
        <li key={key}> {description}</li>
      ))}
    </ul>
    <div className="button">
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
        max-width: 900px;
      }
      .title span {
        color: ${Colors.sbBlueLighter};
        font-size: 40px;
        font-weight: 500;
        padding-bottom: 5px;
      }
      .linkImg {
        padding: 0;
        height: 450px;
        border: 1px solid;
      }
      .linkImg img {
        width: 100%;
        height: 100%;
      }
      .subHeading {
        text-align: justify;
        font-size: 1.2em;
      }
      .desc {
        text-align: justify;
        font-size: 1.2em;
        height: 110px;
        padding-left: 20px;
        margin-bottom: 20px;
        margin-top: 10;
      }
      @media (max-width: ${MobileBreakSize.maxWidth}px) {
        .desc {
          height: auto;
        }
      }
    `}</style>
  </div>
);
