import React from 'react';
import ReactPDF, { Text, View, StyleSheet } from '@react-pdf/renderer';
import { IDOK } from '../../../models/target';
// import styled from '@react-pdf/styled-components';

interface DOKStyles {
  flexRow: object;
  flexColumnLeft: object;
  flexColumnRight: object;
  item: object;
  bold: object;
}

interface DOKStyles {
  flexRow: object;
  flexColumnLeft: object;
  flexColumnRight: object;
  item: object;
  bold: object;
  description: object;
}

const styles: DOKStyles = StyleSheet.create({
  flexRow: {
    flexDirection: 'row'
  },
  flexColumnLeft: {
    width: '20%',
    padding: 5,
    paddingRight: 8,
    borderTop: '1px solid black',
    borderRight: '2px solid black',
    borderBottom: '1px solid black',
    borderLeft: '2px solid black',
    fontSize: 12,
    textAlign: 'right',
    maxHeight: '100%'
  },
  flexColumnRight: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-evenly',
    width: '80%',
    padding: 5,
    paddingLeft: 8,
    borderTop: '1px solid black',
    borderBottom: '1px solid black',
    borderRight: '2px solid black',
    fontSize: 12,
    maxHeight: '100%'
  },
  item: {
    display: 'flex',
    padding: 5,
    paddingBottom: 8,
    maxHeight: '100%',
    margin: '5'
  },
  bold: {
    width: '100%'
  },
  description: {
    display: 'flex',
    width: '100%',
    maxHeight: '100%',
    minHeight: '5%'
  }
}) as DOKStyles;

export interface DOKProps {
  content: IDOK[];
}

export const DOK = ({ content }: DOKProps) => {
  return (
    <View style={styles.flexRow}>
      <View style={styles.flexColumnLeft}>
        <Text style={styles.bold}>Depth Of</Text>
        <Text style={styles.bold}>Knowledge</Text>
      </View>
      <View style={styles.flexColumnRight}>
        {content.map((element: IDOK) => {
          return (
            <View style={styles.item} key={`${element.dokCode} - ${element.dokDesc}`}>
              <Text style={styles.bold}>{`${element.dokCode} ${element.dokShort}: `}</Text>
              <Text style={styles.description}> {element.dokDesc}</Text>
            </View>
          );
        })}
      </View>
    </View>
  );
};
