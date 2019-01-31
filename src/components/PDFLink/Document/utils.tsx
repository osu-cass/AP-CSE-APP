import React from 'react';
import { Text, Image, View } from '@react-pdf/renderer';
import { styles } from './styles';

const { API_ENDPOINT } = process.env;

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

const parseImageTags = (text: string): JSX.Element => {
  const urlPattern = /\!\[.*\]\((.*)\)/;
  const match = text.match(urlPattern);
  const url = match && match[1];
  const serverUrl = API_ENDPOINT || 'http://localhost:3000';

  let content: JSX.Element = <Text>Image Could Not Be Loaded</Text>;
  if (url) {
    const imagePath = url.split('.org')[1];
    const proxyUrl = `${API_ENDPOINT}/proxy${imagePath}`;
    content = <Image style={styles.flexImage} src={proxyUrl} />;
  }

  return content;
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
          content = (
            <Text style={style}>
              {parseDoubleAsterisk(line)}
              {'\n'}
            </Text>
          );
        }

        return <View style={style}>{content}</View>;
      })}
    </View>
  );
};
