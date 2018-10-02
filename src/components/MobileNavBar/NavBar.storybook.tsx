import React from 'react';
import { storiesOf } from '@storybook/react';

import { RouterDecorator } from '../../RouterDecorator';
import { MobileNavBar } from '.';

storiesOf('Mobile NavBar', module)
  .addDecorator(RouterDecorator)
  .add('default render', () => <MobileNavBar />);
