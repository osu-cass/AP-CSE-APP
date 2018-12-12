import React from 'react';
import { IClaim } from '../../models/claim';
import { MobileTargetClaimWrapped, TargetClaimProps } from './mobileTAndCDesc';

export interface ClaimTargetProps {
  claim: IClaim;
}
export const parseMobileData = (claim: IClaim): TargetClaimProps => {
  const codeSegments: string[] = claim.target[0].shortCode.split('.');
  const targetTitle: string = `Target ${codeSegments[codeSegments.length - 1].slice(1)}`;
  const claimTitle: string = `Claim ${claim.claimNumber.slice(1)}`;

  return {
    claimTitle,
    targetTitle,
    claimDesc: claim.description,
    targetDesc: claim.target[0].description
  };
};

export const ClaimTarget: React.SFC<ClaimTargetProps> = ({ claim }) => (
  <div>
    <MobileTargetClaimWrapped {...parseMobileData(claim)} />
  </div>
);
