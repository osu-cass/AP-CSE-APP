import React from 'react';
import { storiesOf } from '@storybook/react';
import { ClaimTargetSummary, ClaimTargetSummaryProps } from '.';

const claimOnlyMock: ClaimTargetSummaryProps = {
  claimTitle: 'Claim 1',
  claimDesc: 'This describes the Claim'
};
const allDataMock: ClaimTargetSummaryProps = {
  ...claimOnlyMock,
  targetTitle: 'Target 1',
  targetDesc: 'This describes the Target'
};

storiesOf('ClaimTargetSummary', module)
  .add('All information', () => (
    <ClaimTargetSummary
      claimTitle={allDataMock.claimTitle}
      claimDesc={allDataMock.claimDesc}
      targetTitle={allDataMock.targetTitle}
      targetDesc={allDataMock.targetDesc}
    />
  ))
  .add('Claim title only', () => <ClaimTargetSummary claimTitle={claimOnlyMock.claimTitle} />)
  .add('Claim title and description only', () => (
    <ClaimTargetSummary claimTitle={claimOnlyMock.claimTitle} claimDesc={claimOnlyMock.claimDesc} />
  ))
  .add('Claim title and Target title only', () => (
    <ClaimTargetSummary claimTitle={allDataMock.claimTitle} targetTitle={allDataMock.targetTitle} />
  ))
  .add('Claim title with Target title and description', () => (
    <ClaimTargetSummary
      claimTitle={allDataMock.claimTitle}
      targetTitle={allDataMock.targetTitle}
      targetDesc={allDataMock.targetDesc}
    />
  ));
