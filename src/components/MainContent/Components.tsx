import React from 'react';
import { Element } from 'react-scroll/modules';

export interface HeaderProps {
  text: string;
}

export interface SectionProps {
  name: string;
}

export const Section: React.SFC<SectionProps> = ({ name, children }) => (
  <Element name={name}>
    <div>{children}</div>
    <style jsx>{`
      div {
        padding-left: 0.5em;
      }
    `}</style>
  </Element>
);

export const MainHeader = ({ text }: HeaderProps) => (
  <header>
    <h1>{text}</h1>
  </header>
);
export const SubHeader = ({ text }: HeaderProps) => (
  <header>
    <h2>{text}</h2>
  </header>
);

export const NonBulletList: React.SFC = ({ children }) => (
  <ul>
    {children}
    <style jsx>{`
      ul {
        margin: 0;
        padding: 0;
        list-style-type: none;
        padding-left: 0.5em;
      }
    `}</style>
  </ul>
);

export const NumberList: React.SFC = ({ children }) => (
  <ol>
    {children}
    <style jsx>{`
      ol {
        margin: 0;
        padding-left: 1.5em;
      }
    `}</style>
  </ol>
);

export const Passage: React.SFC = ({ children }) => (
  <p>
    {children}
    <style jsx>{`
      p {
        padding-left: 0.5em;
        justify-content: center;
      }
    `}</style>
  </p>
);
