import React from 'react';
// import '../../../../node_modules/typeface-pt-serif/index.css';
import ReactPDF, { Document, Page, Text, View, StyleSheet } from '@react-pdf/renderer';
import { Colors, Styles } from '../../../constants';
import { Head } from './Head';
import { OneColumnLayout } from './OneColumnLayout';
import { ClaimMe } from './testData';
import { IClaim } from '../../../models/claim';
import { Clarification } from './Clarification';
import { Standards } from './Standards';

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
  bulletpoints: string[];
}

interface PageMeta {
  pageNumber: number;
  totalPages: number;
}

const stringArray: string[] = [
  'smells bad',
  'always talks about linux and deathgrips',
  'know-it-all'
];

const TableView = ({ bulletpoints, claim }: TableViewProps) => (
  <>
    {claim.description && <OneColumnLayout text={claim.description} />}
    <OneColumnLayout text={claim.target[0].vocab} />
    <Clarification content={claim.target[0]} />
    <Standards content={claim.target[0].standards} />
  </>
);

export const createDocument = (claim: IClaim) => (
  <Document>
    <Page wrap style={styles.page}>
      <Head text={claim.title} />
      <View style={styles.flexContainer} wrap>
        <TableView claim={claim} bulletpoints={stringArray} />
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
