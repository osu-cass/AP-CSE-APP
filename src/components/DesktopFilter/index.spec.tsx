import React from 'react';
import { mount } from 'enzyme';
import { Filter } from '.';
import { filterOptionsGS, filterOptionsGSC, filterOptionsGSCT } from './__mocks__';

describe('Filter', () => {
  it('calls callback on reset button clicked', () => {
    const callback = jest.fn();
    const component = mount(
      <Filter params={{ grades: [] }} options={filterOptionsGS} onUpdate={callback} />
    );

    component
      .find('.reset-container .btn')
      .first()
      .simulate('click');

    expect(callback).toHaveBeenCalled();
  });
});
