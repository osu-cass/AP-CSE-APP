import React, { Fragment } from 'react';
import { Document, Page, Text, View, StyleSheet } from '@react-pdf/renderer';
import { Head } from './Head';
import { ITaskModel } from '../../../models/target';
import { TaskModel } from './TaskModel';
import { TaskModelComponentProps, PageMeta } from './DocumentModels';
import { styles } from './styles';

export const TaskModelComponent: React.SFC<TaskModelComponentProps> = ({
  claim,
  taskModels,
  stems
}) => {
  return (
    <View>
      {taskModels.map((taskModel: ITaskModel, idx: number) => (
        <Page key={`${idx}`} style={styles.page}>
          <View key={`${idx} - ${taskModel.taskName}`} style={styles.flexContainer} wrap>
            <Head key={`${taskModel.taskName} - ${idx}`} text={claim.title} />
            <View key={`${idx}-${idx}`} wrap>
              <TaskModel taskModel={taskModel} stems={stems} key={`${idx}-${idx}-${idx}`} />
            </View>
          </View>
          <Text
            style={styles.pageNumber}
            render={({ pageNumber, totalPages }: PageMeta) => `${pageNumber} / ${totalPages}`}
            fixed
          />
        </Page>
      ))}
    </View>
  );
};
