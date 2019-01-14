import React from 'react';
// import '../../../../node_modules/typeface-pt-serif/index.css';
import { Document, Page, Text, View } from '@react-pdf/renderer';
// import { Colors, Styles } from '../../../constants';
import { Head } from './Head';
import { OneColumnLayout } from './OneColumnLayout';
import { ClaimMe } from './mocks/testData';
import { IClaim } from '../../../models/claim';
import { StringContent } from './StringContent';
import { Standards } from './Standards';
import { DOK } from './DOK';
import { ParagraphContent } from './paragraphContent';
import { Evidence } from './Evidence';
import { OverviewProps, PageMeta, DocumentProps, TaskModelComponentProps } from './DocumentModels';
import { styles } from './styles';
import { TaskModelComponent } from './TaskModelComponent';
import { render } from 'enzyme';

const array: string[] = ['Task Model 1', 'Task Model 2'];

const Description = ({ claim }: OverviewProps) => (
  <View wrap>
    {claim.description && <OneColumnLayout center={false} text={claim.description} />}
    {claim.target[0].description && (
      <OneColumnLayout center={false} text={claim.target[0].description} />
    )}
  </View>
);

const Overview = ({ claim }: OverviewProps) => {
  const target = claim.target[0];
  const { vocab, clarification, standards, stimInfo, accessibility, evidence } = target;
  const dok = target.DOK;

  return (
    <View wrap>
      {vocab && <OneColumnLayout center={false} text={vocab} />}
      {clarification && <StringContent title={'Clarifications'} content={clarification} />}
      {standards && <Standards content={standards} />}
      {dok && <DOK content={dok} />}
      {stimInfo && <StringContent title={'Stimuli'} content={stimInfo} />}
      {accessibility && (
        <ParagraphContent title={'Accessibility Concerns'} content={accessibility} />
      )}
      {evidence && <Evidence title={'Evidence Required'} content={evidence} />}
    </View>
  );
};

const renderTaskModels = (
  { taskModels, claim }: TaskModelComponentProps,
  renderEntireTarget?: boolean
): JSX.Element | undefined => {
  let taskModelComponent: JSX.Element | undefined;
  if (renderEntireTarget) {
    taskModelComponent = (
      <TaskModelComponent claim={claim} taskModels={claim.target[0].taskModels} />
    );
  } else if (taskModels.length > 0) {
    taskModelComponent = <TaskModelComponent claim={claim} taskModels={taskModels} />;
  }

  return taskModelComponent;
};

export function createDocument(
  { claim, taskModels, renderOverview, renderEntireTarget }: DocumentProps,
  setPageCount: (num: number) => void
): JSX.Element {
  const renderedTaskModels = renderTaskModels(
    { claim, taskModels: taskModels ? taskModels : [] },
    renderEntireTarget
  );

  return (
    <Document>
      <Page wrap style={styles.page}>
        <Head text={claim.title} />
        <View style={styles.flexContainer} wrap>
          <Description claim={claim} />
          {(renderOverview || renderEntireTarget) && <Overview claim={claim} />}
        </View>
        <Text
          style={styles.pageNumber}
          render={({ pageNumber, totalPages }: PageMeta) => {
            setPageCount(totalPages !== undefined ? totalPages : 0);

            return `${pageNumber} / ${totalPages}`;
          }}
          fixed
        />
      </Page>
      {renderedTaskModels}
    </Document>
  );
}
