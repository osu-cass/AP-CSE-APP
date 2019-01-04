import React from 'react';
import toJson from 'enzyme-to-json';
import { mount, ReactWrapper, shallow } from 'enzyme';

import { DownloadModal } from '.';
import ELAG3ClaimMock from '../../../mock_api_data/E.G3.C1';

describe('DownloadModal', () => {
  let downloadModal: ReactWrapper;
  beforeEach(() => {
    downloadModal = mount(<DownloadModal isOpen={true} claim={ELAG3ClaimMock} />);
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

  it('Renders Correctly', () => {
    const component = shallow(<DownloadModal isOpen={true} claim={ELAG3ClaimMock} />);

    expect(toJson(component)).toMatchSnapshot();
  });
});
