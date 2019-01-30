import React from 'react';
import { Text, View } from '@react-pdf/renderer';
import { ITaskModel, IStem } from '../../../models/target';
import { styles } from './styles';
import { parsePdfContent } from './utils';

export interface TaskModelProps {
  taskModel: ITaskModel;
  stems?: IStem[];
}

// tslint:disable:no-unnecessary-callback-wrapper
const processLines = async (text: string[]): Promise<JSX.Element> => {
  const linePromises = text.map(async s => parsePdfContent(s));
  const lines = await Promise.all(linePromises);

  return <View style={styles.description}>{lines}</View>;
};

const renderNumberedList = async (header: string, list: string[]) => {
  const itemPromises = list.map(async (item, index) => {
    return (
      <View>
        <Text style={styles.description}>
          {`${index + 1}. `}
          {await parsePdfContent(item)}
        </Text>
      </View>
    );
  });
  const items = await Promise.all(itemPromises);

  return (
    <View>
      <Text style={styles.bold}>{header}</Text>
      {items}
    </View>
  );
};

const renderStems = (title: string, stems: JSX.Element) => (
  <View>
    <Text style={styles.bold}>{title}</Text>
    {stems}
  </View>
);

const renderExamples = async (headerName: string, content: string[]) => {
  const sectionPromises = content.map(async (item, index) => (
    <View>
      <Text style={styles.bold}>{`${headerName} ${index + 1}`}</Text>
      {await parsePdfContent(item, styles.description)}
    </View>
  ));
  const sections = await Promise.all(sectionPromises);

  return (
    <View>
      <Text style={styles.bold}>{headerName}</Text>
      {sections}
    </View>
  );
};

const renderSection = async (headerName: string, content: string) => (
  <View>
    <Text style={styles.bold}>{headerName}</Text>
    {await parsePdfContent(content, styles.description)}
  </View>
);

export const TaskModel = async ({ taskModel, stems }: TaskModelProps) => {
  const { taskName, taskDesc, stimulus, relatedEvidence, examples } = taskModel;
  const dualStems =
    stems &&
    stems
      .filter(s => s.shortStem === 'Appropriate Stems for Dual-Text Stimuli')
      .map(s => s.stemDesc);
  const appropriateStems =
    stems && stems.filter(s => s.shortStem === 'Appropriate Stems').map(s => s.stemDesc);
  const appropriateStemsElement =
    appropriateStems && appropriateStems.length > 0 && (await processLines(appropriateStems));
  const dualStemsElement = dualStems && dualStems.length > 0 && (await processLines(dualStems));

  return (
    <View>
      <View wrap style={styles.flexRow}>
        <View style={styles.flexColumnLeft}>
          <Text style={styles.code}>{taskName}</Text>
        </View>
        <View style={styles.flexColumnRight}>
          {taskDesc && (await renderSection('Task Description', taskDesc))}
          {stimulus && stimulus !== 'NA' && (await renderSection('Stimulus', stimulus))}
          {relatedEvidence && (await renderNumberedList('Related Evidence', relatedEvidence))}
          {appropriateStemsElement && (await renderStems('Appropriate Stems', appropriateStemsElement))}
          {dualStemsElement &&
            (await renderStems('Appropriate Stems for Dual-Text Stimuli', dualStemsElement))}
          {examples &&
            examples.length > 0 &&
            examples[0] !== 'NA' &&
            (await renderExamples('Examples', examples))}
        </View>
      </View>
    </View>
  );
};
