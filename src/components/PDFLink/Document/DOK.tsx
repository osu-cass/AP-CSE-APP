import React from 'react';
import { Text, View, StyleSheet } from '@react-pdf/renderer';
import { IDOK } from '../../../models/target';
import { styles } from './styles';
import { parsePdfContent } from './utils';

export interface DOKProps {
  content: IDOK[];
}

export const DOK = async ({ content }: DOKProps) => {
  const promises = content.map(async (element: IDOK) => {
    return (
      <View style={styles.item} key={`${element.dokCode} - ${element.dokDesc}`}>
        <Text style={styles.bold}>{`${element.dokCode} ${element.dokShort}: `}</Text>
        {await parsePdfContent(element.dokDesc, styles.description)}
      </View>
    );
  });

  const dokElements = await Promise.all(promises);

  return (
    <View wrap={false} style={styles.flexRow}>
      <View style={styles.flexColumnLeft}>
        <Text style={styles.bold}>Depth Of Knowledge</Text>
      </View>
      <View style={styles.flexColumnRight}>
        {dokElements}
      </View>
    </View>
  );
};
