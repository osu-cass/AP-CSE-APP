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
import { element } from 'prop-types';

interface OneColumnStyles {
  flexSingleRow: object;
  flexColumn: object;
}

// tslint:disable-next-line:no-any no-unsafe-any
const styles: OneColumnStyles = StyleSheet.create({
  flexSingleRow: {
    flexDirection: 'row',
    borderTop: '1px solid black',
    borderRight: '2px solid black',
    borderLeft: '2px solid black',
    borderBottom: '1px solid black',
    fontSize: 12
  },
  flexColumn: {
    flexDirection: 'col',
    padding: '5px',
    width: '100%'
  }
});

export interface OneColumnLayoutProps {
  text?: string;
}

export const OneColumnLayout = ({ text }: OneColumnLayoutProps) => (
  <View style={styles.flexSingleRow}>
    <View style={styles.flexColumn}>
      <Text>{text}</Text>
    </View>
  </View>
);
