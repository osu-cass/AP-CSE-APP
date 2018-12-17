import React from 'react';
import { storiesOf } from '@storybook/react';
import centered from '@storybook/addon-centered';
import { PDFViewer, PDFDownloadLinkProps } from '@react-pdf/renderer';
import { PDFLink, DownloadIcon, PDFDownloadLinkRenderProps } from '.';
import { DocumentProps } from './Document/DocumentModels';
import { ClaimMe } from './Document/mocks/testData';
import { createDocument } from './Document';
const mockProps: DocumentProps = {
  claim: ClaimMe,
  taskModels: [],
  renderEntireTarget: true,
  renderOverview: false
};

const pdfLinkMockProps: PDFDownloadLinkRenderProps = {
  document: createDocument(mockProps),
  fileName: 'testFile'
};

storiesOf('PDFLink', module)
  .addDecorator(centered)
  .add('Download Link', () => <PDFLink {...pdfLinkMockProps} />)
  .add('Download Indicator', () => <DownloadIcon />);
