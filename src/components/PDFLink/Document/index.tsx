import React from 'react';
// import '../../../../node_modules/typeface-pt-serif/index.css';
import ReactPDF, { Document, Page, Text, View, StyleSheet } from '@react-pdf/renderer';
import { Colors, Styles } from '../../../constants';
import { Head } from './Head';
import { OneColumnLayout } from './OneColumnLayout';
import { ClaimMe } from './testData';
import { IClaim } from '../../../models/claim';
import { StringContent } from './StringContent';
import { Standards } from './Standards';
import { DOK } from './DOK';
import { ParagraphContent } from './paragraphContent';
import { Evidence } from './Evidence';

interface DocumentStyles {
  page: object;
  flexContainer: object;
  pageNumber: object;
  numberContainer: object;
  flexImage: object;
  header: object;
}

const styles: DocumentStyles = StyleSheet.create({
  page: {
    backgroundColor: 'white',
    padding: 10,
    paddingBottom: 60,
    paddingTop: 30
  },
  flexContainer: {
    display: 'flex'
  },
  pageNumber: {
    position: 'absolute',
    fontSize: 12,
    bottom: 30,
    left: 0,
    right: 0,
    textAlign: 'center',
    color: 'black'
  },
  numberContainer: {
    height: '25px',
    position: 'relative'
  },
  flexImage: {
    display: 'flex',
    alignItems: 'right',
    paddingRight: '20px'
  },
  header: {
    fontSize: 12
  }
}) as DocumentStyles;

export interface PageProps {
  verticalRuler: Boolean;
}

export interface TableViewProps {
  claim: IClaim;
}

interface PageMeta {
  pageNumber: number;
  totalPages: number;
}

const TableView = ({ claim }: TableViewProps) => (
  <View wrap>
    {claim.description && <OneColumnLayout text={claim.description} />}
    <OneColumnLayout text={claim.target[0].vocab} />
    <StringContent title={'Clarifications'} content={claim.target[0].clarification} />
    <Standards content={claim.target[0].standards} />
    <DOK content={claim.target[0].DOK} />
    <StringContent title={'Stimuli'} content={claim.target[0].stimInfo} />
    <ParagraphContent title={'Accessibility Concerns'} content={claim.target[0].accessibility}>
      {' '}
    </ParagraphContent>
    <Evidence title={'Evidence Required'} content={claim.target[0].evidence}>
      {' '}
    </Evidence>
  </View>
);

export const createDocument = (claim: IClaim) => (
  <Document>
    <Page wrap style={styles.page}>
      <Head text={claim.title} />
      <View style={styles.flexContainer} wrap>
        <TableView claim={claim} />
      </View>
      <Text
        style={styles.pageNumber}
        render={({ pageNumber, totalPages }: PageMeta) => `${pageNumber} / ${totalPages}`}
        fixed
      />
    </Page>
  </Document>
);

export const CustomDocument = createDocument(ClaimMe);
