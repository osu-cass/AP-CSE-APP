import React from 'react';
import { Text, Image } from '@react-pdf/renderer';
import { styles } from './styles';

const replaceDashWithDot = (text: string) => text.replace('-   ', '• ');

const removeBackSlash = (text: string) => text.replace(/(\\)([_<>])/g, '$2');

const parsers = [removeBackSlash, replaceDashWithDot];

const applyParsers = (parser: ((text: string) => string)[], text: string) => {
  let parsedText: string = text;
  parsers.forEach((parser: (text: string) => string) => {
    parsedText = parser(parsedText);
  });

  return parsedText;
};

const splitByNewLine = (text: string | undefined) => {
  if (text) {
    return text.split('\r\n');
  }
};

const removeCR = (text: string) => {
  return <Text />;
};

const parseDoubleAsterisk = (text: string) => {
  const parts = text.split('**');

  return parts.map((part, index) => {
    const parsedText: string = applyParsers(parsers, part);
    if (index % 2 === 1) {
      return <Text style={styles.bold}>{part}</Text>;
    }

    return <Text>{part}</Text>;
  });
};

const parseImageTags = (text: string) => {
  const urlPattern = /\!\[.*\]\((.*)\)/;
  const match = text.match(urlPattern);
  const url = match && match[1];

  return <Image src={url || ''} />;
};

const parseContent = (text: string | undefined) => {
  const lines = splitByNewLine(text);

  if (!lines) {
    return;
  }

  return lines.map((line, index) => {
    let content;
    if (line.startsWith('![') && line.endsWith(')')) {
      content = parseImageTags(line);
    } else {
      content = parseDoubleAsterisk(line);
    }

    return <Text>{`${content}\n`}</Text>;
  });
};
