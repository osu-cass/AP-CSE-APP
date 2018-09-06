import React from 'react';
import { DownloadBtn, DownloadBtnProps } from './DownloadBtn';
import { Colors } from '../../constants';

/**
 * interface for TitleBar
 * @export
 * @interface TitleBarProps
 */
export interface TitleBarProps {
  title: string;
  desc?: string;
  downloadBtnProps?: DownloadBtnProps;
}

/**
 * Renders a TitleBar that shows a title, a description, a download button.
 * The description and the download button are optional although the title is always shown
 * @export
 * @function TitleBar
 * @param {string} title
 * @param {string | undefined} desc
 * @param {DownloadBtnProps | undefined} downloadBtnProps
 */
export const TitleBar = ({ title, desc, downloadBtnProps }: TitleBarProps) => (
  <div>
    <ul>
      <li className="title">
        <span>{title}</span>
      </li>
      <li className="desc">{desc && <span>{desc}</span>}</li>
      <li className="download">
        {downloadBtnProps && (
          <DownloadBtn url={downloadBtnProps.url} filename={downloadBtnProps.filename} />
        )}
      </li>
    </ul>
    <style jsx>{`
      * {
        margin: 0;
        padding: 0;
      }
      div {
        min-height: 100px;
        padding: 20px;
      }
      div ul {
        display: flex;
        flex-wrap: wrap;
        align-items: center;
        list-style-type: none;
      }
      div ul li {
        padding-top: 10px;
      }
      .title {
        width: 300px;
        color: white;
        font-size: 20px;
        font-weight: 800;
      }
      .desc {
        width: 500px;
        color: ${Colors.sbGrayLighter};
        font-size: 14px;
        font-weight: 100;
        text-align: left;
      }
      .download {
        width: 24px;
        text-align: right;
      }
    `}</style>
  </div>
);
