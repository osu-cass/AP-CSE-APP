import React from 'react';
// import '../../../../node_modules/typeface-pt-serif/index.css';
import { Text, View, StyleSheet } from '@react-pdf/renderer';
import { ITarget } from '../../../models/target';

interface ClarificationStyles {
  flexRow: object;
  flexColumnLeft: object;
  flexColumnRight: object;
}

const styles: ClarificationStyles = StyleSheet.create({
  flexRow: {
    flexDirection: 'row'
  },
  flexColumnLeft: {
    width: '20%',
    padding: 2,
    paddingRight: 8,
    borderTop: '1pt solid black',
    borderRight: '2pt solid black',
    borderBottom: '1pt solid black',
    borderLeft: '2pt solid black',
    fontSize: 12,
    textAlign: 'right'
  },
  flexColumnRight: {
    width: '80%',
    padding: 5,
    paddingLeft: 8,
    paddingTop: 5,
    borderTop: '1pt solid black',
    borderBottom: '1pt solid black',
    borderRight: '2pt solid black',
    fontSize: 12
  }
}) as ClarificationStyles;

export interface ItemRow {
  title: string;
  description: string;
}

export interface TargetProps {
  content: ITarget;
}

export const Clarification = ({ content }: TargetProps) => (
  <>
    <View style={styles.flexRow}>
      <View style={styles.flexColumnLeft}>
        <Text>Clarifications</Text>
      </View>
      <View style={styles.flexColumnRight}>
        <Text>{content.clarification}</Text>
      </View>
    </View>
  </>
);
