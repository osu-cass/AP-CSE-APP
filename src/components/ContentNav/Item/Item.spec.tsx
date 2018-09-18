import React from 'react';
import { mount } from 'enzyme';
import toJson from 'enzyme-to-json';
import { Item } from '.';

describe('Item', () => {
  it('should be activated on click', () => {
    const itemActive = mount(<Item name={'Test Name'} active={true} />);

    itemActive.simulate('click');
    expect(toJson(itemActive)).toMatchSnapshot();

    itemActive.unmount();
  });
});
