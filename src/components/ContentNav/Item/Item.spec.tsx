import React from 'react';
import { mount } from 'enzyme';

import { Item } from '.';

describe('Item', () => {
  it('should be active', () => {
    const itemActive = mount(<Item name={'Test Name'} subItems={[]} active={true} />);

    itemActive.simulate('click');
    expect(itemActive).toMatchSnapshot();

    itemActive.unmount();
  });
});
