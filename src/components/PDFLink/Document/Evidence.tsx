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
import { ITarget, IEvidence } from '../../../models/target';

interface EvidenceStyles {
  flexRow: object;
  flexColumnLeft: object;
  flexColumnRight: object;
  flexContent: object;
  description: object;
  contentBox: object;
  item: object;
}

const styles: EvidenceStyles = StyleSheet.create({
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
    borderTop: '1px solid black',
    borderBottom: '1px solid black',
    borderRight: '2px solid black',
    fontSize: 12
  },
  description: {
    maxHeight: '100%',
    margin: 5
  },
  item: {
    display: 'flex',
    padding: 5,
    maxHeight: '100%',
    margin: 5
  },
  contentBox: {
    justifyContent: 'space-around'
  }
}) as EvidenceStyles;

export interface ItemRow {
  title: string;
  description: string;
}

export interface TargetProps {
  title: string;
  content: IEvidence[];
}

export const Evidence = ({ content, title }: TargetProps): JSX.Element => {
  return (
    <View style={styles.flexRow}>
      <View style={styles.flexColumnLeft}>
        <Text>{title}</Text>
      </View>
      <View style={styles.flexColumnRight}>
        {content.map((element: IEvidence, index: number) => {
          return (
            <View style={styles.item} key={`${element.evTitle} - ${element.evDesc}`}>
              <Text widows={5} style={styles.description}>
                {' '}
                {`${index + 1}: ${element.evDesc}`}
              </Text>
            </View>
          );
        })}
      </View>
    </View>
  );
};