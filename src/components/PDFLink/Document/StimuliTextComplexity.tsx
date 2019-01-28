import React from 'react';
// import '../../../../node_modules/typeface-pt-serif/index.css';
import { Text, View, StyleSheet } from '@react-pdf/renderer';
import { styles } from './styles';

export interface ItemRow {
  title: string;
  description: string;
}

export interface StimuliProps {
  stemInfo: string;
  dualText?: string;
  complexity?: string;
}

const renderSection = (title: string, section: string) => (
  <View style={styles.item} key={`${title} - ${title}}`}>
    <Text style={styles.bold}>{title}</Text>
    <Text style={styles.description}>{section}</Text>
  </View>
);

export const Stimuli = ({ stemInfo, dualText, complexity }: StimuliProps): JSX.Element => {
  return (
    <View style={styles.flexRow}>
      <View style={styles.flexColumnLeft}>
        <Text style={styles.bold}>{'Stimuli/\nText Complexity'}</Text>
      </View>
      <View style={styles.flexColumnRight}>
        {renderSection('Passage', stemInfo)}
        {dualText && renderSection('Dual Text', dualText)}
        {complexity && complexity !== 'NA' && renderSection('Text Complexity', complexity)}
      </View>
    </View>
  );
};
