import React from 'react';
import { DownloadBtn, DownloadBtnProps } from './DownloadBtn';
import { Styles, Colors } from '../../constants/style';
import { IDomain } from '../../models/claim';
import { MobileBreakSize, mediaQueryWrapper } from '../MediaQuery/MediaQueryWrapper';

/**
 * interface for TitleBar
 * @export
 * @interface TitleBarProps
 */
export interface MobileTitleBarProps {
  claimTitle?: string;
  claimUrl?: string;
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
export const TitleBar: React.SFC<MobileTitleBarProps> = ({
  claimTitle,
  claimUrl,
  targetTitle,
  downloadBtnProps
}: MobileTitleBarProps) => (
  <div className="title-container">
    <ul>
      {claimTitle && (
        <li className="title">
          <a href={claimUrl}>
            <span>{claimTitle}</span>
          </a>
        </li>
      )}
      {targetTitle && (
        <li className="title">
          <span>{targetTitle}</span>
        </li>
      )}
      {downloadBtnProps && (
        <li className="download">
          <DownloadBtn {...downloadBtnProps} />
        </li>
      )}
    </ul>
    <style jsx>{`
      .title-container {
        display: flex;
        font-family: ${Styles.sbSans};
        padding: 0.7em 0;
        backgroundimage: linear-gradient(90deg, ${Colors.sbBlue}, ${Colors.sbBlueLighter});
        width: '100%';
        flex-basis: '100%';
        flex-direction: row;
        justify-content: center;
        align-items: center;
      }

      a {
        color: ${Colors.sbWhite};
      }
      ul {
        display: flex;
        flex-wrap: wrap;
        flex-direction: row;
        align-items: center;
        justify-content: space-evenly;
        list-style-type: none;
        max-width: ${Styles.targetContentWidth};
        width: 100vw;
        margin: 0;
        padding: 0;
      }
      .title {
        color: white;
        font-size: 1.129em;
        text-align: left;
      }
      .download {
        width: auto;
      }
    `}</style>
  </div>
);
export const MobileTitleBarWrapped = mediaQueryWrapper(TitleBar, MobileBreakSize);
