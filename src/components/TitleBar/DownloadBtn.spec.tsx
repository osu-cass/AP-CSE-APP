import React from 'react';
import { mount, ReactWrapper, shallow, ShallowWrapper } from 'enzyme';

import { DownloadBtn } from './DownloadBtn';
import ELAG3ClaimMock from '../../../mock_api_data/E.G3.C1';

const taskModelMock = ['Task Model 1', 'Task Model 2'];
const mockModal = {
  claim: ELAG3ClaimMock,
  isOpen: true
};
describe('DownloadModal', () => {
  // tslint:disable: no-any no-unsafe-any
  let downloadBtn: ShallowWrapper;
  beforeEach(() => {
    downloadBtn = shallow(<DownloadBtn claim={ELAG3ClaimMock} />);
  });
  it('Opens the modal when clicking the download button', () => {
    downloadBtn.find('#download-btn').simulate('click');
    expect(downloadBtn.state('modal')).toEqual(mockModal);
  });

  it('closes the modal on esc', () => {
    downloadBtn.find('#download-btn').simulate('keyDown', {
      keyCode: 27
    });
    mockModal.isOpen = false;
    expect(downloadBtn.state('modal')).toEqual(mockModal);
  });
});
