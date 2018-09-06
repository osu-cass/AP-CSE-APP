import React from 'react';
import { storiesOf } from '@storybook/react';
import centered from '@storybook/addon-centered';
import { blueGradientBgImg } from '../../constants';

import { DownloadBtn, DownloadBtnProps } from './DownloadBtn';
import { TitleBar, TitleBarProps } from './index';

const titleOnlyMock: TitleBarProps = {
  title: 'English Language Arts Specification: Grade 3 Claim 1'
};
const downloadBtnMock: DownloadBtnProps = {
  url: 'test/url',
  filename: 'test-file-name'
};
const allDataMock: TitleBarProps = {
  ...titleOnlyMock,
  desc:
    'Students can read closely and analytically to comprehend a range of increasingly complex literary and informational texts.',
  downloadBtnProps: downloadBtnMock
};

storiesOf('TitleBar component', module)
  .addDecorator(centered)
  .add('Renders a download button', () => (
    <div style={blueGradientBgImg}>
      <DownloadBtn url={downloadBtnMock.url} filename={downloadBtnMock.filename} />
    </div>
  ))
  .add('Renders a Title Bar with a title only', () => (
    <div style={blueGradientBgImg}>
      <TitleBar title={titleOnlyMock.title} />
    </div>
  ))
  .add('Renders a Title Bar with all data', () => (
    <div style={blueGradientBgImg}>
      <TitleBar
        title={allDataMock.title}
        desc={allDataMock.desc}
        downloadBtnProps={downloadBtnMock}
      />
    </div>
  ));
