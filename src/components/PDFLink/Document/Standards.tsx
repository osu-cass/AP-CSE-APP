import React from 'react';
import ReactPDF, { Document, Page, Text, View, StyleSheet, Image } from '@react-pdf/renderer';
import { IStandards } from '../../../models/target';

interface StandardsStyles {
  flexRow: object;
  flexColumnLeft: object;
  flexColumnRight: object;
  item: object;
  desc: object;
  code: object;
}

const styles: StandardsStyles = StyleSheet.create({
  flexRow: {
    flexDirection: 'row',
    maxHeight: '100%'
  },
  flexColumnLeft: {
    display: 'flex',
    width: '25%',
    padding: 5,
    paddingRight: 8,
    paddingTop: 10,
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
    justifyContent: 'space-evenly',
    width: '75%',
    padding: 10,
    paddingLeft: 8,
    paddingTop: 10,
    borderTop: '1px solid black',
    borderBottom: '1px solid black',
    borderRight: '2px solid black',
    fontSize: 12
  },
  item: {
    display: 'flex',
    padding: '3px',
    margin: 3
  },
  desc: {
    margin: 5
  }
}) as StandardsStyles;

export interface TargetProps {
  content: IStandards[];
}

export const Standards = ({ content }: TargetProps) => {
  return (
    <View wrap style={styles.flexRow}>
      <View style={styles.flexColumnLeft}>
        <Text>Standards</Text>
      </View>
      <View style={styles.flexColumnRight}>
        {content.map((element: IStandards) => {
          return (
            <View wrap={false} style={styles.item} key={`${element.stdCode} - ${element.stdDesc}`}>
              <Text>{`${element.stdCode}: `}</Text>
              <Text style={styles.desc}>{element.stdDesc}</Text>
            </View>
          );
        })}
      </View>
    </View>
  );
};
