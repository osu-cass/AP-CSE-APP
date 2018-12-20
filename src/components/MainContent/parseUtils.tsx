import React from 'react';
import { Passage } from './Components';

const splitByNewLine = (text: string | undefined) => {
  if (text) {
    return text.split('\r\n');
  }
};

const isUnderlined = (line: string) => {
  return (
    line ===
    '*(**Note**: In this automated version of the item specification, underlined text appears in italics.)*'
  );
};

export const NewLine: React.SFC = ({ children }) => (
  <span>
    {children}
    <br />
  </span>
);

const replaceDashWithDot = (text: string) => text.replace('-   ', '• ');

const removeBackSlash = (text: string) => text.replace(/(\\)([_<>])/g, '$2');

const replacer = (match: string, code: string) => String.fromCharCode(code);
const replaceCharRef = (text: string) => text.replace(/&#(\d*)/g, replacer);

const parsersInOrder = [replaceDashWithDot, removeBackSlash, replaceCharRef];
const applyParsers = (parsers: {}[], text: string) => {
  let parsedText: string = text;
  parsers.map((parser: (text: string) => string) => {
    parsedText = parser(parsedText);
  });

  return parsedText;
};

const parseSingleAsterisk = (text: string, underlined: boolean) => {
  const parts = text.split('*');

  return parts.map((part, index) => {
    const parsedText: string = applyParsers(parsersInOrder, part);

    if (index % 2 === 1) {
      if (underlined) return <u key={index}>{parsedText}</u>;

      return <i key={index}>{parsedText}</i>;
    }

    return <React.Fragment key={index}>{parsedText}</React.Fragment>;
  });
};

const parseDoubleAsterisks = (text: string, underlined: boolean) => {
  const parts = text.split('**');

  return parts.map((part, index) => {
    const parsedLine = parseSingleAsterisk(part, underlined);
    if (index % 2 === 1) {
      return <strong key={index}>{parsedLine}</strong>;
    }

    return <React.Fragment key={index}>{parsedLine}</React.Fragment>;
  });
};

export const parseContent = (text: string | undefined) => {
  const lines = splitByNewLine(text);

  if (!lines) return;
  const underlined = isUnderlined(lines[0]);

  if (underlined) {
    lines.splice(0, 2);
  }

  return lines.map((line, index) => {
    return <NewLine key={index}>{parseDoubleAsterisks(line, underlined)}</NewLine>;
  });
};

export const parseExamples = (examples: string | string[]) => {
  if (examples instanceof Array && examples.length > 0) {
    return examples.map(parseContent);
  }
  if (typeof examples === 'string') {
    return parseContent(examples);
  }

  return undefined;
};
