import React from 'react';
import { mount, ReactWrapper } from 'enzyme';
import { MemoryRouter } from 'react-router';
import toJson from 'enzyme-to-json';

import { ELAG3ClaimMock } from '../../../mock_api_data/E.G3.C1';
import { TargetPage, parseBreadCrumbData, parseTitleBarData } from './index';
import { BreadcrumbsProps } from '../../components/Breadcrumbs';
import { TitleBarProps } from '../../components/TitleBar';

describe('Target Page', () => {
  let targetPage: ReactWrapper;
  beforeEach(() => {
    targetPage = mount(
      <MemoryRouter initialEntries={['/']}>
        <TargetPage url={'regular'} />
      </MemoryRouter>
    );
  });
  afterEach(() => {
    targetPage.unmount();
  });

  it('parses breadcrumb data from a claim', () => {
    const breadCrumbData: BreadcrumbsProps = {
      subject: 'English Language Arts',
      grade: 'Grade 3',
      claim: 'Literary Texts',
      target: 'Placeholder Title'
    };
    const parsedBreadCrumbData = parseBreadCrumbData(ELAG3ClaimMock);

    expect(parsedBreadCrumbData).toEqual(breadCrumbData);
  });

  it('parses title bar data from a claim', () => {
    const titleBarData: TitleBarProps = {
      claimTitle: 'Literary Texts',
      claimDesc:
        'Students can read closely and analytically to comprehend a range of increasingly complex literary and informational texts.',
      downloadBtnProps: { url: 'test/url', filename: 'test-file-name' },
      targetTitle: 'Placeholder Title',
      targetDesc:
        'Given an inference or conclusion, use explicit details and implicit information from the text to support the inference or conclusion provided.'
    };
    const parsedTitleBarData = parseTitleBarData(ELAG3ClaimMock);

    expect(parsedTitleBarData).toEqual(titleBarData);
  });
});
