import React from 'react';
import { storiesOf } from '@storybook/react';

import {
  HelpClaims,
  HelpTargets,
  HelpItemSpec,
  HelpContentSpec,
  HelpAccessibility,
  HelpFaq,
  HelpTestDevOverview,
  HelpPTOverview
} from '.';

storiesOf('Help Content', module)
  .add('claims', () => <HelpClaims />)
  .add('targets', () => <HelpTargets />)
  .add('item spec', () => <HelpItemSpec />)
  .add('content spec', () => <HelpContentSpec />)
  .add('accessibility', () => <HelpAccessibility />)
  .add('faq', () => <HelpFaq />)
  .add('test dev overview', () => <HelpTestDevOverview />)
  .add('pt overview', () => <HelpPTOverview />);
