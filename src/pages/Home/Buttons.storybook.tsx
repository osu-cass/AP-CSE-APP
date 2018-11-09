import React from 'react';
import { storiesOf } from '@storybook/react';
import centered from '@storybook/addon-centered';

import { HomeContent } from './index';
import { RouterDecorator } from '../../__decorators__';

storiesOf('HomeContent component', module)
  .addDecorator(centered)
  .addDecorator(RouterDecorator)
  .add('HomeContent', () => <HomeContent />);
