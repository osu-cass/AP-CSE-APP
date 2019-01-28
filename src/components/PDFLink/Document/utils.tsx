import React from 'react';
import { Text, Image, View } from '@react-pdf/renderer';
import { styles } from './styles';
import { image2base64 } from 'image-to-base64';


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

const splitByNewLine = (text: string | string[] | undefined): string[] | undefined => {
  let splitText: string[] | undefined;
  if (text) {
    if (typeof text === 'string') {
      splitText = text.split('\r\n');
    } else if (text instanceof Array) {
      splitText = [];
      text.map(t => t.split('\r\n').map(s => splitText && splitText.push(s)));
    }
  }

  return splitText;
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

const parseImageTags = async (text: string): JSX.Element => {

  const urlPattern = /\!\[.*\]\((.*)\)/;
  const match = text.match(urlPattern);
  const url = match && match[1];

  const response = await image2base64(url);


  return <Image src={response || ''} />;
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
        } else if (line !== 'NA' && line !== '<br>') {
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
