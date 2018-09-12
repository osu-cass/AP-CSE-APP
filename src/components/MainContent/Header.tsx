import React from 'react';
import { ContentProps } from './index';

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
