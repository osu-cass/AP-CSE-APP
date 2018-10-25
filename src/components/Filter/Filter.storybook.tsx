import React from 'react';
import { CSEFilterParams, CSEFilterOptions } from '../../models/filter';
import { Filter } from './';
import { filterOptionsGS, filterOptionsGSC, filterOptionsGSCT } from './__mocks__';
import { storiesOf } from '@storybook/react';
import centered from '@storybook/addon-centered';

interface FilterTestProps {
  params: CSEFilterParams;
  options: CSEFilterOptions;
}

/**
 * Used solely for testing the `<Filter />` component
 */
class FilterTest extends React.Component<FilterTestProps, CSEFilterParams> {
  constructor(props: FilterTestProps) {
    super(props);
    this.state = props.params;
  }

  updateState = (newFilter: CSEFilterParams) => {
    this.setState({ ...newFilter });
  };

  render() {
    return (
      <div>
        Filter Object:
        <code>{JSON.stringify(this.state)}</code>
        <div style={{ display: 'flex' }}>
          <Filter options={this.props.options} params={this.state} onUpdate={this.updateState} />
        </div>
      </div>
    );
  }
}

storiesOf('Filter', module)
  .addDecorator(centered)
  .add('default', () => <FilterTest params={{ grades: [] }} options={filterOptionsGS} />)
  .add('selected grade', () => <FilterTest params={{ grades: ['ms'] }} options={filterOptionsGS} />)
  .add('selected subject', () => (
    <FilterTest params={{ grades: [], subject: 'math' }} options={filterOptionsGSC} />
  ))
  .add('selected subject, claim', () => (
    <FilterTest params={{ grades: [], subject: 'math', claim: 'm1' }} options={filterOptionsGSCT} />
  ))
  .add('selected subject, claim, target', () => (
    <FilterTest
      params={{ grades: [], subject: 'math', claim: 'm1', target: 'pf' }}
      options={filterOptionsGSCT}
    />
  ))
  .add('selected grades, subject, claim, target', () => (
    <FilterTest
      params={{ grades: ['ms', 'hs'], subject: 'math', claim: 'm1', target: 'pf' }}
      options={filterOptionsGSCT}
    />
  ))
  .add('invalid', () => (
    <FilterTest params={{ grades: ['ms'], claim: 'm1', target: 'pf' }} options={filterOptionsGS} />
  ))
  .add('invalid 2', () => (
    <FilterTest
      params={{ grades: ['ms'], subject: 'math', target: 'pf' }}
      options={filterOptionsGSC}
    />
  ));
