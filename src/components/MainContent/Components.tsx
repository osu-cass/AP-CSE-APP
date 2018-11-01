import React from 'react';
import Scroll, { Element, Link } from 'react-scroll/modules';

export interface HeaderProps {
  text: string;
}

export interface ContentProps {
  children:
    | void
    | string
    | JSX.Element
    | JSX.Element[]
    | (JSX.Element | undefined)[]
    | (JSX.Element | undefined);
}

export interface SectionProps extends ContentProps {
  name: string;
}

export const Section = ({ name, children }: SectionProps) => (
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

export const NonBulletList = ({ children }: ContentProps) => (
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

export const NumberList = ({ children }: ContentProps) => (
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

export const Passage = ({ children }: ContentProps) => (
  <p>
    {children}
    <style jsx>{`
      p {
        padding-left: 0.5em;
      }
    `}</style>
  </p>
);
