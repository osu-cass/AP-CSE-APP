import React from 'react';
import { storiesOf } from '@storybook/react';
import { RouterDecorator } from '../../__decorators__';
import centered from '@storybook/addon-centered';
import { targetMock } from './__mocks__';
import { TargetDetail } from '.';
import ELAG3ClaimMock from '../../../mock_api_data/E.G3.C1';
import ELAG3C2T4Mock from '../../../mock_api_data/E.G3.PT';

storiesOf('Target Page', module)
  .addDecorator(RouterDecorator)
  .addDecorator(centered)
  .add('Renders a target', () => <TargetDetail target={ELAG3ClaimMock.target[0]} />)
  .add('Renders a nothing', () => <TargetDetail target={targetMock} />)
  .add('Render a target with tables', () => <TargetDetail target={ELAG3C2T4Mock.target[0]} />);
