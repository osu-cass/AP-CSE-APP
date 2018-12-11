import React from 'react';
import centered from '@storybook/addon-centered';
import { storiesOf } from '@storybook/react';
import { FilterComponent } from '.';
import { filterOptionsGS, filterOptionsGSC, filterOptionsGSCT } from './__mocks__';
import { CSEFilterParams } from '../../models/filter';

const callback = (filter: CSEFilterParams) => {
  // tslint:disable-next-line:no-console
  console.log('New filter params:', JSON.stringify(filter));
};

storiesOf('Filter Component', module)
  .addDecorator(centered)
  .add('default', () => (
    <FilterComponent
      params={{ grades: [] }}
      options={filterOptionsGS}
      onUpdate={callback}
      expanded={true}
    />
  ))
  .add('Subject, Grade and Claim', () => (
    <FilterComponent
      params={{ grades: [] }}
      options={filterOptionsGSC}
      onUpdate={callback}
      expanded={true}
    />
  ))
  .add('Subject, Grade, Claim and Target', () => (
    <FilterComponent
      params={{ grades: [] }}
      options={filterOptionsGSCT}
      onUpdate={callback}
      expanded={true}
    />
  ));
