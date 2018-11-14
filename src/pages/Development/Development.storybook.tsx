import React from 'react';
import { storiesOf } from '@storybook/react';
import centered from '@storybook/addon-centered';
import { DevelopmentPage } from '.';
import { RouterDecorator } from '../../__decorators__';

storiesOf('TestPage component', module)
  .addDecorator(RouterDecorator)
  .addDecorator(centered)
  .add('TestPage', () => <DevelopmentPage />);
