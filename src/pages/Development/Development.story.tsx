import React from 'react';
import { storiesOf } from '@storybook/react';
import { DevelopmentPage } from '.';
import { RouterDecorator } from '../../__decorators__';

storiesOf('Development Page', module)
  .addDecorator(RouterDecorator)
  .add('Default', () => <DevelopmentPage />);
