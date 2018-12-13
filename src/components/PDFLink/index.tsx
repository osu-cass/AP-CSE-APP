import React from 'react';
import { Download } from 'react-feather';
import { PDFDownloadLink, Document } from '@react-pdf/renderer';
import { DocumentProps } from './Document/DocumentModels';
import { createDocument } from './Document/';
import { Loading } from '../Loading';

interface PDFDownloadLinkRenderProps {
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

export const render = ({ loading }: PDFDownloadLinkRenderProps) =>
  loading ? <Loading /> : <DownloadIcon />;

export const PDFLink = (props: DocumentProps) => (
  <div>
    <PDFDownloadLink
      document={createDocument(props)}
      fileName={`${props.claim.target[0].shortCode}.pdf`}
    >
      {render}
    </PDFDownloadLink>
  </div>
);
