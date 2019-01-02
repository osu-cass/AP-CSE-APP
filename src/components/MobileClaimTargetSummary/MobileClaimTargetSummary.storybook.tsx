import React from 'react';
import { storiesOf } from '@storybook/react';
import { ClaimTargetSummary, ClaimTargetSummaryProps } from '.';

const claimOnlyMock: ClaimTargetSummaryProps = {
  claimTitle: 'Claim 1',
  claimDesc: 'This describes the CLaim'
};
const allDataMock: ClaimTargetSummaryProps = {
  ...claimOnlyMock,
  targetTitle: 'Target 1',
  targetDesc: 'this describes the Target'
};

storiesOf('ClaimTargetSummary', module)
  .add('Header only', () => (
    <div>
      <ClaimTargetSummary claimTitle={claimOnlyMock.claimTitle} />
    </div>
  ))

  .add('Claim title only', () => (
    <div>
      <ClaimTargetSummary
        claimTitle={claimOnlyMock.claimTitle}
        targetTitle={claimOnlyMock.targetTitle}
      />
    </div>
  ))
  .add('Claim and Target titles', () => (
    <div>
      <ClaimTargetSummary
        claimTitle={allDataMock.claimTitle}
        targetTitle={allDataMock.targetTitle}
      />
    </div>
  ));
