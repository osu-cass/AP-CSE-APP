import React from 'react';
import { storiesOf } from '@storybook/react';
import { HelpPage, helpSections } from '.';

storiesOf('Help Page', module).add('default', () => (
  <div id="main-content-scroll" style={{ height: '100vh', overflowY: 'scroll' }}>
    <HelpPage />
  </div>
));
