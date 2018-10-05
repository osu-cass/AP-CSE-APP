import React from 'react';
import { storiesOf } from '@storybook/react';
import { PDFViewer } from '@react-pdf/renderer';

import { CustomDocument } from '.';

const iframeStyle = {
  width: 'calc(100vw - 20px)',
  height: 'calc(100vh - 20px)'
};

storiesOf('PDFLink/Document', module)
  .add('ELA document', () => <PDFViewer style={iframeStyle}>{CustomDocument}</PDFViewer>)
  .add('Math document', () => <PDFViewer style={iframeStyle}>{CustomDocument}</PDFViewer>);
