import React from 'react';
import { storiesOf } from '@storybook/react';

import { Stems } from '.';
import { IStem } from '../../../models/target';

const oneStem: IStem[] = [
  {
    shortStem: 'ela',
    stemDesc: 'Stem Description One'
  }
];

const multipleStems: IStem[] = [
  {
    shortStem: 'ela',
    stemDesc: 'Stem Description One'
  },
  {
    shortStem: 'math',
    stemDesc: 'Stem Description Two'
  },
  {
    shortStem: 'math',
    stemDesc: 'Stem Description Three'
  }
];

storiesOf('TargetDetails/Stems', module)
  .add('One Stem', () => <Stems stemType="ela" stems={oneStem} />)
  .add('Multiple Stems', () => <Stems stemType="math" stems={multipleStems} />);
