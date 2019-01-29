import React from 'react';
import { Download } from 'react-feather';
import ReactPDF from '@react-pdf/renderer';

import { Loading } from '../Loading';
import { IClaim } from '../../models/claim';
import { createDocument } from './Document';
import { DocumentProps } from './Document/DocumentModels';

export interface PDFDownloadLinkRenderProps {
  document: JSX.Element;
  fileName: string;
}

interface LoadingProps {
  loading: boolean;
}

export interface ViewerProps {
  claim: IClaim;
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

const pdfStyle = {
  height: '85%',
  width: '1000px'
};

export const viewer = async ({ claim }: ViewerProps) => {
  const documentProps: DocumentProps = {
    claim,
    taskModels: claim.target[0].taskModels,
    renderEntireTarget: true
  };

  return (
    <ReactPDF.PDFViewer style={pdfStyle}>{await createDocument(documentProps)}</ReactPDF.PDFViewer>
  );
};
