import React from 'react';
import { storiesOf } from '@storybook/react';
import centered from '@storybook/addon-centered';

import { FilterComponent } from '.';
import { CSEFilterParams } from '../../models/filter';
import { filterOptionsGS, filterOptionsGSC, filterOptionsGSCT } from './__mocks__';

const callback = (filter: CSEFilterParams) => {
  // tslint:disable-next-line:no-console
  console.log('New filter params:', JSON.stringify(filter));
};

// tslint:disable:no-empty
storiesOf('Filter', module)
  .addDecorator(centered)
  .add('default', () => (
    <FilterComponent
      params={{ grades: [] }}
      options={filterOptionsGS}
      onUpdate={callback}
      expanded={true}
      filterPT={() => {}}
    />
  ))
  .add('Subject, Grade and Claim', () => (
    <FilterComponent
      params={{ grades: [] }}
      options={filterOptionsGSC}
      onUpdate={callback}
      expanded={true}
      filterPT={() => {}}
    />
  ))
  .add('Subject, Grade, Claim and Target', () => (
    <FilterComponent
      params={{ grades: [] }}
      options={filterOptionsGSCT}
      onUpdate={callback}
      expanded={true}
      filterPT={() => {}}
    />
  ));
