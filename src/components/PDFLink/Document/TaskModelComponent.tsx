import React from 'react';
import { View } from '@react-pdf/renderer';
import { ITaskModel } from '../../../models/target';
import { TaskModel } from './TaskModel';
import { TaskModelComponentProps } from './DocumentModels';
import { styles } from './styles';
import { OneColumnLayout } from './OneColumnLayout';

export const TaskModelComponent = async ({ taskModels, stems }: TaskModelComponentProps) => {
  return (
    <View style={styles.flexContainer}>
      {await OneColumnLayout({ center: true, text: 'Task Models' })}
      {taskModels.map((taskModel: ITaskModel, idx: number) => (
        <View key={`${idx}-${idx}`}>
          <TaskModel taskModel={taskModel} stems={stems} key={`${idx}-${idx}-${idx}`} />
        </View>
      ))}
    </View>
  );
};
