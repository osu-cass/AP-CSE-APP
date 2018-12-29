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

const onSubjectUpdate = (code: FilterType, data?: FilterOptionModel) => {
  // tslint:disable-next-line:no-console
  console.log('Subject Chnaged', JSON.stringify(data));
};

storiesOf('Filter/Mobile', module)
  .addDecorator(centered)
  .add('default', () => (
    <MobileFilter
      filters={filterModelGS}
      onUpdate={callback}
      reset={reset}
      onSubjectUpdate={onSubjectUpdate}
    />
  ))
  .add('with claims', () => (
    <MobileFilter
      filters={filterModelGSC}
      onUpdate={callback}
      reset={reset}
      onSubjectUpdate={onSubjectUpdate}
    />
  ))
  .add('with targets', () => (
    <MobileFilter
      filters={filterModelCSCT}
      onUpdate={callback}
      reset={reset}
      onSubjectUpdate={onSubjectUpdate}
    />
  ));
