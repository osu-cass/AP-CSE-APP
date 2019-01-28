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

export const ParagraphContent = ({ content, title }: TargetProps): JSX.Element => {
  content.split('\r\n\r\n').map((element: string, idx: number) => (
    <View wrap key={`${idx}`} style={styles.flexContent}>
      <Text style={styles.description} wrap>
        {parsePdfContent(element)}
      </Text>
    </View>
  ));

  return (
    <View wrap style={styles.flexRow}>
      <View wrap style={styles.flexColumnLeft}>
        <Text wrap>{title}</Text>
      </View>
      <View wrap style={styles.flexColumnRight}>
        <Text style={styles.description}>{content}</Text>
      </View>
    </View>
  );
};
