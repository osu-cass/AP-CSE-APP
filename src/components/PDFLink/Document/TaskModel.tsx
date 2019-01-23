import React from 'react';
import ReactPDF, { Document, Page, Text, View, StyleSheet, Image } from '@react-pdf/renderer';
import { IStandards, ITaskModel, IStem } from '../../../models/target';
import { OneColumnLayout } from './OneColumnLayout';

interface TaskStyles {
  flexRow: object;
  flexColumnLeft: object;
  flexColumnRight: object;
  item: object;
  desc: object;
  code: object;
  description: object;
  flexContent: object;
  border: object;
  header: object;
}

const styles: TaskStyles = StyleSheet.create({
  flexRow: {
    flexDirection: 'row',
    maxHeight: '100%'
  },
  flexColumnLeft: {
    display: 'flex',
    width: '25%',
    padding: 5,
    paddingRight: 8,
    paddingTop: 10,
    borderTop: '1pt solid black',
    borderRight: '2pt solid black',
    borderBottom: '1pt solid black',
    borderLeft: '2pt solid black',
    fontSize: 12,
    textAlign: 'right'
  },
  flexColumnRight: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-evenly',
    width: '75%',
    padding: 10,
    paddingLeft: 8,
    paddingTop: 10,
    borderTop: '1pt solid black',
    borderBottom: '1pt solid black',
    borderRight: '2pt solid black',
    fontSize: 12
  },
  item: {
    display: 'flex',
    padding: '3pt',
    margin: 3
  },
  desc: {
    margin: 5
  },
  code: {
    textDecoration: 'bold'
  },
  flexContent: {
    display: 'flex',
    maxHeight: '100%',
    paddingBottom: 3,
    margin: 5
  },
  description: {
    display: 'flex',
    maxHeight: '100%',
    paddingBottom: 3,
    margin: 5
  },
  border: {
    border: '1pt solid red'
  },
  header: {
    fontFamily: 'PTSansCaptionBold'
  }
}) as TaskStyles;

export interface TaskModelProps {
  taskModel: ITaskModel;
  stems?: IStem[];
}

const renderNumberedList = (header: string, list: string[]) => (
  <View>
    <Text style={styles.header}>{header}</Text>
    {list.map((item, index) => {
      return <Text style={styles.description}>{`${index + 1}. ${item}`}</Text>;
    })}
  </View>
);

const renderStems = (title: string, stem: IStem[]) => (
  <View>
    <Text style={styles.header}>{title}</Text>
    {stem.map((s, i) => (
      <Text key={`${s.stemDesc}-${i}`}>{`• ${s.stemDesc}`}</Text>
    ))}
  </View>
);

const renderExamples = (headerName: string, content: string[]) => {
  const sections = content.map((item, index) => (
    <View>
      <Text style={styles.header}>{`${headerName} ${index + 1}`}</Text>
      <Text style={styles.description}>{item}</Text>
    </View>
  ));

  return (
    <View>
      <Text style={styles.header}>{headerName}</Text>
      {sections}
    </View>
  );
};

const renderSection = (headerName: string, content: string) => (
  <View>
    <Text style={styles.header}>{headerName}</Text>
    <Text style={styles.description}>{content}</Text>
  </View>
);

export const TaskModel = ({ taskModel, stems }: TaskModelProps) => {
  const { taskName, taskDesc, stimulus, relatedEvidence, examples } = taskModel;
  const dualStems =
    stems && stems.filter(s => s.shortStem === 'Appropriate Stems for Dual-Text Stimuli');
  const appropriateStems = stems && stems.filter(s => s.shortStem === 'Appropriate Stems');

  return (
    <View>
      <OneColumnLayout center={true} text={'Task Models'} />
      <View wrap style={styles.flexRow}>
        <View style={styles.flexColumnLeft}>
          <Text style={styles.code}>{taskName}</Text>
        </View>
        <View style={styles.flexColumnRight}>
          <View style={styles.flexContent}>
            {taskDesc && renderSection('Task Description', taskDesc)}
            {stimulus && renderSection('Stimulus', stimulus)}
            {relatedEvidence && renderNumberedList('Related Evidence', relatedEvidence)}
            {dualStems && dualStems.length > 0 && renderStems('Appropriate Stems', dualStems)}
            {dualStems &&
              dualStems.length > 0 &&
              renderStems('Appropriate Stems for Dual-Text Stimuli', dualStems)}
            {examples &&
              examples.length > 0 &&
              examples[0] !== 'NA' &&
              renderExamples('Examples', examples)}
          </View>
        </View>
      </View>
    </View>
  );
};
