import React from 'react';
import { storiesOf } from '@storybook/react';
import { TargetClaimSec, TargetClaimProps } from './mobileTAndCDesc';

const claimOnlyMock: TargetClaimProps = {
  claimTitle: 'Claim 1',
  claimDesc: 'This describes the CLaim'
};
const allDataMock: TargetClaimProps = {
  ...claimOnlyMock,
  targetTitle: 'Target 1',
  targetDesc: 'this describes the Target'
};

storiesOf('MobileCLaimTargetSec component', module)
  .add('Renders a Title Bar with header only', () => (
    <div>
      <TargetClaimSec claimTitle={claimOnlyMock.claimTitle} />
    </div>
  ))

  .add('Renders a Title Bar with a claim only', () => (
    <div>
      <TargetClaimSec
        claimTitle={claimOnlyMock.claimTitle}
        targetTitle={claimOnlyMock.targetTitle}
      />
    </div>
  ))
  .add('Renders a Title Bar with all data', () => (
    <div>
      <TargetClaimSec claimTitle={allDataMock.claimTitle} targetTitle={allDataMock.targetTitle} />
    </div>
  ));
