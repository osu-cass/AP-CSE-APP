import React from 'react';
import { Text, View, StyleSheet } from '@react-pdf/renderer';
import { styles } from './styles';

export interface BulletContent {
  header: string;
  bulletpoints: string[];
}

export interface BulletedItemProps {
  leftText: string;
  rightContent: BulletContent[];
}

export const BulletedList: React.SFC<BulletedItemProps> = ({ leftText, rightContent }) => (
  <View style={styles.flexRow}>
    <View style={styles.flexColumnLeft}>
      <Text>{leftText}</Text>
    </View>
    <View style={styles.flexColumnRight}>
      {rightContent.map((element, idx) => (
        <View key={`${element.header}-${element.bulletpoints}`}>
          <Text key={`${element.header}-${idx}`} style={styles.bulletHeader}>
            {' '}
            {element.header}{' '}
          </Text>
          {element.bulletpoints.map((element1, idx1) => (
            <View style={styles.bulletpoint}>
              <Text style={styles.contentBox} key={`${element1}-${idx1}`}>
                {' '}
                • {element1}{' '}
              </Text>
            </View>
          ))}
        </View>
      ))}
    </View>
  </View>
);
