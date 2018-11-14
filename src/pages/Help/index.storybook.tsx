import React from 'react';
import { storiesOf } from '@storybook/react';
import { HelpPage, helpSections } from '.';
import { MobileHelpPage } from './mobile';
import { DesktopHelpPage } from './desktop';

storiesOf('Help Page', module)
  .add('default', () => (
    <div id="main-content-scroll" style={{ height: '100vh', overflowY: 'scroll' }}>
      <HelpPage />
    </div>
  ))
  .add('mobile', () => <MobileHelpPage helpSections={helpSections} />)
  .add('desktop', () => <DesktopHelpPage helpSections={helpSections} />);
