import React from 'react';
import { CSEFilterParams, CSEFilterOptions } from '../../models/filter';
import { MobileFilter } from '.';
import { filterOptionsGS, filterOptionsGSC, filterOptionsGSCT } from '../DesktopFilter/__mocks__';
import { storiesOf, addDecorator } from '@storybook/react';
import centered from '@storybook/addon-centered';
import { withViewport } from '@storybook/addon-viewport';

const callback = (newFilter: CSEFilterParams) => {
  // tslint:disable-next-line:no-console
  console.log('New filter params:', JSON.stringify(newFilter));
};

storiesOf('Mobile Filter', module)
  .addDecorator(centered)
  .add('default', () => (
    <MobileFilter params={{ grades: [] }} options={filterOptionsGS} onUpdate={callback} />
  ))
  .add('with claims', () => (
    <MobileFilter params={{ grades: [] }} options={filterOptionsGSC} onUpdate={callback} />
  ))
  .add('with targets', () => (
    <MobileFilter params={{ grades: [] }} options={filterOptionsGSCT} onUpdate={callback} />
  ));
