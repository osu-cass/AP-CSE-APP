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

storiesOf('Development Page Components DontTest', module)
  .add('Overview', () => <DevOverview />)
  .add('DevTestBlueprint', () => <DevTestBlueprint />)
  .add('DevInterimBlueprint', () => <DevInterimBlueprint />)
  .add('DevItemSpecOverview', () => <DevItemSpecOverview />)
  .add('DevAccForItems', () => <DevAccForItems />)
  .add('DevAddtlItemSpec', () => <DevAddtlItemSpec />)
  .add('DevFullItemSpec', () => <DevFullItemSpec />)
  .add('DevContentSpec', () => <DevContentSpec />);
