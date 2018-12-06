import React from 'react';
import { storiesOf } from '@storybook/react';
import { RouterDecorator } from '../../__decorators__';
import centered from '@storybook/addon-centered';
import { targetMock } from './mocks';
import { TargetDetail } from './TargetDetail';
import ELAG3ClaimMock from '../../../mock_api_data/E.G3.C1';

storiesOf('Target Page', module)
  .addDecorator(RouterDecorator)
  .addDecorator(centered)
  .add('Renders a target', () => <TargetDetail target={ELAG3ClaimMock.target[0]} />)
  .add('Renders a nothing', () => <TargetDetail target={targetMock} />);