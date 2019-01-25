import React from 'react';
// import '../../../../node_modules/typeface-pt-serif/index.css';
import { Text, View, StyleSheet } from '@react-pdf/renderer';
import { ITarget, IEvidence } from '../../../models/target';
import { styles } from './styles';

export interface ItemRow {
  title: string;
  description: string;
}

export interface TargetProps {
  title: string;
  content: IEvidence[];
}

export const Evidence = ({ content, title }: TargetProps): JSX.Element => {
  return (
    <View style={styles.flexRow}>
      <View style={styles.flexColumnLeft}>
        <Text>{title}</Text>
      </View>
      <View style={styles.flexColumnRight}>
        {content.map((element: IEvidence, index: number) => {
          return (
            <View style={styles.item} key={`${element.evTitle} - ${element.evDesc}`}>
              <Text style={styles.description}>{`${index + 1}: ${element.evDesc}`}</Text>
            </View>
          );
        })}
      </View>
    </View>
  );
};
