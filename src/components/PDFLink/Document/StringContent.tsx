import React from 'react';
// import '../../../../node_modules/typeface-pt-serif/index.css';
import { Text, View, StyleSheet } from '@react-pdf/renderer';
import { styles } from './styles';

export interface ItemRow {
  title: string;
  description: string;
}

export interface TargetProps {
  title: string;
  content: string;
}

export const StringContent = ({ content, title }: TargetProps): JSX.Element => {
  const contentArray = content.split('\r\n\r\n').map((element: string, idx: number) => (
    <View key={`${idx}`} style={styles.flexContent}>
      <Text style={styles.description}>{element}</Text>
    </View>
  ));

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
