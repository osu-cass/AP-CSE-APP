import React from 'react';
import { storiesOf } from '@storybook/react';

import { DOK } from '.';
import { IDOK } from '../../../models/target';

const oneDOK: IDOK[] = [
  {
    dokCode: '1',
    dokDesc: 'DOK one',
    dokShort: 'DOK'
  }
];

const multiDOK: IDOK[] = [
  {
    dokCode: '1',
    dokDesc: 'DOK one',
    dokShort: 'DOK'
  },
  {
    dokCode: '2',
    dokDesc: 'DOK two',
    dokShort: 'DOK'
  },
  {
    dokCode: '2',
    dokDesc: 'DOK three',
    dokShort: 'DOK'
  }
];

storiesOf('TargetDetails/DOK', module)
  .add('One DOK', () => <DOK dok={oneDOK} />)
  .add('Multiple DOK', () => <DOK dok={multiDOK} />);
