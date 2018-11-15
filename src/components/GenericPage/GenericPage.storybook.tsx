import React from 'react';
import { storiesOf } from '@storybook/react';
import { PageWidthEnforcer } from './PageWidthEnforcer';

storiesOf('Generic Page', module).add('default', () => (
  <PageWidthEnforcer>This is some content...</PageWidthEnforcer>
));
