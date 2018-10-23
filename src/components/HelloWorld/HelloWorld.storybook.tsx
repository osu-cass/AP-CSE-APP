import React from 'react';
import { storiesOf } from '@storybook/react';
import centered from '@storybook/addon-centered';

import { HelloWorld } from './index';

storiesOf('HelloWorld component', module)
  .addDecorator(centered)
  .add('Renders a lowercased name', () => <HelloWorld name="Thomas Noelcke" />)
  .add('Renders a capitalized name', () => <HelloWorld name="Thomas Noelcke" caps />);
