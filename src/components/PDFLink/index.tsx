import React from 'react';
import { Download } from 'react-feather';
import ReactPDF from '@react-pdf/renderer';

import { Loading } from '../Loading';

export interface PDFDownloadLinkRenderProps {
  document: JSX.Element;
  fileName: string;
}

interface LoadingProps {
  loading: boolean;
}

export const DownloadIcon = () => (
  <div className="download">
    <Download />
    <p>Download PDF</p>
    <style jsx>{`
      .download {
        font-family: 'PT Sans Caption', sans-serif;
        display: flex;
        flex-direction: column;
        align-items: center;
      }

      p {
        margin-top: 0.5em;
      }
    `}</style>
  </div>
);

export const render = ({ loading }: LoadingProps) => (loading ? <Loading /> : <DownloadIcon />);

export const PDFLink = ({ document, fileName }: PDFDownloadLinkRenderProps) => {
  return (
    <div>
      <ReactPDF.PDFDownloadLink document={document} fileName={fileName}>
        {render}
      </ReactPDF.PDFDownloadLink>
    </div>
  );
};
