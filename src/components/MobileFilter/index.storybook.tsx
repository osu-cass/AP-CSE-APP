import React from 'react';
import { MobileFilter } from '.';
import { storiesOf, addDecorator } from '@storybook/react';
import centered from '@storybook/addon-centered';
import { filterModelGS, filterModelGSC, filterModelCSCT } from './mocks';
import { FilterOptionModel, FilterType } from '@osu-cass/sb-components';

const callback = (newFilter: string[], code: FilterType) => {
  // tslint:disable-next-line:no-console
  console.log('New filter params:', JSON.stringify(newFilter));
};

const reset = () => {
  // tslint:disable-next-line:no-console
  console.log('Filter Reset');
};

storiesOf('Mobile Filter', module)
  .addDecorator(centered)
  .add('default', () => <MobileFilter filters={filterModelGS} onUpdate={callback} reset={reset} />)
  .add('with claims', () => (
    <MobileFilter filters={filterModelGSC} onUpdate={callback} reset={reset} />
  ))
  .add('with targets', () => (
    <MobileFilter filters={filterModelCSCT} onUpdate={callback} reset={reset} />
  ));
