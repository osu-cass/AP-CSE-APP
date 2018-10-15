import React from 'react';
import { CSEFilterParams } from './FilterHelper';
import { Filter } from './';
import { filterOptions } from './__mocks__';
import { storiesOf } from '@storybook/react';
import centered from '@storybook/addon-centered';

/**
 * Used solely for testing the `<Filter />` component
 */
class FilterTest extends React.Component<CSEFilterParams, CSEFilterParams> {
  constructor(props: CSEFilterParams) {
    super(props);
    this.state = props;
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
          <Filter options={filterOptions} params={this.state} onUpdate={this.updateState} />
        </div>
      </div>
    );
  }
}

storiesOf('Filter', module)
  .addDecorator(centered)
  .add('default', () => <FilterTest grades={[]} />)
  .add('selected grade', () => <FilterTest grades={['ms']} />)
  .add('selected subject', () => <FilterTest grades={[]} subject="math" />)
  .add('selected subject, claim', () => <FilterTest grades={[]} subject="math" claim="m1" />)
  .add('selected subject, claim, target', () => (
    <FilterTest grades={[]} subject="math" claim="m1" target="pf" />
  ))
  .add('selected grades, subject, claim, target', () => (
    <FilterTest grades={['ms', 'hs']} subject="math" claim="m1" target="pf" />
  ))
  .add('invalid', () => <FilterTest grades={['ms']} claim="m1" target="pf" />)
  .add('invalid 2', () => <FilterTest grades={['ms']} subject="math" target="pf" />);
