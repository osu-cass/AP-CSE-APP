import React from 'react';
import { Download } from 'react-feather';
import { Colors } from '../../constants';

/**
 * interface for DownloadBtn
 * @export
 * @interface DownloadBtnProps
 */
export interface DownloadBtnProps {
  url: string;
  filename: string;
}

/**
 * Renders a download button with a download feather image
 * @export
 * @function {DownloadBtn}
 * @param {string} url
 * @param {string} filename
 */
export const DownloadBtn = ({ url, filename }: DownloadBtnProps) => (
  <a aria-label="Download" href={url} download={filename}>
    <Download />
    <style jsx>{`
      * {
        margin: 0;
        padding: 0;
      }
      a {
        color: ${Colors.sbGrayLighter};
      }
      a:hover {
        color: ${Colors.sbGray};
      }
    `}</style>
  </a>
);
