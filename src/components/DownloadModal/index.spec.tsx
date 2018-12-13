import React from 'react';
import { mount, ReactWrapper } from 'enzyme';

import { DownloadModal } from './index';

const taskModelMock = ['Task Model 1'];

describe('DownloadModal', () => {
  let downloadModal: ReactWrapper;
  beforeEach(() => {
    downloadModal = mount(<DownloadModal isOpen={true} taskModels={taskModelMock} />);
  });
  afterEach(() => {
    downloadModal.unmount();
  });
  it('continues to the next page', () => {
    downloadModal
      .find('#continue-btn')
      .first()
      .simulate('click');
    expect(downloadModal.state('showMultiSelect')).toEqual('hidden');
  });
  it('goes back from the confirmation page', () => {
    downloadModal
      .find('#continue-btn')
      .first()
      .simulate('click');
    downloadModal
      .find('#back-btn')
      .first()
      .simulate('click');
    expect(downloadModal.state('showMultiSelect')).toEqual('');
  });

  it('confirms selection', () => {
    downloadModal
      .find('#continue-btn')
      .first()
      .simulate('click');
    downloadModal
      .find('#confirm-btn')
      .first()
      .simulate('click');
    expect(downloadModal.state('confirmArr')).toEqual(['Entire Target']);
  });

  it('toggles a button', () => {
    downloadModal
      .find('#overview-btn')
      .first()
      .simulate('click')
      .simulate('click')
      .simulate('click');
    const overviewBtn = downloadModal.find('#overview-btn').prop('className');
    expect(overviewBtn).toEqual('checked');
  });

  it('toggles entire-target', () => {
    downloadModal
      .find('#overview-btn')
      .first()
      .simulate('click');
    downloadModal
      .find('#entire-target-btn')
      .first()
      .simulate('click');
    const overviewBtn = downloadModal.find('#overview-btn').prop('className');
    expect(overviewBtn).toEqual('unchecked');
  });

  it('closes the modal', () => {
    downloadModal
      .find('#continue-btn')
      .first()
      .simulate('click');
    downloadModal
      .find('#confirm-btn')
      .first()
      .simulate('click');
    expect(downloadModal.state('showModal')).toEqual(false);
  });
});
