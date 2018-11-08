import React from 'react';
import { storiesOf } from '@storybook/react';
import { RouterDecorator } from '../../__decorators__';
import centered from '@storybook/addon-centered';

import { AppsPage } from '.';

storiesOf('Apps Page', module)
  .addDecorator(RouterDecorator)
  .addDecorator(centered)
  .add('Render an Apps', () => <AppsPage />);
