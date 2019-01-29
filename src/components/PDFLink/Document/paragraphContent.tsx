import React from 'react';
import ReactPDF, { Text, View, StyleSheet } from '@react-pdf/renderer';
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

export const ParagraphContent = async ({ content, title }: TargetProps): Promise<JSX.Element> => {
  const contentPromises = content.split('\r\n\r\n').map(async (element: string, idx: number) => (
    <View wrap key={`${idx}`} style={styles.flexContent}>
      <Text style={styles.description} wrap>
        {await parsePdfContent(element)}
      </Text>
    </View>
  ));
  const contentJsx = await Promise.all(contentPromises);

  return (
    <View wrap style={styles.flexRow}>
      <View wrap style={styles.flexColumnLeft}>
        <Text wrap>{title}</Text>
      </View>
      <View wrap style={styles.flexColumnRight}>
        <Text style={styles.description}>{contentJsx}</Text>
      </View>
    </View>
  );
};
