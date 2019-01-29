import React from 'react';
import { Text, Image, View } from '@react-pdf/renderer';
import { styles } from './styles';
import image2base64 from 'image-to-base64';

type ParseFn = (text: string) => string;

const replaceDashWithDot: ParseFn = text=> text.replace('- ', '• ');

const removeBackSlash: ParseFn = text => text.replace(/(\\)([_<>])/g, '');

const parsers = [removeBackSlash, replaceDashWithDot];

const applyParsers = (parsers: ParseFn[], text: string) => {
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

const parseImageTag = async (text: string): Promise<JSX.Element> => {
  const urlPattern = /\!\[.*\]\((.*)\)/;
  const match = text.match(urlPattern);
  const url = (match && match[1]) || '';

  const response = await image2base64(url);

  return <Image src={response} />;
};

export const parsePdfContent = async (
  text: string | undefined,
  style?: object
): Promise<JSX.Element | undefined> => {
  const lines = splitByNewLine(text);

  if (!lines) {
    return;
  }

  const promises = lines.map(async (line) => {
    let content: JSX.Element | undefined;
    if (line.startsWith('![') && line.endsWith(')')) {
      content = await parseImageTag(line);
    } else if (line !== 'NA' && line !== '<br>') {
      content = parseDoubleAsterisk(line);
    }

    return (
      <Text style={style}>
        {content}
        {'\n'}
      </Text>
    );
  });

  const views = await Promise.all(promises);

  return <View>{views}</View>;
};
