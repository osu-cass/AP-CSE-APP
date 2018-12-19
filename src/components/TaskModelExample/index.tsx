import React from 'react';
import { parseExamples } from '../MainContent/parseUtils';

export interface Example {
  label: string;
  content: string;
}

export interface ExamplesProps {
  examples: Example[];
}

export const Examples: React.SFC<ExamplesProps> = ({ examples }: ExamplesProps) => {
  return (
    <React.Fragment>
      {examples.map(e => {
        const parsedContent = parseExamples(e.content);

        return (
          <div>
            <p>
              <strong>{`${e.label}:`}</strong>
            </p>
            <p>{parsedContent}</p>
          </div>
        );
      })}
    </React.Fragment>
  );
};
