import React from 'react';
import { storiesOf } from '@storybook/react';
import { DownloadBtn, DownloadBtnProps } from './DownloadBtn';
import { TitleBar, TitleBarProps } from './index';

const downloadBtnMock: DownloadBtnProps = {
  url: 'test/url',
  filename: 'test-file-name'
};
const claimOnlyMock: TitleBarProps = {
  claimTitle: 'Claim 1',
  claimDesc:
    'Students can read closely and analytically to comprehend a range of increasingly complex literary and informational texts.',
  downloadBtnProps: downloadBtnMock
};
const allDataMock: TitleBarProps = {
  ...claimOnlyMock,
  targetTitle: 'Target 1',
  targetDesc:
    'Given an inference or conclusion, use explicit details and implicit information from the text to support the inference or conclusion provided.'
};

storiesOf('TitleBar component', module)
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
        claimDesc={claimOnlyMock.claimDesc}
        targetTitle={claimOnlyMock.targetTitle}
        targetDesc={claimOnlyMock.targetDesc}
        downloadBtnProps={claimOnlyMock.downloadBtnProps}
      />
    </div>
  ))
  .add('Renders a Title Bar with all data', () => (
    <div>
      <TitleBar
        claimTitle={allDataMock.claimTitle}
        claimDesc={allDataMock.claimDesc}
        targetTitle={allDataMock.targetTitle}
        targetDesc={allDataMock.targetDesc}
        downloadBtnProps={allDataMock.downloadBtnProps}
      />
    </div>
  ));
