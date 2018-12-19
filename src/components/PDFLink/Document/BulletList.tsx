import React from 'react';
// import '../../../../node_modules/typeface-pt-serif/index.css';
import { Text, View, StyleSheet } from '@react-pdf/renderer';
// import styled from '@react-pdf/styled-components';

interface BulletListStyles {
  flexColumnRight: object;
  flexColumnLeft: object;
  bulletHeader: object;
  flexRow: object;
  rightcolumn: object;
  textbox: object;
  header: object;
  bulletpoint: object;
}

const styles = StyleSheet.create({
  flexColumnRight: {
    display: 'flex',
    width: '80%',
    padding: 5,
    paddingLeft: 8,
    paddingTop: 5,
    borderTop: '1px solid black',
    borderBottom: '1px solid black',
    borderRight: '2px solid black',
    fontSize: 12
  },
  flexColumnLeft: {
    display: 'flex',
    width: '20%',
    padding: 2,
    paddingRight: 8,
    borderTop: '1px solid black',
    borderRight: '2px solid black',
    borderBottom: '1px solid black',
    borderLeft: '2px solid black',
    fontSize: 12,
    textAlign: 'right'
  },
  bulletHeader: {
    padding: '2px',
    display: 'flex',
    border: '1px solid pink'
  },
  flexRow: {
    flexDirection: 'row'
  },
  rightcolumn: {
    border: '2px solid blue'
  },
  textbox: {
    width: '100%',
    display: 'flex',
    padding: '2px',
    position: 'static'
  },
  header: {
    display: 'flex'
  },
  bulletpoint: {
    width: '100%',
    display: 'flex'
  }
}) as BulletListStyles;

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
        <View style={styles.header} key={`${element.header}-${element.bulletpoints}`}>
          <Text key={`${element.header}-${idx}`} style={styles.bulletHeader}>
            {' '}
            {element.header}{' '}
          </Text>
          {element.bulletpoints.map((element1, idx1) => (
            <View style={styles.bulletpoint}>
              <Text style={styles.textbox} key={`${element1}-${idx1}`}>
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
