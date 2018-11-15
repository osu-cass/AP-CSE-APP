import React from 'react';
import { storiesOf } from '@storybook/react';
import centered from '@storybook/addon-centered';

import { AppLinkBtn, AppLinkBtnProps } from './AppLinkBtn';
import { AppLink, AppLinkProps } from './index';

import { Styles } from '../../constants';

/*tslint:disable: no-require-imports no-var-requires */
const image: string = require('../../assets/images/smarter-balanced.png') as string;

const linkButtonMock: AppLinkBtnProps = {
  text: 'Visit Score Guides Page',
  url:
    'http://www.smarterbalanced.org/assessments/practice-and-training-tests/resources-and-documentation/#tab-3'
};

const appLinkProps: AppLinkProps = {
  title: 'Score Guides',
  imgUrl: image,
  desc:
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,',
  linkBtnProps: linkButtonMock
};

const style = {
  maxWidth: '1024px',
  fontFamily: `${Styles.sbSans}`
};

storiesOf('AppLink component', module)
  .addDecorator(centered)
  .add('Renders a App Link Button', () => (
    <div style={style}>
      <AppLinkBtn text={linkButtonMock.text} url={linkButtonMock.url} />
    </div>
  ))
  .add('Renders a App Link with all data', () => (
    <div style={style}>
      <AppLink
        title={appLinkProps.title}
        imgUrl={appLinkProps.imgUrl}
        desc={appLinkProps.desc}
        linkBtnProps={appLinkProps.linkBtnProps}
      />
    </div>
  ));