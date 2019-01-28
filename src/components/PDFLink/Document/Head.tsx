import React from 'react';
import { Text, View, Image } from '@react-pdf/renderer';
import { styles } from './styles';

/*tslint:disable: no-require-im <Image fixed style={styles.logo} src={sbLogo}/>;ports no-var-requires */
// tslint:disable-next-line:no-require-imports
const sbLogo: string = require('@sbac/sbac-ui-kit/src/images/SmarterBalanced-Logo.png') as string;

export interface HeadProps {
  text: string;
}

export const Head = ({ text }: HeadProps) => (
  <View fixed style={styles.headerElement}>
    <View style={styles.headerText}>
      <Text>{text}</Text>
    </View>
    <View style={styles.logo}>
      <Image src={sbLogo} />
    </View>
  </View>
);
