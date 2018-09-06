import React from 'react';
import { storiesOf } from '@storybook/react';
import centered from '@storybook/addon-centered';

import { NavBar } from '.';

storiesOf('NavBar component', module)
  .addDecorator(centered)
  .add('NavBar', () => <NavBar links={[]} siteName={'test'} mainContentId={'main'} />);
