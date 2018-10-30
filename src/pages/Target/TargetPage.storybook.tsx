import React from 'react';
import { storiesOf } from '@storybook/react';
import { RouterDecorator } from '../../__decorators__';
import centered from '@storybook/addon-centered';

import { TargetPage } from '.';

storiesOf('Target Page', module)
  .addDecorator(RouterDecorator)
  .addDecorator(centered)
  .add('Renders a target', () => <TargetPage match={'English Language Arts/6/C1/E.G6.C1RL.T1'} />)
  .add('Renders a nothing', () => <TargetPage match={'English Language Arts/6/C1/E.G6.C1RL.T1'} />);
