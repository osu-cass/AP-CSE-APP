import React from 'react';
import { StoryDecorator } from '@storybook/react';

const outerStyle: React.CSSProperties = {
  width: '3in',
  border: '1px solid #ccc',
  margin: '20px auto',
  padding: '.1in',
  borderRadius: '.4in'
};

const innerStyle: React.CSSProperties = {
  height: '4.5in',
  border: '1px solid #ccc',
  marginTop: '.5in'
};

const circleStyle: React.CSSProperties = {
  width: '.5in',
  height: '.5in',
  margin: '10px auto 0 auto',
  borderRadius: '100%',
  border: '1px solid #ccc'
};

export const MobileDecorator: StoryDecorator = storyFn => (
  <div style={outerStyle}>
    <div style={innerStyle}>{storyFn()}</div>
    <div style={circleStyle} />
  </div>
);
