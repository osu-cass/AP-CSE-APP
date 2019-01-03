import React from 'react';
import { storiesOf } from '@storybook/react';
import { GenericContentPage } from '.';
import { MobileGenericContentPage } from './mobile';
import { DesktopGenericContentPage } from './desktop';
import { contentSectionsMocks } from './__mocks__';
import { FullPageDecorator } from '../../__decorators__';

storiesOf('Generic Content Page DontTest', module)
  .addDecorator(FullPageDecorator)
  .add('default', () => (
    <div id="main-content-scroll" style={{ height: '100vh', overflowY: 'scroll' }}>
      <GenericContentPage contentSections={contentSectionsMocks} />
    </div>
  ))
  .add('mobile', () => <MobileGenericContentPage contentSections={contentSectionsMocks} />)
  .add('desktop', () => (
    <div id="main-content-scroll" style={{ height: '100vh', overflowY: 'scroll' }}>
      <DesktopGenericContentPage contentSections={contentSectionsMocks} />
    </div>
  ));
