import React from 'react';
import { storiesOf } from '@storybook/react';
import centered from '@storybook/addon-centered';

import { HelloWorld } from './index';

storiesOf('HelloWorld component', module)
  .addDecorator(centered)
  .add('Renders greeting', () => <HelloWorld />);
