import React from 'react';
import { Download } from 'react-feather';
import { PDFDownloadLink } from '@react-pdf/renderer';

import { Loading } from '../Loading';
import { createDocument } from './Document';

interface PDFDownloadLinkRenderProps {
  loading: boolean;
  document: Document;
  fileName: string;
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

export const render = (loading: boolean) =>
  loading ? <Loading /> : <DownloadIcon />;

export const PDFLink = ({loading, document, fileName}:PDFDownloadLinkRenderProps) => {

  return (
    <div>
      <PDFDownloadLink document={document} filename={fileName}>
        render(loading)
      </PDFDownloadLink>
  </div>
  );
};
