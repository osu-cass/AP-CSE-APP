import React from 'react';
import { storiesOf } from '@storybook/react';
import { GenericContentPage } from '.';
import { MobileGenericContentPage } from './mobile';
import { DesktopHelpPage } from './desktop';
import { contentSectionsMocks } from './__tests__/mocks';

storiesOf('Help Page', module)
  .add('default', () => (
    <div id="main-content-scroll" style={{ height: '100vh', overflowY: 'scroll' }}>
      <GenericContentPage contentSections={contentSectionsMocks} title="Page title" />
    </div>
  ))
  .add('mobile', () => <MobileGenericContentPage contentSections={contentSectionsMocks} />)
  .add('desktop', () => <DesktopHelpPage contentSections={contentSectionsMocks} />);
