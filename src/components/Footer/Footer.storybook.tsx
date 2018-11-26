import React from 'react';
import { storiesOf } from '@storybook/react';
import { RouterDecorator } from '../../__decorators__';
import { Footer } from '.';

storiesOf('Footer', module)
  .addDecorator(RouterDecorator)
  .add('default', () => <Footer />);
