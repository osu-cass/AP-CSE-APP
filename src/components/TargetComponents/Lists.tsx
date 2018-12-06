import React from 'react';

export interface ListProps {
  elements: React.ReactNode[];
}

export const OrderedList: React.SFC<ListProps> = ({ elements }) => {
  const elementsJsx = elements.map((e, i) => <li key={i}>{e}</li>);

  return (
    <ol>
      {elementsJsx}
      <style jsx>{`
        ol {
        }
      `}</style>
    </ol>
  );
};

export const UnorderedList: React.SFC<ListProps> = ({ elements }) => {
  const elementsJsx = elements.map((e, i) => <li key={i}>{e}</li>);

  return (
    <ul>
      {elementsJsx}
      <style jsx>{`
        ul {
        }
      `}</style>
    </ul>
  );
};
