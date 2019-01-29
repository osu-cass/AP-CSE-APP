import React from 'react';
// import '../../../../node_modules/typeface-pt-serif/index.css';
import { Text, View, StyleSheet } from '@react-pdf/renderer';
import { styles } from './styles';
import { parsePdfContent } from './utils';

export interface ItemRow {
  title: string;
  description: string;
}

export interface TargetProps {
  title: string;
  content: string;
}

export const StringContent = async ({ content, title }: TargetProps): Promise<JSX.Element> => {
  const contentPromiseArray = content
    .split('\r\n\r\n')
    .map(async (element: string, idx: number) => (
      <View key={`${idx}`} style={styles.flexContent}>
        {await parsePdfContent(element)}
      </View>
    ));

  const contentArray = await Promise.all(contentPromiseArray);

  return (
    <View style={styles.flexRow}>
      <View style={styles.flexColumnLeft}>
        <Text>{title}</Text>
      </View>
      <View style={styles.flexColumnRight}>
        <View style={styles.contentBox}>{contentArray}</View>
      </View>
    </View>
  );
};
