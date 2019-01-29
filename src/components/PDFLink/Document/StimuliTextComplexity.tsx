import React from 'react';
// import '../../../../node_modules/typeface-pt-serif/index.css';
import { Text, View, StyleSheet } from '@react-pdf/renderer';
import { styles } from './styles';
import { parsePdfContent } from './utils';

export interface ItemRow {
  title: string;
  description: string;
}

export interface StimuliProps {
  stemInfo: string;
  dualText?: string;
  complexity?: string;
}

const renderSection = async (title: string, section: string) => {
  return (
    <View style={styles.item} key={`${title} - ${title}}`}>
      <Text style={styles.bold}>{title}</Text>
      {await parsePdfContent(section, styles.description)}
    </View>
  );
};

export const Stimuli = async ({ stemInfo, dualText, complexity }: StimuliProps): Promise<JSX.Element> => {
  return (
    <View style={styles.flexRow}>
      <View style={styles.flexColumnLeft}>
        <Text style={styles.bold}>{'Stimuli/\nText Complexity'}</Text>
      </View>
      <View style={styles.flexColumnRight}>
        {await renderSection('Passage', stemInfo)}
        {dualText && (await renderSection('Dual Text', dualText))}
        {complexity && complexity !== 'NA' && (await renderSection('Text Complexity', complexity))}
      </View>
    </View>
  );
};
