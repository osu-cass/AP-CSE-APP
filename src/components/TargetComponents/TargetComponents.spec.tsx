import React from 'react';
import { mount, ReactWrapper } from 'enzyme';
import { MemoryRouter } from 'react-router';
import { parseBreadCrumbData, parseTitleBarData, parseTitleBarMobileData } from './title';
import ELAG3ClaimMock from '../../../mock_api_data/E.G3.C1';
import { TargetDetail, TargetDetailProps } from './TargetDetail';
import {
  parsedSubItemMock,
  parsedTitleBarDataMock,
  parsedBreadCrumbDataMock,
  parsedRegularItemMock,
  parsedItemWithSubsMock,
  parsedNavPropsMock,
  parsedMobileTitleBarDataMock
} from './__mocks__';
import { ITarget } from '../../models/target';
import { ELAG3TargetMock } from '../../../mock_api_data/E.G3.PT';
import { itemPageClient } from '@osu-cass/sb-components';

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
