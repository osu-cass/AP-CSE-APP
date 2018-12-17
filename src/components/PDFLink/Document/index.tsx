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

const Overview = ({ claim }: OverviewProps) => (
  <View wrap>
    <OneColumnLayout center={false} text={claim.target[0].vocab} />
    <StringContent title={'Clarifications'} content={claim.target[0].clarification} />
    {claim.target[0].standards && <Standards content={claim.target[0].standards} />}
    <DOK content={claim.target[0].DOK} />
    <StringContent title={'Stimuli'} content={claim.target[0].stimInfo} />
    <ParagraphContent title={'Accessibility Concerns'} content={claim.target[0].accessibility} />
    {claim.target[0].evidence && (
      <Evidence title={'Evidence Required'} content={claim.target[0].evidence} />
    )}
  </View>
);

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

export function createDocument({
  claim,
  taskModels,
  renderOverview,
  renderEntireTarget
}: DocumentProps): JSX.Element {
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
          render={({ pageNumber, totalPages }: PageMeta) => `${pageNumber} / ${totalPages}`}
          fixed
        />
      </Page>
      {renderedTaskModels}
    </Document>
  );
}
