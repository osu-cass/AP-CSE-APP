import React from 'react';
import { Document, Page, Text, View, Font } from '@react-pdf/renderer';
import { Head } from './Head';
import { OneColumnLayout } from './OneColumnLayout';
import { StringContent } from './StringContent';
import { Standards } from './Standards';
import { DOK } from './DOK';
import { ParagraphContent } from './paragraphContent';
import { Evidence } from './Evidence';
import { OverviewProps, PageMeta, DocumentProps } from './DocumentModels';
import { styles } from './styles';
import { TaskModelComponent } from './TaskModelComponent';
import PTSansCaptionBold from '../../../assets/fonts/PT_Sans-Caption-Web-Bold.ttf';
import PTSansCaption from '../../../assets/fonts/PT_Sans-Caption-Web-Regular.ttf';
import { Stimuli } from './StimuliTextComplexity';
import { IClaim } from '../../../models/claim';
import { ITaskModel } from '../../../models/target';

Font.register(`${window.location.origin}/${PTSansCaptionBold}`, { family: 'PTSansCaptionBold' });
Font.register(`${window.location.origin}/${PTSansCaption}`, { family: 'PTSansCaption' });

const Description = async ({ claim }: OverviewProps) => {
  const claimSplit = claim.title.split(' ');
  const claimText =
    (claimSplit &&
      claimSplit.length > 0 &&
      `${claimSplit[claimSplit.length - 2]} ${claimSplit[claimSplit.length - 1]}`) ||
    '';
  const targetSplit = claim.target && claim.target[0] && claim.target[0].title.split(' ');
  const targetText =
    (targetSplit &&
      targetSplit.length > 0 &&
      `${targetSplit[targetSplit.length - 2]} ${targetSplit[targetSplit.length - 1]}`) ||
    '';

  return (
    <View wrap>
      {claim.description &&
        (await OneColumnLayout({ center: false, text: `${claimText}: ${claim.description}` }))}
      {claim.target[0].description &&
        (await OneColumnLayout({
          center: false,
          text: `${targetText}: ${claim.target[0].description}`
        }))}
    </View>
  );
};
const documentStyles = {
  fontFamily: 'PTSansCaption'
};

const Overview = async ({ claim }: OverviewProps) => {
  const target = claim.target[0];
  const {
    vocab,
    clarification,
    standards,
    stimInfo,
    dualText,
    complexity,
    accessibility,
    evidence
  } = target;
  const dok = target.DOK;

  return (
    <View wrap>
      {vocab && vocab !== 'NA' && (await OneColumnLayout({ center: false, text: vocab }))}
      {clarification && <StringContent title={'Clarifications'} content={clarification} />}
      {standards && (await Standards({ content: standards }))}
      {dok && (await DOK({ content: dok }))}
      {<Stimuli stemInfo={stimInfo} dualText={dualText} complexity={complexity} />}
      {accessibility && (
        <ParagraphContent title={'Accessibility Concerns'} content={accessibility} />
      )}
      {evidence && (await Evidence({ title: 'Evidence Required', content: evidence }))}
    </View>
  );
};

const renderTaskModels = async (
  claim: IClaim,
  taskModels: ITaskModel[],
  renderEntireTarget?: boolean
): Promise<JSX.Element | undefined> => {
  let taskModelComponent: JSX.Element | undefined;
  if (renderEntireTarget) {
    taskModelComponent = await TaskModelComponent({
      claim,
      taskModels: claim.target[0].taskModels,
      stems: claim.target[0].stem
    });
  } else if (taskModels.length > 0) {
    taskModelComponent = await TaskModelComponent({
      claim,
      taskModels,
      stems: claim.target[0].stem
    });
  }

  return taskModelComponent;
};

export async function createDocument(
  { claim, taskModels, renderOverview, renderEntireTarget }: DocumentProps,
  setPageCount?: (num: number) => void
): Promise<JSX.Element> {
  const renderedTaskModels = await renderTaskModels(
    claim,
    taskModels ? taskModels : [],
    renderEntireTarget
  );

  return (
    <Document>
      <Page wrap style={styles.page}>
        <Head text={claim.target[0].title} />
        <View style={styles.flexContainer} wrap>
          {await Description({ claim })}
          {(renderOverview || renderEntireTarget) && (await Overview({ claim }))}
          {renderedTaskModels}
        </View>
        <Text
          style={styles.pageNumber}
          render={({ pageNumber, totalPages }: PageMeta) => {
            if (setPageCount) {
              setPageCount(totalPages !== undefined ? totalPages : 0);
            }

            return `${pageNumber} / ${totalPages}`;
          }}
          fixed
        />
      </Page>
    </Document>
  );
}
