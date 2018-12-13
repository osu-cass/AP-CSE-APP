import React from 'react';
import { DownloadBtn, DownloadBtnProps } from './DownloadBtn';
import { Styles, Colors } from '../../constants';
import { IDomain } from '../../models/claim';

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
 * @param {string | undefined} claimTitle
 * @param {string | undefined} claimDesc
 * @param {string | undefined} targetTitle
 * @param {string | undefined} targetDesc
 * @param {DownloadBtnProps | undefined} downloadBtnProps
 */
export const TitleBar: React.SFC<TitleBarProps> = ({
  claimTitle,
  claimDesc,
  targetTitle,
  targetDesc,
  downloadBtnProps
}: TitleBarProps) => (
  <div className="title-container">
    <div className="item-spec">
      Item <br />
      Specification
    </div>
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
    </ul>
    {downloadBtnProps && (
      <div className="download">
        <DownloadBtn claim={downloadBtnProps.claim} />
      </div>
    )}
    <style jsx>{`
      * {
        margin: 0;
        padding: 0;
      }
      .title-container {
        display: flex;
        font-family: ${Styles.sbSans};
        padding: 0.7em 0;
        backgroundImage: linear-gradient(90deg, ${Colors.sbBlue}, ${Colors.sbBlueLighter})
        width: '100%',
        flexBasis: '100%'
        flex-direction: row;
        justify-content: center;
        align-items:center;
      }

      ul {
        display: flex;
        flex-wrap: wrap;
        align-items: stretch;
        list-style-type: none;
        max-width: ${Styles.targetContentWidth};
        flex-grow:1;
        margin-left: 25px;
        margin-right: 25px;
      }
      div ul li {
        width: 100%;
      }
      .title {
        width: 20%;
        min-width: 50px;
        color: white;
        font-size: 18px;
        text-align: left;
      }
      .item-spec{
        font-size:24px;
        margin-left:10vw;
        margin-right:25px;
        color:white;
        flex-grow:1;
        font-weight:bold;
      }
      .desc {
        width: 75%;
        min-width: 50px;
        padding-bottom: 15px;
        color: ${Colors.sbGrayLighter};
        font-size: 12px;
        font-weight: 100;
        text-align: left;
      }
      .download {
        margin-left:25px;
        margin-right:20vw;
        flex-grow:1;

      }
    `}</style>
  </div>
);
