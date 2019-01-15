import React from 'react';
// import '../../../../node_modules/typeface-pt-serif/index.css';
import { Text, View, StyleSheet } from '@react-pdf/renderer';
// import { Colors, Styles } from '../../../constants';
// import { element } from 'prop-types';

interface TwoColumnLayoutStyles {
  flexRow: object;
  flexColumnLeft: object;
  flexColumnRight: object;
}

const styles = StyleSheet.create({
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
}) as TwoColumnLayoutStyles;

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
