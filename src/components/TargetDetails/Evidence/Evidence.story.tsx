import React from 'react';
import { storiesOf } from '@storybook/react';

import { Evidence } from '.';
import { IEvidence } from '../../../models/target';

const oneEvidence: IEvidence[] = [
  {
    evTitle: 'Evidence One',
    evDesc: 'Evidence description'
  }
];

const multiEvidence: IEvidence[] = [
  {
    evTitle: 'Evidence One',
    evDesc: 'Evidence description'
  },
  {
    evTitle: 'Evidence Two',
    evDesc: 'Evidence description'
  },
  {
    evTitle: 'Evidence Three',
    evDesc: 'Evidence description'
  }
];

storiesOf('TargetDetails/Evidence', module)
  .add('One Evidence', () => <Evidence evidence={oneEvidence} />)
  .add('Multiple Evidences', () => <Evidence evidence={multiEvidence} />);
