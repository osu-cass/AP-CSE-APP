import React from 'react';
import { MemoryRouter } from 'react-router';
import { mount, ReactWrapper } from 'enzyme';

import {
  parsedTitleBarDataMock,
  parsedBreadCrumbDataMock,
  parsedMobileTitleBarDataMock
} from '../__mocks__';
import { TargetDetail } from '..';
import ELAG3ClaimMock from '../../../../mock_api_data/E.G3.C1';
import { parseBreadCrumbData, parseTitleBarData, parseTitleBarMobileData } from '.';

describe('Target Page', () => {
  let targetPage: ReactWrapper;
  beforeEach(() => {
    targetPage = mount(
      <MemoryRouter initialEntries={['/']}>
        <TargetDetail target={ELAG3ClaimMock.target[0]} />
      </MemoryRouter>
    );
    /* tslint:disable: no-console */
    console.error = jest.fn();
  });
  afterEach(() => {
    targetPage.unmount();
  });

  it('parses breadcrumb data from a claim', () => {
    const parsedBreadCrumbData = parseBreadCrumbData(ELAG3ClaimMock);

    expect(parsedBreadCrumbData).toEqual(parsedBreadCrumbDataMock);
  });

  it('parses title bar data from a claim', () => {
    const parsedTitleBarData = parseTitleBarData(ELAG3ClaimMock);

    expect(parsedTitleBarData).toEqual(parsedTitleBarDataMock);
  });
  it('parses mobile title bar data from a claim', () => {
    const parsedMobileTitleBarData = parseTitleBarMobileData(ELAG3ClaimMock);

    expect(parsedMobileTitleBarData).toEqual(parsedMobileTitleBarDataMock);
  });
});
