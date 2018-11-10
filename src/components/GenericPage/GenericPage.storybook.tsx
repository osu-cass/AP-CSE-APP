import React from 'react';
import { storiesOf } from '@storybook/react';
import { GenericPage } from '.';

storiesOf('Generic Page', module).add('default', () => (
  <GenericPage claimTitle="Page title">This is some content...</GenericPage>
));
