import React from 'react';
import { Text, View } from '@react-pdf/renderer';
import { IStandards } from '../../../models/target';
import { styles } from './styles';
import { parsePdfContent } from './utils';

export interface TargetProps {
  content: IStandards[];
}

export const Standards = async ({ content }: TargetProps) => {
  const standardsPromises = content.map(async (element: IStandards) => {
    const array = element.stdCode.split('.');
    let standardShortCode: string;

    if (array[0] === 'E') {
      standardShortCode = `${array[4]}-${array[6]}`;
    } else {
      // if it is a math target
      standardShortCode = `${array[4]}.${array[5]}.${array[6]}.${array[7]}`;
    }

    return (
      <View wrap={false} style={styles.item} key={`${element.stdCode} - ${element.stdDesc}`}>
        <Text style={styles.bold} key={`${element.stdDesc}-1`}>{`${standardShortCode}: `}</Text>
        {await parsePdfContent(element.stdDesc, styles.description)}
      </View>
    );
  });

  const standardsJsx = await Promise.all(standardsPromises);

  return (
    <View wrap style={styles.flexRow}>
      <View style={styles.flexColumnLeft}>
        <Text style={styles.bold}>Standards</Text>
      </View>
      <View style={styles.flexColumnRight}>{standardsJsx}</View>
    </View>
  );
};
