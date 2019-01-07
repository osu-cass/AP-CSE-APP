import React from 'react';
import ReactPDF, { Document, Page, Text, View, StyleSheet, Image } from '@react-pdf/renderer';
import { IStandards, ITaskModel } from '../../../models/target';
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
  }
}) as TaskStyles;

export interface TaskModelProps {
  content: ITaskModel;
}

export const TaskModelChild: React.SFC<ITaskModel> = ({
  taskName,
  stimulus,
  taskDesc,
  examples,
  relatedEvidence
}: ITaskModel) => {
  return (
    <View>
      <OneColumnLayout center={true} text={'Task Models'} />
      <View wrap style={styles.flexRow}>
        <View style={styles.flexColumnLeft}>
          <Text style={styles.code}>{taskName}</Text>
        </View>
        <View style={styles.flexColumnRight}>
          <View style={styles.flexContent}>
            {taskDesc && <Text style={styles.description}>{taskDesc}</Text>}
            {stimulus && <Text style={styles.description}>{stimulus}</Text>}
            {examples && <Text style={styles.description}>{examples}</Text>}
          </View>
        </View>
      </View>
    </View>
  );
};

export const TaskModel = ({ content }: TaskModelProps) => {
  return (
    <View>
      <TaskModelChild {...content} />
    </View>
  );
};
