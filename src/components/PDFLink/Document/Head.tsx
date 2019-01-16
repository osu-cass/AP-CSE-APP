import React from 'react';
// import '../../../../node_modules/typeface-pt-serif/index.css';
import ReactPDF, { Text, View, StyleSheet, Image } from '@react-pdf/renderer';
import { Colors, Styles } from '../../../constants/style';

interface HeadStyles {
  header: object;
  headerText: object;
  logo: object;
  image: object;
}

const styles: HeadStyles = StyleSheet.create({
  header: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'flex-end',
    justifyContent: 'space-between',
    fontSize: 12
  },
  headerText: {
    minWidth: '80%',
    marginBottom: '10pt'
  },
  logo: {
    width: '20%',
    marginBottom: '10pt'
  },
  image: {}
}) as HeadStyles;

/*tslint:disable: no-require-im <Image fixed style={styles.logo} src={sbLogo}/>;ports no-var-requires */
// tslint:disable-next-line:no-require-imports
const sbLogo: string = require('@sbac/sbac-ui-kit/src/images/SmarterBalanced-Logo.png') as string;

export interface HeadProps {
  text: string;
}

export const Head = ({ text }: HeadProps) => (
  <View fixed style={styles.header}>
    <View style={styles.headerText}>
      <Text>{text}</Text>
    </View>
    <View style={styles.logo}>
      <Image style={styles.image} src={sbLogo} />
    </View>
  </View>
);
