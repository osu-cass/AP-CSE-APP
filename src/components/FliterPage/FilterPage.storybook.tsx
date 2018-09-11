import React from 'react';
import { storiesOf } from '@storybook/react';
import centered from '@storybook/addon-centered';

import { FilterPage } from './index';

storiesOf('FilterPage component', module)
  .addDecorator(centered)
  .add('FilterPage', () => <FilterPage />);
