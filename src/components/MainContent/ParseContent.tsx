import React from 'react';
import { ContentProps } from './index';

const SplitByNewLine = (text: string) => {
  return text.split('\r\n');
};

const IsUnderlined = (line: string) => {
  return (
    line ===
    '*(**Note**: In this automated version of the item specification, underlined text appears in italics.)*'
  );
};

export const NewLine = ({ children }: ContentProps) => (
  <span>
    {children}
    <br />
  </span>
);

const ReplaceDashWithDot = (text: string) => text.replace('-   ', '• ');

const ParseSingle = (text: string, underlined: boolean) => {
  const parts = text.split('*');

  return parts.map((part, index) => {
    const noDashPart = ReplaceDashWithDot(part);
    if (index % 2 === 1) {
      if (underlined) return <u key={index}>{noDashPart}</u>;

      return <i key={index}>{noDashPart}</i>;
    }

    return <React.Fragment key={index}>{noDashPart}</React.Fragment>;
  });
};

const ParseContent = (text: string, underlined: boolean) => {
  const parts = text.split('**');

  return parts.map((part, index) => {
    const parsedLine = ParseSingle(part, underlined);
    if (index % 2 === 1) {
      return <strong key={index}>{parsedLine}</strong>;
    }

    return <React.Fragment key={index}>{parsedLine}</React.Fragment>;
  });
};

export const Content = (text: string) => {
  const lines = SplitByNewLine(text);

  if (!lines[0]) return;
  const underlined = IsUnderlined(lines[0]);

  if (underlined) {
    lines.splice(0, 2);
  }

  return lines.map((line, index) => {
    return <NewLine key={index}>{ParseContent(line, underlined)}</NewLine>;
  });
};
