import React from 'react';
import { storiesOf } from '@storybook/react';
import centered from '@storybook/addon-centered';

import { Styles } from '../../constants/style';
import { ResourceLink, ResourceLinkProps } from '.';
import { ResourceLinkBtn, ResourceLinkBtnProps } from './ResourceLinkBtn';

/*tslint:disable: no-require-imports no-var-requires */
const image: string = require('../../assets/images/smarter-balanced.png') as string;

const linkButtonMock: ResourceLinkBtnProps = {
  text: 'Visit Score Guides Page',
  url:
    'http://www.smarterbalanced.org/assessments/practice-and-training-tests/resources-and-documentation/#tab-3'
};

const resourceLinkProps: ResourceLinkProps = {
  title: 'Score Guides',
  imgUrl: image,
  subHeading: 'Lorem ipsum',
  desc: [
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,'
  ],
  linkBtnProps: linkButtonMock
};

const style = {
  maxWidth: '1024px',
  fontFamily: `${Styles.sbSans}`
};

storiesOf('Resource Link', module)
  .addDecorator(centered)
  .add('Complete example', () => (
    <div style={style}>
      <ResourceLink {...resourceLinkProps} />
    </div>
  ))
  .add('Link button only', () => (
    <div style={style}>
      <ResourceLinkBtn text={linkButtonMock.text} url={linkButtonMock.url} />
    </div>
  ));
