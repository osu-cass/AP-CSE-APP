import React from 'react';
import { storiesOf } from '@storybook/react';
import {
  DevOverview,
  DevTestBlueprint,
  DevInterimBlueprint,
  DevItemSpecOverview,
  DevAccForItems,
  DevAddtlItemSpec,
  DevFullItemSpec,
  DevContentSpec
} from '.';

storiesOf('Development Page Content DontTest', module)
  .add('Overview', () => <DevOverview />)
  .add('Test Blueprint', () => <DevTestBlueprint />)
  .add('Interim Blueprint', () => <DevInterimBlueprint />)
  .add('Item Spec Overview', () => <DevItemSpecOverview />)
  .add('Accessibility For Items', () => <DevAccForItems />)
  .add('Additional Item Spec', () => <DevAddtlItemSpec />)
  .add('Full Item Spec', () => <DevFullItemSpec />)
  .add('Content Spec', () => <DevContentSpec />);
