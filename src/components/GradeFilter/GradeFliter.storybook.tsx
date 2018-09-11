import React from 'react';
import { storiesOf } from '@storybook/react';
import centered from '@storybook/addon-centered';

import { GradeFilter } from './index';

storiesOf('GradeFilter component', module)
  .addDecorator(centered)
  .add('GradeFilter', () => <GradeFilter />);
