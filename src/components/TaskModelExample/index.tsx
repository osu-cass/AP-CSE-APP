import React from 'react';

import { parseExamples } from '../TargetDetails/parseUtils';

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
      {examples.map((e, i) => {
        const parsedContent = parseExamples(e.content);

        return (
          <div key={i}>
            <h4>
              <strong>{`${e.label}:`}</strong>
            </h4>
            {parsedContent}
            <style jsx>{`
              div {
                margin-top: 1em;
              }
            `}</style>
          </div>
        );
      })}
    </React.Fragment>
  );
};
