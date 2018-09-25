const parseNewLine = (content: string) => content.replace('\r\n', '</br>');

const parseBold = (content: string) => {
  const reg = /\*\*(.*)\*\*/g;

  return content.replace(reg, (_, innerMatch) => {
    return `<b>${innerMatch}</b>`;
  });
};

const parseUnderline = (content: string) => {
  const reg = /\*(.*)\*/g;

  return content.replace(reg, (_, innerMatch) => {
    return `<span style='text-decoration: underline;'>${innerMatch}</span>`;
  });
};

export function parseContent(content: string) {
  return parseBold(parseUnderline(parseNewLine(content)));
}
