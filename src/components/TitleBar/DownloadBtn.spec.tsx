import React from 'react';
import { shallow, ShallowWrapper } from 'enzyme';
import { DownloadModal } from '../DownloadModal';
import { DownloadBtn } from './DownloadBtn';
import ELAG3ClaimMock from '../../../mock_api_data/E.G3.C1';

const mockModal = {
  claim: ELAG3ClaimMock,
  isOpen: true,
  closeFromParent: jest.fn
};
describe('DownloadModal', () => {
  // tslint:disable: no-any no-unsafe-any
  let downloadBtn: ShallowWrapper;
  beforeEach(() => {
    downloadBtn = shallow(<DownloadBtn claim={ELAG3ClaimMock} />);
  });
  it('Opens the modal when clicking the download button', () => {
    downloadBtn.find('#download-btn').simulate('click');
    const modal = downloadBtn.find('DownloadModal');
    expect(modal.prop('isOpen')).toEqual(true);
  });

  it('Opens the modal when pressing enter key', () => {
    downloadBtn.find('#download-btn').simulate('keypress', { key: 'Enter' });
    const modal = downloadBtn.find('DownloadModal');
    expect(modal.prop('isOpen')).toEqual(true);
  });

  it('closes the modal on esc', () => {
    downloadBtn.find('#download-btn').simulate('keyDown', {
      keyCode: 27
    });
    mockModal.isOpen = false;
    const modal = downloadBtn.find('DownloadModal');
    expect(modal.prop('isOpen')).toEqual(false);
  });
});
