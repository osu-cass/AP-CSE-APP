import React from 'react';
import { Text, View, StyleSheet } from '@react-pdf/renderer';
import { styles } from './styles';

export interface ItemRow {
  title: string;
  description: string;
}

export interface TwoColumnLayoutProps {
  content: ItemRow[];
}

export const TwoColumnLayout = ({ content }: TwoColumnLayoutProps) => {
  // component
  return (
    <>
      {content.map((element, idx) => (
        <View style={styles.flexRow} key={`${element.title}~${idx}`}>
          <View style={styles.flexColumnLeft} key={`${element.title}-${idx}`}>
            <Text>{element.title}</Text>
          </View>
          <View style={styles.flexColumnRight} key={`${element.description}-${idx}`}>
            <Text>{element.description}</Text>
          </View>
        </View>
      ))}
    </>
  );
};
