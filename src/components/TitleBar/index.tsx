import React from 'react';
import { DownloadBtn, DownloadBtnProps } from './DownloadBtn';
import { Colors } from '../../constants';

/**
 * interface for TitleBar
 * @export
 * @interface TitleBarProps
 */
export interface TitleBarProps {
  claimTitle?: string;
  claimDesc?: string;
  targetTitle?: string;
  targetDesc?: string;
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
export const TitleBar: React.SFC<TitleBarProps> = ({
  claimTitle,
  claimDesc,
  targetTitle,
  targetDesc,
  downloadBtnProps
}) => (
  <div>
    <ul>
      {claimTitle && (
        <li className="title">
          <span>{claimTitle}</span>
        </li>
      )}
      {claimDesc && (
        <li className="desc">
          <span>{claimDesc}</span>
        </li>
      )}
      {targetTitle && (
        <li className="title">
          <span>{targetTitle}</span>
        </li>
      )}
      {targetDesc && (
        <li className="desc">
          <span>{targetDesc}</span>
        </li>
      )}
      {downloadBtnProps && (
        <li className="download">
          <DownloadBtn url={downloadBtnProps.url} filename={downloadBtnProps.filename} />
        </li>
      )}
    </ul>
    <style jsx>{`
      * {
        margin: 0;
        padding: 0;
      }
      div {
        // min-height: 100px;
        padding: 20px;
      }
      div ul {
        display: flex;
        flex-wrap: wrap;
        align-items: stretch;
        list-style-type: none;
      }
      div ul li {
        min-height: 30px;
      }
      .title {
        width: 20%;
        min-width: 50px;
        color: white;
        font-size: 20px;
        font-weight: 800;
        text-align: center;
      }
      .desc {
        width: 75%;
        min-width: 50px;
        padding-bottom: 15px;
        color: ${Colors.sbGrayLighter};
        font-size: 14px;
        font-weight: 100;
        text-align: left;
      }
      .download {
        margin-left: auto;
        margin-top: auto;
      }
    `}</style>
  </div>
);
