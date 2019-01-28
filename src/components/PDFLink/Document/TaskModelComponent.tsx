import React, { Fragment } from 'react';
import { Document, Page, Text, View, StyleSheet } from '@react-pdf/renderer';
import { Head } from './Head';
import { ITaskModel } from '../../../models/target';
import { TaskModel } from './TaskModel';
import { TaskModelComponentProps, PageMeta } from './DocumentModels';
import { styles } from './styles';
import { OneColumnLayout } from './OneColumnLayout';

export const TaskModelComponent: React.SFC<TaskModelComponentProps> = ({
  claim,
  taskModels,
  stems
}) => {
  return (
    <View style={styles.flexContainer}>
      <OneColumnLayout center={true} text={'Task Models'} />
      {taskModels.map((taskModel: ITaskModel, idx: number) => (
        <View key={`${idx}-${idx}`}>
          <TaskModel taskModel={taskModel} stems={stems} key={`${idx}-${idx}-${idx}`} />
        </View>
      ))}
    </View>
  );
};
