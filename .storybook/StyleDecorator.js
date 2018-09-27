import React from 'react';

const customStyle = {
  fontFamily: 'PT Sans Caption'
};

export const StyleDecorator = storyFn => <div style={customStyle}>{storyFn()}</div>;
