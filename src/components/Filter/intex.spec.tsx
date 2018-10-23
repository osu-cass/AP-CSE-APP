import React from 'react';
import { mount } from 'enzyme';
import { Filter } from '.';
import { filterOptions } from './__mocks__';

describe('Filter', () => {
  it('calls callback on grade clicked', () => {
    const callback = jest.fn();
    const component = mount(
      <Filter params={{ grades: [] }} options={filterOptions} onUpdate={callback} />
    );

    component
      .find('#grade-filter .btn')
      .first()
      .simulate('click');

    expect(callback).toHaveBeenCalled();
  });

  it('calls callback on subject clicked', () => {
    const callback = jest.fn();
    const component = mount(
      <Filter params={{ grades: [] }} options={filterOptions} onUpdate={callback} />
    );

    component
      .find('#subject-filter .btn')
      .at(2)
      .simulate('click');

    expect(callback).toHaveBeenCalled();
  });

  it('calls callback on claim clicked', () => {
    const callback = jest.fn();
    const component = mount(
      <Filter
        params={{ grades: [], subject: 'math' }}
        options={filterOptions}
        onUpdate={callback}
      />
    );

    component
      .find('#claim-filter .btn')
      .at(2)
      .simulate('click');

    expect(callback).toHaveBeenCalled();
  });

  it('calls callback on subject clicked', () => {
    const callback = jest.fn();
    const component = mount(
      <Filter
        params={{ grades: [], subject: 'math', claim: 'm1' }}
        options={filterOptions}
        onUpdate={callback}
      />
    );

    component
      .find('#target-filter .btn')
      .at(2)
      .simulate('click');

    expect(callback).toHaveBeenCalled();
  });
});
