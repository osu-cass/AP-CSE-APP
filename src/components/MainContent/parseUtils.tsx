import React from 'react';
import { Passage } from './Components';

const splitByNewLine = (text: string) => {
  return text.split('\r\n');
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

const parseSingleAsterisk = (text: string, underlined: boolean) => {
  const parts = text.split('*');

  return parts.map((part, index) => {
    const noDashPart = replaceDashWithDot(part);
    if (index % 2 === 1) {
      if (underlined) return <u key={index}>{noDashPart}</u>;

      return <i key={index}>{noDashPart}</i>;
    }

    return <React.Fragment key={index}>{noDashPart}</React.Fragment>;
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

export const parseContent = (text: string) => {
  const lines = splitByNewLine(text);

  if (!lines[0]) return;
  const underlined = isUnderlined(lines[0]);

  if (underlined) {
    lines.splice(0, 2);
  }

  const content = lines.map((line, index) => {
    return <NewLine key={index}>{parseDoubleAsterisks(line, underlined)}</NewLine>;
  });

  return <Passage>{content}</Passage>;
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
