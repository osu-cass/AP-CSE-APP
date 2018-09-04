import React from 'react';

export function capitalize(str: String): String {
  return str.toUpperCase();
}

interface HelloWorldProps {
  name: String;
  caps?: Boolean;
}

export const HelloWorld = ({ name, caps }: HelloWorldProps) =>
  <div>
    <h1>{caps ? capitalize(name) : name}</h1>
    <style jsx>{`
      h1 {
        color: gray;
        font-family: "PT Sans Caption"
      }
    `}</style>
  </div>;
