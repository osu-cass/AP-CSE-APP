import React from 'react';
import { Element } from 'react-scroll/modules';

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
    {children}
    <style jsx>{`
      padding-left: 0.5em;
    `}</style>
  </Element>
);

export const MainHeader = ({ children }: ContentProps) => (
  <header>
    <h1>{children}</h1>
    <style jsx>{``}</style>
  </header>
);
export const SubHeader = ({ children }: ContentProps) => (
  <header>
    <h2>{children}</h2>
    <style jsx>{``}</style>
  </header>
);

export const NonBulletList = ({ children }: ContentProps) => (
  <ul>
    {children}
    <style jsx>{`
      * {
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
      * {
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
      padding-left: 0.5em;
    `}</style>
  </p>
);
