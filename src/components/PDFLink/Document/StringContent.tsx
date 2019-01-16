import React from 'react';
// import '../../../../node_modules/typeface-pt-serif/index.css';
import { Text, View, StyleSheet } from '@react-pdf/renderer';

interface ClarificationStyles {
  flexRow: object;
  flexColumnLeft: object;
  flexColumnRight: object;
  flexContent: object;
  description: object;
  contentBox: object;
}

const styles: ClarificationStyles = StyleSheet.create({
  flexRow: {
    flexDirection: 'row',
    position: 'relative'
  },
  flexColumnLeft: {
    display: 'flex',
    width: '25%',
    padding: 2,
    paddingTop: 15,
    paddingRight: 8,
    borderTop: '1pt solid black',
    borderRight: '2pt solid black',
    borderBottom: '1pt solid black',
    borderLeft: '2pt solid black',
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
    borderTop: '1pt solid black',
    borderBottom: '1pt solid black',
    borderRight: '2pt solid black',
    fontSize: 12
  },
  flexContent: {
    display: 'flex',
    margin: 5
  },
  description: {
    maxHeight: '100%',
    margin: 5
  },
  contentBox: {
    justifyContent: 'space-around'
  }
}) as ClarificationStyles;

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
