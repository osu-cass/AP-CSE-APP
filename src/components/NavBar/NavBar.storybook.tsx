import React from 'react';
import { storiesOf } from '@storybook/react';
import { NavBar } from '.';
import { RouterDecorator } from '../../__decorators__/';
import { MobileNavBar } from './mobile';

storiesOf('NavBar', module)
  .addDecorator(RouterDecorator)
  .add('NavBar', () => <NavBar />);

storiesOf('NavBar/Mobile', module)
  .addDecorator(RouterDecorator)
  .add('Default', () => <MobileNavBar />);
