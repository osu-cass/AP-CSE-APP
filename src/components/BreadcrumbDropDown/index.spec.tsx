import React from 'react';
import { shallow, ShallowWrapper } from 'enzyme';

import ELAG3ClaimMock from '../../../mock_api_data/E.G3.C1';
import { BreadcrumbDropDown } from '.';
import { foTarget } from '../../clients/filter/__mocks__';

describe('BreadcrumbDropDown', () => {
  // tslint:disable: no-any no-unsafe-any
  let dropdown: ShallowWrapper;
  beforeEach(() => {
    dropdown = shallow(
      <BreadcrumbDropDown
        targets={foTarget.targetShortCodes}
        currentTarget={foTarget.targetShortCodes[0]}
      />
    );
  });

  it('Opens the dropdown when clicking', () => {
    dropdown.find('#breadcrumb-dropdown').simulate('click');
    expect(dropdown.state('expanded')).toBeTruthy();

    dropdown.find('#breadcrumb-dropdown').simulate('click');
    expect(dropdown.state('expanded')).toBeFalsy();
  });

  it('Opens the dropdown when pressing enter', () => {
    dropdown.find('#breadcrumb-dropdown').simulate('keypress', { key: 'Enter' });
    expect(dropdown.state('expanded')).toBeTruthy();

    dropdown.find('#breadcrumb-dropdown').simulate('keypress', { key: 'Enter' });
    expect(dropdown.state('expanded')).toBeFalsy();
  });
});
