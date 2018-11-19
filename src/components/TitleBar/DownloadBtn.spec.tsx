import React from 'react';
import { mount, ReactWrapper, shallow, ShallowWrapper } from 'enzyme';

import { DownloadBtn } from './DownloadBtn';

const taskModelMock = ['Task Model 1', 'Task Model 2'];
const mockModal = {
  taskModels: taskModelMock,
  isOpen: true
};
describe('DownloadModal', () => {
  // tslint:disable: no-any no-unsafe-any
  let downloadBtn: ShallowWrapper;
  beforeEach(() => {
    downloadBtn = shallow(
      <DownloadBtn url={'/test'} taskNames={taskModelMock} filename={'test.pdf'} />
    );
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
