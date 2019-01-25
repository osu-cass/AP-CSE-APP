import React from 'react';
// import '../../../../node_modules/typeface-pt-serif/index.css';
import { Text, View, StyleSheet } from '@react-pdf/renderer';
import { ITarget } from '../../../models/target';
import { styles } from './styles';

export interface ItemRow {
  title: string;
  description: string;
}

export interface TargetProps {
  content: ITarget;
}

export const Clarification = ({ content }: TargetProps) => (
  <>
    <View style={styles.flexRow}>
      <View style={styles.flexColumnLeft}>
        <Text>Clarifications</Text>
      </View>
      <View style={styles.flexColumnRight}>
        <Text>{content.clarification}</Text>
      </View>
    </View>
  </>
);
