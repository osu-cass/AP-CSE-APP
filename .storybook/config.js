import '@babel/polyfill';

import { configure } from '@storybook/react';
import { addDecorator } from '@storybook/react';
import { checkA11y } from '@storybook/addon-a11y';
import { withConsole } from '@storybook/addon-console';
import React from 'react';

import 'typeface-pt-serif/index.css'
import 'typeface-pt-sans-caption/index.css'

const fontStyle = {
  fontFamily: 'PT Sans Caption'
};
const fontDecorator = storyFn => <div style={fontStyle}>{storyFn()}</div>;

addDecorator((storyFn, context) => withConsole()(storyFn)(context));
addDecorator(checkA11y);
addDecorator(fontDecorator);

function loadStories() {
  const req = require.context('../src', true, /\.storybook\.tsx$/);

  req.keys().forEach(file => req(file));
  // You can require as many stories as you need.
}

configure(loadStories, module);
