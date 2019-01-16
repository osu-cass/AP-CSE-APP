import React from 'react';
import { storiesOf } from '@storybook/react';
import centered from '@storybook/addon-centered';

import { createDocument } from './Document';
import { ClaimMe } from './Document/mocks/testData';
import { DocumentProps } from './Document/DocumentModels';
import { PDFLink, DownloadIcon, PDFDownloadLinkRenderProps } from '.';

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

storiesOf('PDFLink DontTest', module)
  .addDecorator(centered)
  .add('Download Link', () => <PDFLink {...pdfLinkMockProps} />)
  .add('Download Indicator', () => <DownloadIcon />);
