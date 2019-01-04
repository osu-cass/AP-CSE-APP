import React from 'react';
import { storiesOf } from '@storybook/react';

import { Footer } from '.';
import { RouterDecorator } from '../../__decorators__';

storiesOf('Footer', module)
  .addDecorator(RouterDecorator)
  .add('default', () => <Footer />);
