import React from 'react';
import { storiesOf } from '@storybook/react';
import { DownloadBtn, DownloadBtnProps } from './DownloadBtn';
import { TitleBar, MobileTitleBarProps } from './mobileTitleBar';

const downloadBtnMock: DownloadBtnProps = {
  url: 'test/url',
  filename: 'test-file-name'
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
      <DownloadBtn url={downloadBtnMock.url} filename={downloadBtnMock.filename} />
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
