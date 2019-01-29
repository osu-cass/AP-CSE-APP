import React from 'react';
import { Text, View } from '@react-pdf/renderer';
import { styles } from './styles';
import { parsePdfContent } from './utils';

export interface OneColumnLayoutProps {
  text?: string;
  center: boolean;
}

export const OneColumnLayout = ({ text, center }: OneColumnLayoutProps) => {
  const layout = center ? { textAlign: 'center', ...styles.flexSingleRow } : styles.flexSingleRow;
  const content = parsePdfContent(text);

  return <View style={layout}>{content}</View>;
};
