import React from 'react';
import { mount } from 'enzyme';
import { DesktopFilter } from '.';
import { filterModelGS, filterModelGSC, filterModelCSCT } from '../MobileFilter/__mocks__';

describe('DesktopFitler', () => {
  it('calls reset callback on reset button clicked', () => {
    const reset = jest.fn();
    const callback = jest.fn();
    const component = mount(
      <DesktopFilter filters={filterModelGS} onUpdate={callback} reset={reset} />
    );

    component
      .find('.reset-container .btn')
      .first()
      .simulate('click');

    expect(reset).toHaveBeenCalled();
  });

  it('calls callback on grade buttons clicked', () => {
    const reset = jest.fn();
    const callback = jest.fn();
    const component = mount(
      <DesktopFilter filters={filterModelGS} onUpdate={callback} reset={reset} />
    );

    component
      .find('#grade-filter .btn')
      .first()
      .simulate('click');

    expect(callback).toHaveBeenCalled();
  });

  it('calls callback on subject button clicked', () => {
    const reset = jest.fn();
    const callback = jest.fn();
    const component = mount(
      <DesktopFilter filters={filterModelGS} onUpdate={callback} reset={reset} />
    );

    component
      .find('#subject-filter .btn')
      .first()
      .simulate('click');

    expect(callback).toHaveBeenCalled();
  });

  it('calls callback on claim button clicked', () => {
    const reset = jest.fn();
    const callback = jest.fn();
    const component = mount(
      <DesktopFilter filters={filterModelGSC} onUpdate={callback} reset={reset} />
    );

    component
      .find('#claim-filter .btn')
      .first()
      .simulate('click');

    expect(callback).toHaveBeenCalled();
  });

  it('calls callback on target button clicked', () => {
    const reset = jest.fn();
    const callback = jest.fn();
    const component = mount(
      <DesktopFilter filters={filterModelCSCT} onUpdate={callback} reset={reset} />
    );

    component
      .find('#target-filter .btn')
      .first()
      .simulate('click');

    expect(callback).toHaveBeenCalled();
  });
});
