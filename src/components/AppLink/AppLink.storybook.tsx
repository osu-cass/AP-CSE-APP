import React from 'react';
import { storiesOf } from '@storybook/react';
import centered from '@storybook/addon-centered';

import { AppLinkBtn, AppLinkBtnProps } from './AppLinkBtn';
import { AppLink, AppLinkProps } from './index';

const linkButtonMock: AppLinkBtnProps = {
  text: 'Visit Score Guides Page',
  url:
    'http://www.smarterbalanced.org/assessments/practice-and-training-tests/resources-and-documentation/#tab-3'
};

const appLinkProps: AppLinkProps = {
  title: 'Score Guides',
  imgUrl: 'http://google.com',
  desc:
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,',
  linkBtnProps: linkButtonMock
};

const style = {
  maxWidth: '1024px'
};

storiesOf('AppLink component', module)
  .addDecorator(centered)
  .add('Renders a App Link Button', () => (
    <div style={style}>
      <AppLinkBtn text={linkButtonMock.text} url={linkButtonMock.url} />
    </div>
  ))
  .add('Reders a App Link with all data', () => (
    <div style={style}>
      <AppLink
        title={appLinkProps.title}
        imgUrl={appLinkProps.imgUrl}
        desc={appLinkProps.desc}
        linkBtnProps={appLinkProps.linkBtnProps}
      />
    </div>
  ));
