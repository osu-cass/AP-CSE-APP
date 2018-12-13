import React from 'react';
// import '../../../../node_modules/typeface-pt-serif/index.css';
import { Document, Page, Text, View} from '@react-pdf/renderer';
// import { Colors, Styles } from '../../../constants';
import { Head } from './Head';
import { OneColumnLayout } from './OneColumnLayout';
import { ClaimMe } from './testData';
import { IClaim } from '../../../models/claim';
import { StringContent } from './StringContent';
import { Standards } from './Standards';
import { DOK } from './DOK';
import { ParagraphContent } from './paragraphContent';
import { Evidence } from './Evidence';
import {OverviewProps, PageMeta} from './DocumentModels';
import {styles} from './styles';


const array: string[] = ['Task Model 1', 'Task Model 2'];

const Overview = ({ claim }: OverviewProps) => (
  <View wrap>
    {claim.description && <OneColumnLayout center={false} text={claim.description} />}
    <OneColumnLayout center={false} text={claim.target[0].vocab} />
    <StringContent title={'Clarifications'} content={claim.target[0].clarification} />
    <Standards content={claim.target[0].standards} />
    <DOK content={claim.target[0].DOK} />
    <StringContent title={'Stimuli'} content={claim.target[0].stimInfo} />
    <ParagraphContent title={'Accessibility Concerns'} content={claim.target[0].accessibility} />
    <Evidence title={'Evidence Required'} content={claim.target[0].evidence} />
  </View>
);

export const createDocument = (claim: IClaim) => (
  <Document>
    <Page wrap style={styles.page}>
      <Head text={claim.title} />
      <View style={styles.flexContainer} wrap>
        <Overview claim={claim} />
      </View>
      <Text
        style={styles.pageNumber}
        render={({ pageNumber, totalPages }: PageMeta) => `${pageNumber} / ${totalPages}`}
        fixed
      />
    </Page>
    <TaskModel1 claim={claim} taskModels={claim.target[0].taskModels} />
  </Document>
);

export const CustomDocument = createDocument(ClaimMe);
