import React from 'react';
import { ContentProps } from './index';

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
