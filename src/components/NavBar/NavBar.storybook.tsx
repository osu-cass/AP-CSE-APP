import React from 'react';
import { storiesOf } from '@storybook/react';

import { NavBar } from '.';
import { RouterDecorator } from '../../RouterDecorator';

storiesOf('NavBar component', module)
  .addDecorator(RouterDecorator)
  .add('NavBar', () => <NavBar siteName={'test'} mainContentId={'main'} />);
