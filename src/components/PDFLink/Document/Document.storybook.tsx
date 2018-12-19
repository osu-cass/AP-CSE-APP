import React from 'react';
import { storiesOf } from '@storybook/react';
import { PDFViewer } from '@react-pdf/renderer';
import { ClaimMe } from './mocks/testData';
import { createDocument } from '.';
import { DocumentProps } from './DocumentModels';
import ELAG3ClaimMock from '../../../../mock_api_data/E.G3.C1';

const iframeStyle = {
  width: 'calc(100vw - 20px)',
  height: 'calc(100vh - 20px)'
};

const elaDocumentFull: DocumentProps = {
  claim: ELAG3ClaimMock,
  taskModels: ELAG3ClaimMock.target[0].taskModels,
  renderEntireTarget: true
};

const elaDocumentPartial: DocumentProps = {
  claim: ELAG3ClaimMock,
  taskModels: ELAG3ClaimMock.target[0].taskModels.filter((t, i) => i % 2 === 0)
};

storiesOf('PDFLink/Document DontTest', module)
  .add('ELA Document', () => (
    <PDFViewer style={iframeStyle}>{createDocument(elaDocumentFull)}</PDFViewer>
  ))
  .add('ELA document partial', () => (
    <PDFViewer style={iframeStyle}>{createDocument(elaDocumentPartial)}</PDFViewer>
  ))
  .add('Renders with Test data', () => (
    <PDFViewer style={iframeStyle}>
      {createDocument({
        claim: ClaimMe,
        taskModels: ClaimMe.target[0].taskModels,
        renderEntireTarget: true
      })}
    </PDFViewer>
  ));
