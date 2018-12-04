import React from 'react';
// import '../../../../node_modules/typeface-pt-serif/index.css';
import { Document, Page, Text, View, StyleSheet } from '@react-pdf/renderer';
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
import { TaskModel } from './TaskModel';
import { ITaskModel } from '../../../models/target';

interface DocumentStyles {
  page: object;
  flexContainer: object;
  pageNumber: object;
  numberContainer: object;
  flexImage: object;
  header: object;
  border: object;
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
  },
  border: {
    border: '1px solid red'
  }
}) as DocumentStyles;

export interface PageProps {
  verticalRuler: Boolean;
}

export interface OverviewProps {
  claim: IClaim;
}

interface PageMeta {
  pageNumber: number;
  totalPages: number;
}

export interface TaskModelProps {
  taskModels: ITaskModel[];
  claim: IClaim;
}

const TaskModel1: React.SFC<TaskModelProps> = ({ taskModels, claim }) => {
  const taskModelsJSX: JSX.Element[] = [];
  taskModels.forEach((element: ITaskModel, idx: number) =>
    taskModelsJSX.push(
      <Page key={`${idx}`} style={styles.page}>
        <View key={`${idx} - ${element.taskName}`} style={styles.flexContainer} wrap>
          <Head key={`${element.taskName} - ${idx}`} text={claim.title} />
          <View key={`${idx}-${idx}`} wrap>
            <TaskModel key={`${idx}-${idx}-${idx}`} content={element} />
          </View>
        </View>
        <Text
          style={styles.pageNumber}
          render={({ pageNumber, totalPages }: PageMeta) => `${pageNumber} / ${totalPages}`}
          fixed
        />
      </Page>
    )
  );

  return <>{taskModelsJSX}</>;
};
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
