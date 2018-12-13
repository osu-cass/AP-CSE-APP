import React from 'react';
import { storiesOf } from '@storybook/react';
import centered from '@storybook/addon-centered';
import { PDFViewer } from '@react-pdf/renderer';
import { PDFLink, DownloadIcon } from '.';
import { DocumentProps } from './Document/DocumentModels';
import { ClaimMe } from './Document/testData';
const mockProps: DocumentProps = {
  claim: ClaimMe,
  taskModels: [],
  renderEntireTarget: true,
  renderOverview: false
};
storiesOf('PDFLink', module)
  .addDecorator(centered)
  .add('Download Link', () => <PDFLink {...mockProps} />)
  .add('Download Indicator', () => <DownloadIcon />);
