import React from 'react';
import ReactPDF, { Document, Page, Text, View, StyleSheet, Image } from '@react-pdf/renderer';
import { ITaskModel, IStem } from '../../../models/target';
import { OneColumnLayout } from './OneColumnLayout';
import { styles } from './styles';

export interface TaskModelProps {
  taskModel: ITaskModel;
  stems?: IStem[];
}

const processNewLine = (text: string[]): JSX.Element => {
  return (
    <View style={styles.description}>
      {text.map(s => s.split('\r\n').map(s => <Text>{s}</Text>))}
    </View>
  );
};

const renderNumberedList = (header: string, list: string[]) => (
  <View>
    <Text style={styles.bold}>{header}</Text>
    {list.map((item, index) => {
      return <Text style={styles.description}>{`${index + 1}. ${item}`}</Text>;
    })}
  </View>
);

const renderStems = (title: string, stems: JSX.Element) => (
  <View>
    <Text style={styles.bold}>{title}</Text>
    {stems}
  </View>
);

const renderExamples = (headerName: string, content: string[]) => {
  const sections = content.map((item, index) => (
    <View>
      <Text style={styles.bold}>{`${headerName} ${index + 1}`}</Text>
      <Text style={styles.description}>{item}</Text>
    </View>
  ));

  return (
    <View>
      <Text style={styles.bold}>{headerName}</Text>
      {sections}
    </View>
  );
};

const renderSection = (headerName: string, content: string) => (
  <View>
    <Text style={styles.bold}>{headerName}</Text>
    <Text style={styles.description}>{content}</Text>
  </View>
);

export const TaskModel = ({ taskModel, stems }: TaskModelProps) => {
  const { taskName, taskDesc, stimulus, relatedEvidence, examples } = taskModel;
  const dualStems =
    stems &&
    stems
      .filter(s => s.shortStem === 'Appropriate Stems for Dual-Text Stimuli')
      .map(s => s.stemDesc);
  const appropriateStems =
    stems && stems.filter(s => s.shortStem === 'Appropriate Stems').map(s => s.stemDesc);
  const appropriateStemsElement =
    appropriateStems && appropriateStems.length > 0 && processNewLine(appropriateStems);
  const dualStemsElement = dualStems && dualStems.length && processNewLine(dualStems);

  return (
    <View>
      <View wrap style={styles.flexRow}>
        <View style={styles.flexColumnLeft}>
          <Text style={styles.code}>{taskName}</Text>
        </View>
        <View style={styles.flexColumnRight}>
          {taskDesc && renderSection('Task Description', taskDesc)}
          {stimulus && stimulus !== 'NA' && renderSection('Stimulus', stimulus)}
          {relatedEvidence && renderNumberedList('Related Evidence', relatedEvidence)}
          {appropriateStemsElement && renderStems('Appropriate Stems', appropriateStemsElement)}
          {dualStemsElement &&
            renderStems('Appropriate Stems for Dual-Text Stimuli', dualStemsElement)}
          {examples &&
            examples.length > 0 &&
            examples[0] !== 'NA' &&
            renderExamples('Examples', examples)}
        </View>
      </View>
    </View>
  );
};
