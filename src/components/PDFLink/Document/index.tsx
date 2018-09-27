import React from 'react';
import { Document, Page, Text } from '@react-pdf/renderer';

export const CustomDocument = (
  <Document>
    <Page>
      <Text>Hello, World</Text>
    </Page>
  </Document>
);
