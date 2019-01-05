import React from 'react';
import { storiesOf } from '@storybook/react';
import { RouterDecorator } from '../../__decorators__';
import centered from '@storybook/addon-centered';
import { targetMock, tableMock } from './__mocks__';
import { TargetDetail } from '.';
import ELAG3ClaimMock from '../../../mock_api_data/E.G3.C1';
import { Table } from './Table';

storiesOf('Target Page', module)
  .addDecorator(RouterDecorator)
  .addDecorator(centered)
  .add('Renders a target', () => <TargetDetail target={ELAG3ClaimMock.target[0]} />)
  .add('Renders a nothing', () => <TargetDetail target={targetMock} />)
  .add('Render a table in the content of target page', () => <Table table={tableMock} />);
