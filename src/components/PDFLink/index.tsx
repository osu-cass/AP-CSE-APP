import React from 'react';
import { Download, Loader } from 'react-feather';
import { PDFDownloadLink } from '@react-pdf/renderer';

import { CustomDocument } from './Document';

const renderIcon = (loading: boolean): JSX.Element => {
  if (loading) {
    return (
      <div className="loader">
        <Loader />
        <style jsx>{`
          .loader {
            display: flex;
            align-items: center;
            animation: rotate 1s linear infinite;
          }

          @keyframes rotate {
            100% {
              transform: rotate(360deg);
            }
          }
        `}</style>
      </div>
    );
  }

  return (
    <div className="download">
      <p>Download as PDF</p>
      <Download />
      <style jsx>{`
        .download {
          display: flex;
          align-items: center;
        }

        p {
          font-size: 1em;
        }
      `}</style>
    </div>
  );
};

interface PDFLinkRenderProps {
  loading: boolean;
}

export const PDFLink = () => (
  <div>
    <PDFDownloadLink document={CustomDocument} fileName="somename.pdf">
      {({ loading }: PDFLinkRenderProps) => renderIcon(loading)}
    </PDFDownloadLink>
  </div>
);
