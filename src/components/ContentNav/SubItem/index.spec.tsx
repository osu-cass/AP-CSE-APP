import React from 'react';
import { mount } from 'enzyme';
import { SubItem } from '.';

describe('SubItem', () => {
  it('should be active', () => {
    const subItemActive = mount(<SubItem name={'Test Name'} active={true} />);

    subItemActive.simulate('click');
    expect(subItemActive).toMatchSnapshot();

    subItemActive.unmount();
  });
});
