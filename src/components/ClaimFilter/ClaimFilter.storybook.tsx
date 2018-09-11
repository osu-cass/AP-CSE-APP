import React from 'react';
import { storiesOf } from '@storybook/react';
import centered from '@storybook/addon-centered';

import { ClaimFilter } from './index';

storiesOf('ClaimFilter component', module)
  .addDecorator(centered)
  .add('ClaimFilter', () => <ClaimFilter />);
