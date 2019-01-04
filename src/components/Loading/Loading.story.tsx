import React from 'react';
import { storiesOf } from '@storybook/react';
import centered from '@storybook/addon-centered';

import { Loading } from '.';

storiesOf('Loading', module)
  .addDecorator(centered)
  .add('Default', () => <Loading />);
