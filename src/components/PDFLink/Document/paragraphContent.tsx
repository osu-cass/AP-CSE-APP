import React from 'react';
// import '../../../../node_modules/typeface-pt-serif/index.css';
import ReactPDF, { Text, View, StyleSheet } from '@react-pdf/renderer';
import { ITarget } from '../../../models/target';

interface ParagraphStyles {
  flexRow: object;
  flexColumnLeft: object;
  flexColumnRight: object;
  flexContent: object;
  description: object;
}

const styles: ParagraphStyles = StyleSheet.create({
  flexRow: {
    flexDirection: 'row'
  },
  flexColumnLeft: {
    display: 'flex',
    width: '25%',
    padding: 2,
    paddingTop: 15,
    paddingRight: 8,
    borderTop: '1px solid black',
    borderRight: '2px solid black',
    borderBottom: '1px solid black',
    borderLeft: '2px solid black',
    fontSize: 12,
    textAlign: 'right'
  },
  flexColumnRight: {
    display: 'flex',
    flexDirection: 'column',
    width: '75%',
    paddingRight: 5,
    paddingLeft: 8,
    paddingTop: 5,
    paddingBottom: 5,
    borderTop: '1px solid black',
    borderBottom: '1px solid black',
    borderRight: '2px solid black',
    fontSize: 12
  },
  description: {
    maxHeight: '100%',
    padding: 5,
    margin: 5
  }
}) as ParagraphStyles;

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
        {element}
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
