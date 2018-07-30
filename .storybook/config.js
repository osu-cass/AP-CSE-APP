import { configure } from '@storybook/react';

function loadStories() {
  const req = require.context('../src', true, /\.storybook\.tsx$/)

  req.keys().forEach(file => req(file))
  // You can require as many stories as you need.
}

configure(loadStories, module);