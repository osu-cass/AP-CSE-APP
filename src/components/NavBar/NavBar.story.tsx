import React from 'react';
import { storiesOf } from '@storybook/react';

import { NavBar, MobileNavBar } from '.';
import { RouterDecorator } from '../../__decorators__';
import { HeaderLogo, MenuItem, MainMenu } from './primitives';

storiesOf('NavBar', module)
  .addDecorator(RouterDecorator)
  .add('Desktop', () => <NavBar />)
  .add('Mobile', () => <MobileNavBar />);

storiesOf('NavBar/Primitives', module)
  .addDecorator(RouterDecorator)
  .add('Header Logo', () => <HeaderLogo />)
  .add('Menu Item', () => <MenuItem name="Menu Item" />)
  .add('Main Menu', () => <MainMenu />);
