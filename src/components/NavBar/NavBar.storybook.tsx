import React from 'react';
import { storiesOf } from '@storybook/react';
import centered from '@storybook/addon-centered';

import { NavBar } from '.';
import { RouterDecorator } from '../../RouterDecorator';

storiesOf('NavBar component', module)
  .addDecorator(RouterDecorator)
  .add('NavBar', () => <NavBar links={[]} siteName={'test'} mainContentId={'main'} />);
