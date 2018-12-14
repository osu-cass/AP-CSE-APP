import React from 'react';
import { Download } from 'react-feather';
import { PDFDownloadLink, Document } from '@react-pdf/renderer';
import { DocumentProps } from './Document/DocumentModels';
import { createDocument } from './Document/';
import { Loading } from '../Loading';

export interface PDFDownloadLinkRenderProps {
  loading: boolean;
  document: Document;
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

export const PDFLink = ({ loading, document, fileName }: PDFDownloadLinkRenderProps) => {
  return (
    <div>
      <PDFDownloadLink document={document} filename={fileName}>
        {({ loading }: LoadingProps) => render({ loading })}
      </PDFDownloadLink>
    </div>
  );
};
