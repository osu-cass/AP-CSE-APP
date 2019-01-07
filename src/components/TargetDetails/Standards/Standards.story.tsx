import React from 'react';
import { storiesOf } from '@storybook/react';

import { Standards } from '.';
import { IStandards } from '../../../models/target';

const oneStandard: IStandards[] = [
  {
    stdCode: 'S-3a',
    stdDesc: 'Mock standard'
  }
];

const multiStandards: IStandards[] = [
  {
    stdCode: 'S-3a',
    stdDesc: 'Mock standard'
  },
  {
    stdCode: 'S-3b',
    stdDesc: 'Mock standard'
  },
  {
    stdCode: 'S-3c',
    stdDesc: 'Mock standard'
  }
];

storiesOf('TargetDetails/Standards', module)
  .add('One Standard', () => <Standards standards={oneStandard} />)
  .add('Multiple Standards', () => <Standards standards={multiStandards} />);
