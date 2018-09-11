import React from 'react';
import { storiesOf } from '@storybook/react';
import centered from '@storybook/addon-centered';

import { SubjectFilter } from './index';

storiesOf('SubjectFliter component', module)
  .addDecorator(centered)
  .add('SubjectFliter', () => <SubjectFilter />);
