import React from 'react';
import { storiesOf } from '@storybook/react';
import centered from '@storybook/addon-centered';

import { HomeContent } from './index';

storiesOf('HomeContent component', module)
  .addDecorator(centered)
  .add('HomeContent', () => <HomeContent />);
