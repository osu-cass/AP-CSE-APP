import React from 'react';
import { Text, View } from '@react-pdf/renderer';
import { styles } from './styles';

export interface OneColumnLayoutProps {
  text?: string;
  center: boolean;
}

export const OneColumnLayout = ({ text, center }: OneColumnLayoutProps) => {
  const layout = center ? { textAlign: 'center', ...styles.flexSingleRow } : styles.flexSingleRow;

  return (
    <View style={layout}>
      <Text>{text}</Text>
    </View>
  );
};
