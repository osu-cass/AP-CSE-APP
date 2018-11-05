import React from 'react';
// import '../../../../node_modules/typeface-pt-serif/index.css';
import ReactPDF, {
  Document,
  Page,
  Text,
  View,
  StyleSheet,
  Font,
  Image,
  FlatList
} from '@react-pdf/renderer';
import { ITarget } from '../../../models/target';

interface ClarificationStyles {
  flexRow: object;
  flexColumnLeft: object;
  flexColumnRight: object;
  flexContent: object;
  description: object;
}

const styles: ClarificationStyles = StyleSheet.create({
  flexRow: {
    flexDirection: 'row'
  },
  flexColumnLeft: {
    display: 'flex',
    width: '20%',
    padding: 2,
    paddingTop: 10,
    paddingRight: 8,
    borderTop: '1px solid black',
    borderRight: '2px solid black',
    borderBottom: '1px solid black',
    borderLeft: '2px solid black',
    fontSize: 12,
    textAlign: 'right'
  },
  flexColumnRight: {
    width: '80%',
    padding: 5,
    paddingLeft: 8,
    paddingTop: 5,
    borderTop: '1px solid black',
    borderBottom: '1px solid black',
    borderRight: '2px solid black',
    fontSize: 12,
    minHeight: 0
  },
  flexContent: {
    display: 'flex',
    margin: 5
  },
  description: {
    maxHeight: '100%',
    padding: 5
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
        {contentArray}
      </View>
    </View>
  );
};
