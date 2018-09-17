import React from 'react';
import { storiesOf } from '@storybook/react';
import centered from '@storybook/addon-centered';
import { blueGradientBgImg } from '../../constants';

import { TitleBar, TitleBarProps } from '../../components/TitleBar';
import { TargetPageProps, TargetPage } from '.';
import { DownloadBtn, DownloadBtnProps } from '../../components/TitleBar/DownloadBtn';

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

const targetPageProps: TargetPageProps = {
  titleBarProps: allDataMock
};

storiesOf('Target Page', module)
  .addDecorator(centered)
  .add('Renders a Target Page', () => <TargetPage />);
/*
    <div style={style}>
      <TitleBar
        claimTitle={claimOnlyMock.claimTitle}
        claimDesc={claimOnlyMock.claimDesc}
        targetTitle={claimOnlyMock.targetTitle}
        targetDesc={claimOnlyMock.targetDesc}
        downloadBtnProps={claimOnlyMock.downloadBtnProps}
      />
    </div>
    */
