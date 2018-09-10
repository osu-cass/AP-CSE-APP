import React from 'react';

interface HelloWorldProps {
  name: String;
  caps?: Boolean;
}

export const ContentViewer = ({ name, caps }: HelloWorldProps) => (
  <div>
    <h1>{name}</h1>
    <style jsx>{`
      h1 {
        color: gray;
        font-family: 'PT Sans Caption';
      }
    `}</style>
  </div>
);
