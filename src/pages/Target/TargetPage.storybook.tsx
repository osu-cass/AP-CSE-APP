import React from 'react';
import { storiesOf } from '@storybook/react';
import { RouterDecorator } from '../../__decorators__';
import centered from '@storybook/addon-centered';
import { mockEmptyTargetClient, mockTargetClient } from './mocks';
import { TargetPage } from '.';

storiesOf('Target Page', module)
  .addDecorator(RouterDecorator)
  .addDecorator(centered)
  .add('Renders a target', () => (
    <TargetPage
      targetClient={mockTargetClient}
      match={{ params: { targetShortCode: 'E.G3.C1.T1' } }}
    />
  ))
  .add('Renders a nothing', () => (
    <TargetPage
      targetClient={mockEmptyTargetClient}
      match={{ params: { targetShortCode: 'invalid-target-code' } }}
    />
  ));
