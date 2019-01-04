import React from 'react';
import { storiesOf } from '@storybook/react';

import { PageWidthEnforcer } from './PageWidthEnforcer';

storiesOf('Page Width Enforcer', module)
  .add('default', () => <PageWidthEnforcer>This is some content...</PageWidthEnforcer>)
  .add('no vertical margin', () => (
    <PageWidthEnforcer noVerticalMargin>
      This is some content without a vertical margin around it.
    </PageWidthEnforcer>
  ));
