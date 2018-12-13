import React, { Fragment } from 'react';
import { Document, Page, Text, View, StyleSheet } from '@react-pdf/renderer';
import { Head } from './Head';
import { ITaskModel } from '../../../models/target';
import { TaskModel } from './TaskModel';
import { TaskModelComponentProps, PageMeta } from './DocumentModels';
import { styles } from './styles';

export const TaskModelComponent: React.SFC<TaskModelComponentProps> = ({ claim, taskModels }) => {
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

  return <Fragment>{taskModelsJSX}</Fragment>;
};
