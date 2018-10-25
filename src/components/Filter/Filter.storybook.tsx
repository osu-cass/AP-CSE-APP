import React from 'react';
import { CSEFilterParams, CSEFilterOptions } from '../../models/filter';
import { Filter } from './';
import { filterOptionsGS, filterOptionsGSC, filterOptionsGSCT } from './__mocks__';
import { storiesOf } from '@storybook/react';
import centered from '@storybook/addon-centered';

const callback = (newFilter: CSEFilterParams) => {
  // tslint:disable-next-line:no-console
  console.log('New filter params:', JSON.stringify(newFilter));
};

storiesOf('Filter', module)
  .addDecorator(centered)
  .add('default', () => (
    <Filter params={{ grades: [] }} options={filterOptionsGS} onUpdate={callback} />
  ))
  .add('selected grade', () => (
    <Filter params={{ grades: ['ms'] }} options={filterOptionsGS} onUpdate={callback} />
  ))
  .add('selected subject', () => (
    <Filter
      params={{ grades: [], subject: 'math' }}
      options={filterOptionsGSC}
      onUpdate={callback}
    />
  ))
  .add('selected subject, claim', () => (
    <Filter
      params={{ grades: [], subject: 'math', claim: 'm1' }}
      options={filterOptionsGSCT}
      onUpdate={callback}
    />
  ))
  .add('selected subject, claim, target', () => (
    <Filter
      params={{ grades: [], subject: 'math', claim: 'm1', target: 'pf' }}
      options={filterOptionsGSCT}
      onUpdate={callback}
    />
  ))
  .add('selected grades, subject, claim, target', () => (
    <Filter
      params={{ grades: ['ms', 'hs'], subject: 'math', claim: 'm1', target: 'pf' }}
      options={filterOptionsGSCT}
      onUpdate={callback}
    />
  ))
  .add('invalid', () => (
    <Filter
      params={{ grades: ['ms'], claim: 'm1', target: 'pf' }}
      options={filterOptionsGS}
      onUpdate={callback}
    />
  ))
  .add('invalid 2', () => (
    <Filter
      params={{ grades: ['ms'], subject: 'math', target: 'pf' }}
      options={filterOptionsGSC}
      onUpdate={callback}
    />
  ));
