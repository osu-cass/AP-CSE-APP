import React from 'react';
// import '../../../../node_modules/typeface-pt-serif/index.css';
import { Text, View, StyleSheet } from '@react-pdf/renderer';

interface OneColumnStyles {
  flexSingleRow: object;
  flexColumn: object;
}

// tslint:disable-next-line:no-any no-unsafe-any
const styles: OneColumnStyles = StyleSheet.create({
  flexSingleRow: {
    borderTop: '1pt solid black',
    borderRight: '2pt solid black',
    borderLeft: '2pt solid black',
    borderBottom: '1pt solid black',
    fontSize: 12,
    padding: '5pt',
    width: '100%',
    marginBottom: '-1pt'
  }
});

export interface OneColumnLayoutProps {
  text?: string;
  center: boolean;
}

// ADD BOLD TEXT

export const OneColumnLayout = ({ text, center }: OneColumnLayoutProps) => {
  const layout = center ? { textAlign: 'center', ...styles.flexSingleRow } : styles.flexSingleRow;

  return (
    <View style={layout}>
      <Text>{text}</Text>
    </View>
  );
};
