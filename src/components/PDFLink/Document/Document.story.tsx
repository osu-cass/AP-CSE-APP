import React from 'react';
import { storiesOf } from '@storybook/react';
import ReactPDF from '@react-pdf/renderer';
import { ClaimMe } from './mocks/testData';
import { createDocument } from '.';
import { DocumentProps } from './DocumentModels';
import ELAG3ClaimMock from '../../../../mock_api_data/E.G3.C1';

const iframeStyle = {
  width: 'calc(100vw - 20pt)',
  height: 'calc(100vh - 20pt)'
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

storiesOf('PDFLink DontTest/Document', module)
  .add('ELA Document', () => (
    <ReactPDF.PDFViewer>{createDocument(elaDocumentFull)}</ReactPDF.PDFViewer>
  ))
  .add('ELA document partial', () => (
    <ReactPDF.PDFViewer>{createDocument(elaDocumentPartial)}</ReactPDF.PDFViewer>
  ))
  .add('Renders with Test data', () => (
    <ReactPDF.PDFViewer>
      {createDocument({
        claim: ClaimMe,
        taskModels: ClaimMe.target[0].taskModels,
        renderEntireTarget: true
      })}
    </ReactPDF.PDFViewer>
  ));
