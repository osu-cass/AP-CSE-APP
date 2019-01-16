import React from 'react';
import { shallow } from 'enzyme';
import { NavBar } from '.';

describe('<NavBar />', () => {
  it('handles search clicked', () => {
    const wrapper = shallow(<NavBar />);
    const searchCallback = wrapper.find('SearchBar').prop('onSearch') as (search: string) => void;

    const locMock = jest.fn();
    window.location.assign = locMock;

    searchCallback('test');
    expect(locMock).toBeCalledWith('/explore?search=test');
  });
});
