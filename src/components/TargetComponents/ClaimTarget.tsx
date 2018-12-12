import React from 'react';
import { IClaim } from '../../models/claim';
import { MobileTargetClaimWrapped, TargetClaimProps } from './mobileTAndCDesc';

export interface ClaimTargetProps {
  claim: IClaim;
}
export const parseMobileData = (claim: IClaim): TargetClaimProps => {
  return {
    claimTitle: claim.claimNumber,
    claimDesc: claim.description,
    targetTitle: claim.target[0].title,
    targetDesc: claim.target[0].description
  };
};

export const ClaimTarget: React.SFC<ClaimTargetProps> = ({ claim }) => (
  <div>
    <MobileTargetClaimWrapped {...parseMobileData(claim)} />
  </div>
);
