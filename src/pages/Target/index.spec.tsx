import React from 'react';
import { mount, ReactWrapper } from 'enzyme';
import { MemoryRouter } from 'react-router';

import ELAG3ClaimMock from '../../../mock_api_data/E.G3.C1';
import {
  TargetPage,
  parseBreadCrumbData,
  parseTitleBarData,
  parseSubItem,
  parseItem,
  parseNavProps
} from './index';
import {
  parsedSubItemMock,
  parsedTitleBarDataMock,
  parsedBreadCrumbDataMock,
  parsedRegularItemMock,
  parsedItemWithSubsMock,
  parsedNavPropsMock,
  mockEmptyTargetClient,
  mockTargetClient
} from './mocks';
import { ITarget } from '../../models/target';

describe('Target Page', () => {
  let targetPage: ReactWrapper;
  beforeEach(() => {
    targetPage = mount(
      <MemoryRouter initialEntries={['/']}>
        <TargetPage
          targetClient={mockTargetClient}
          match={{ params: { targetShortCode: 'E.G3.C1.T1' } }}
        />
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

  it('parses a subItem', () => {
    const target: ITarget = ELAG3ClaimMock.target[0];
    const parsedSubItem = parseSubItem(target.taskModels[0]);

    expect(parsedSubItem).toEqual(parsedSubItemMock);
  });

  it('parses a regular item', () => {
    const target: ITarget = ELAG3ClaimMock.target[0];

    const parsedItems = parseItem('evidence', target);
    expect(parsedItems).toEqual(parsedRegularItemMock);
  });

  it('parses an item with subItems', () => {
    const target: ITarget = ELAG3ClaimMock.target[0];

    const parsedItems = parseItem('taskModels', target);
    expect(parsedItems).toEqual(parsedItemWithSubsMock);
  });

  it('parses data for the ContentNav', () => {
    const target: ITarget = ELAG3ClaimMock.target[0];

    const parsedNavProps = parseNavProps(target);
    expect(parsedNavProps).toEqual(parsedNavPropsMock);
  });
});
