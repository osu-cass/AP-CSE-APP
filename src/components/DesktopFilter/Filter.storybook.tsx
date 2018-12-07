import React from 'react';
import { CSEFilterParams, CSEFilterOptions } from '../../models/filter';
import { DesktopFilter } from '.';
import { filterOptionsGS, filterOptionsGSC, filterOptionsGSCT } from './__mocks__';
import { storiesOf } from '@storybook/react';
import centered from '@storybook/addon-centered';

const callback = (newFilter: CSEFilterParams) => {
  // tslint:disable-next-line:no-console
  console.log('New filter params:', JSON.stringify(newFilter));
};

storiesOf('Desktop Filter', module)
  .addDecorator(centered)
  .add('default', () => (
    <DesktopFilter params={{ grades: [] }} options={filterOptionsGS} onUpdate={callback} />
  ))
  .add('selected grade', () => (
    <DesktopFilter params={{ grades: ['ms'] }} options={filterOptionsGS} onUpdate={callback} />
  ))
  .add('selected subject', () => (
    <DesktopFilter
      params={{ grades: [], subject: 'math' }}
      options={filterOptionsGSC}
      onUpdate={callback}
    />
  ))
  .add('selected subject, claim', () => (
    <DesktopFilter
      params={{ grades: [], subject: 'math', claim: 'm1' }}
      options={filterOptionsGSCT}
      onUpdate={callback}
    />
  ))
  .add('selected subject, claim, target', () => (
    <DesktopFilter
      params={{ grades: [], subject: 'math', claim: 'm1', target: 'pf' }}
      options={filterOptionsGSCT}
      onUpdate={callback}
    />
  ))
  .add('selected grades, subject, claim, target', () => (
    <DesktopFilter
      params={{ grades: ['ms', 'hs'], subject: 'math', claim: 'm1', target: 'pf' }}
      options={filterOptionsGSCT}
      onUpdate={callback}
    />
  ))
  .add('invalid', () => (
    <DesktopFilter
      params={{ grades: ['ms'], claim: 'm1', target: 'pf' }}
      options={filterOptionsGS}
      onUpdate={callback}
    />
  ))
  .add('invalid 2', () => (
    <DesktopFilter
      params={{ grades: ['ms'], subject: 'math', target: 'pf' }}
      options={filterOptionsGSC}
      onUpdate={callback}
    />
  ));
