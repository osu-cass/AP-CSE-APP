import React from 'react';
import ReactPDF, { Document, Page, Text, View, StyleSheet, Image } from '@react-pdf/renderer';
import { IStandards } from '../../../models/target';
import styled from '@react-pdf/styled-components';

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
    width: '20%',
    padding: 10,
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
    justifyContent: 'space-evenly',
    width: '80%',
    padding: 10,
    paddingLeft: 8,
    borderTop: '1px solid black',
    borderBottom: '1px solid black',
    borderRight: '2px solid black',
    fontSize: 12
  },
  item: {
    display: 'flex',
    padding: '3px',
    margin: 5
  },
  desc: {
    padding: 5
  },
  code: {
    color: 'red'
  }
}) as StandardsStyles;

export interface TargetProps {
  content: IStandards[];
}

export const Standards = ({ content }: TargetProps) => {
  return (
    <View style={styles.flexRow}>
      <View style={styles.flexColumnLeft}>
        <Text>Standards</Text>
      </View>
      <View wrap style={styles.flexColumnRight}>
        {content.map((element: IStandards) => {
          return (
            <View style={styles.item} key={`${element.stdCode} - ${element.stdDesc}`}>
              <Text style={styles.code}>{`${element.stdCode}: `}</Text>
              <Text style={styles.desc}>{element.stdDesc}</Text>
            </View>
          );
        })}
      </View>
    </View>
  );
};
