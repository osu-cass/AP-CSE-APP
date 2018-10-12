import React from 'react';
import { storiesOf } from '@storybook/react';
import { RouterDecorator } from '../../__decorators__';
import centered from '@storybook/addon-centered';

import { TargetPage } from '.';

storiesOf('Target Page', module)
  .addDecorator(RouterDecorator)
  .addDecorator(centered)
  .add('Renders a target', () => <TargetPage url={'regular'} />)
  .add('Renders a nothing', () => <TargetPage url={'blank'} />);
