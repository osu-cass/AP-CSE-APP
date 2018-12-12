import React from 'react';
import { DownloadBtn, DownloadBtnProps } from './DownloadBtn';
import { Styles, Colors } from '../../constants';
import { IDomain } from '../../models/claim';
import { MobileBreakSize, mediaQueryWrapper } from '../MediaQuery/MediaQueryWrapper';

/**
 * interface for TitleBar
 * @export
 * @interface TitleBarProps
 */
export interface TitleBarProps {
  claimTitle?: string;
  targetTitle?: string;
  downloadBtnProps?: DownloadBtnProps;
}

/**
 * Renders a TitleBar that shows a title, a description, a download button.
 * The description and the download button are optional although the title is always shown
 * @export
 * @function TitleBar
 * @param {string | undefined} claimTitle
 * @param {string | undefined} targetTitle
 * @param {DownloadBtnProps | undefined} downloadBtnProps
 */
export const TitleBar: React.SFC<TitleBarProps> = ({
  claimTitle,
  targetTitle,
  downloadBtnProps
}: TitleBarProps) => (
  <div className="title-container">
    <ul>
      {claimTitle && (
        <li className="title">
          <span>{claimTitle}</span>
        </li>
      )}
      {targetTitle && (
        <li className="title">
          <span>{targetTitle}</span>
        </li>
      )}
    </ul>
    {downloadBtnProps && (
      <div className="download">
        <DownloadBtn
          url={downloadBtnProps.url}
          filename={downloadBtnProps.filename}
          taskNames={downloadBtnProps.taskNames}
        />
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
        flex-direction:row;
        align-items: center;
        justify-content:center;
        list-style-type: none;
        max-width: ${Styles.targetContentWidth};
        flex-grow:1;
        }
      div ul li {
        width: auto;
        margin: 10px;
      }
      .title {
        color: white;
        font-size: 18px;
        text-align: left;
      }
      .download {
        margin-left:10px;
        flex-grow:1;
      }
      .download-label{
          display:none;
      }
    `}</style>
  </div>
);
export const MobileTitleBarWrapped = mediaQueryWrapper(TitleBar, MobileBreakSize);
