import React from 'react';
import { storiesOf } from '@storybook/react';
import { DownloadBtn, DownloadBtnProps } from './DownloadBtn';
import { TitleBar, MobileTitleBarProps } from './mobileTitleBar';
import ELAG3ClaimMock from '../../../mock_api_data/E.G3.C1';

const downloadBtnMock: DownloadBtnProps = {
  claim: ELAG3ClaimMock
};
const claimOnlyMock: MobileTitleBarProps = {
  claimTitle: 'Claim 1',
  downloadBtnProps: downloadBtnMock
};
const allDataMock: MobileTitleBarProps = {
  ...claimOnlyMock,
  targetTitle: 'Target 1'
};

storiesOf('Mobile TitleBar component', module)
  .add('Renders a Title Bar with header only', () => (
    <div>
      <TitleBar claimTitle={claimOnlyMock.claimTitle} />
    </div>
  ))
  .add('Renders a download button', () => (
    <div>
      <DownloadBtn {...downloadBtnMock} />
    </div>
  ))
  .add('Renders a Title Bar with a claim only', () => (
    <div>
      <TitleBar
        claimTitle={claimOnlyMock.claimTitle}
        targetTitle={claimOnlyMock.targetTitle}
        downloadBtnProps={claimOnlyMock.downloadBtnProps}
      />
    </div>
  ))
  .add('Renders a Title Bar with all data', () => (
    <div>
      <TitleBar
        claimTitle={allDataMock.claimTitle}
        targetTitle={allDataMock.targetTitle}
        downloadBtnProps={allDataMock.downloadBtnProps}
      />
    </div>
  ));
