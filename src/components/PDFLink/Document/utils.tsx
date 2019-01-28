import React from 'react';
import { Text, Image, View } from '@react-pdf/renderer';
import { styles } from './styles';

const replaceDashWithDot = (text: string): string => text.replace('- ', '• ');

const removeBackSlash = (text: string): string => text.replace(/(\\)([_<>])/g, '');

const parsers = [removeBackSlash, replaceDashWithDot];

const applyParsers = (parser: ((text: string) => string)[], text: string) => {
  let parsedText: string = text;
  parsers.forEach((parser: (text: string) => string) => {
    parsedText = parser(parsedText);
  });

  return parsedText;
};

const splitByNewLine = (text: string | undefined): string[] | undefined => {
  if (text) {
    return text.split('\r\n');
  }
};

const parseDoubleAsterisk = (text: string): JSX.Element => {
  const parts = text.split('**');

  return (
    <View>
      {parts.map((part, index) => {
        const parsedText: string = applyParsers(parsers, part);
        if (index % 2 === 1) {
          return <Text style={styles.bold}>{parsedText}</Text>;
        }

        return <Text>{parsedText}</Text>;
      })}
    </View>
  );
};

const parseImageTags = (text: string): JSX.Element => {
  const urlPattern = /\!\[.*\]\((.*)\)/;
  const match = text.match(urlPattern);
  const url = match && match[1];

  return <Image src={url || ''} />;
};

export const parsePdfContent = (
  text: string | undefined,
  style?: object
): JSX.Element | undefined => {
  const lines = splitByNewLine(text);

  if (!lines) {
    return;
  }

  return (
    <View>
      {lines.map((line, index) => {
        let content;
        if (line.startsWith('![') && line.endsWith(')')) {
          content = parseImageTags(line);
        } else {
          content = parseDoubleAsterisk(line);
        }

        return (
          <Text style={style}>
            {content}
            {'\n'}
          </Text>
        );
      })}
    </View>
  );
};
