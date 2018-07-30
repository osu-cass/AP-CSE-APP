import { configure } from '@storybook/react';
import { addDecorator } from '@storybook/react';
import { withConsole } from '@storybook/addon-console';
import { checkA11y } from '@storybook/addon-a11y';

addDecorator((storyFn, context) => withConsole()(storyFn)(context))
addDecorator(checkA11y)

function loadStories() {
  const req = require.context('../src', true, /\.storybook\.tsx$/)

  req.keys().forEach(file => req(file))
  // You can require as many stories as you need.
}

configure(loadStories, module);