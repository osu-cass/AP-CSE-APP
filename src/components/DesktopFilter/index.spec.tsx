import React from 'react';
import { mount } from 'enzyme';
import { DesktopFilter } from '.';
import { filterOptionsGS, filterOptionsGSC, filterOptionsGSCT } from '../MobileFilter/mocks';

describe('Filter', () => {
  it('calls callback on reset button clicked', () => {
    const callback = jest.fn();
    const component = mount(
      <DesktopFilter params={{ grades: [] }} options={filterOptionsGS} onUpdate={callback} />
    );

    component
      .find('.reset-container .btn')
      .first()
      .simulate('click');

    expect(callback).toHaveBeenCalled();
  });
});
