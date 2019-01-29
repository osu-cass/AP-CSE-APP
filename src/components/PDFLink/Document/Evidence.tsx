import React from 'react';
// import '../../../../node_modules/typeface-pt-serif/index.css';
import { Text, View, StyleSheet } from '@react-pdf/renderer';
import { ITarget, IEvidence } from '../../../models/target';
import { styles } from './styles';
import { parsePdfContent } from './utils';

export interface ItemRow {
  title: string;
  description: string;
}

export interface TargetProps {
  title: string;
  content: IEvidence[];
}

export const Evidence = async ({ content, title }: TargetProps): Promise<JSX.Element> => {
  const evidencePromises = content.map(async (element: IEvidence, index: number) => {
    return (
      <View style={styles.item} key={`${element.evTitle} - ${element.evDesc}`}>
        <Text style={styles.description}>
          {`${index + 1}: `}
          {await parsePdfContent(element.evDesc)}
        </Text>
      </View>
    );
  });

  const evidenceJsx = Promise.all(evidencePromises);

  return (
    <View style={styles.flexRow}>
      <View style={styles.flexColumnLeft}>
        <Text>{title}</Text>
      </View>
      <View style={styles.flexColumnRight}>{evidenceJsx}</View>
    </View>
  );
};
