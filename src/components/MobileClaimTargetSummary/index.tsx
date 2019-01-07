import React from 'react';

import { IClaim } from '../../models/claim';
import { Styles } from '../../constants/style';
import { MobileBreakSize, mediaQueryWrapper } from '../MediaQueryWrapper';

/**
 * interface for ClaimTargetSummary
 * @export
 * @interface ClaimTargetSummaryProps
 */
export interface ClaimTargetSummaryProps {
  claimTitle?: string;
  claimDesc?: string;
  targetTitle?: string;
  targetDesc?: string;
}

export const parseClaimSummaryData = (claim: IClaim): ClaimTargetSummaryProps => {
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

/**
 * Renders a TitleBar that shows a title, a description, a download button.
 * The description and the download button are optional although the title is always shown
 * @export
 * @function ClaimTargetSummary
 * @param {string | undefined} claimTitle
 * @param {string | undefined} claimDesc
 * @param {string | undefined} targetTitle
 * @param {string | undefined} targetDesc
 */
export const ClaimTargetSummary: React.SFC<ClaimTargetSummaryProps> = ({
  claimTitle,
  claimDesc,
  targetTitle,
  targetDesc
}: ClaimTargetSummaryProps) => (
  <div className="target-claim-container">
    <div className="claim-section">
      {claimTitle && <span className="title">{claimTitle}: </span>}
      {claimDesc && <span className="desc">{claimDesc}</span>}
    </div>
    <div className="target-section">
      {targetTitle && <span className="title">{targetTitle}: </span>}
      {targetDesc && <span className="desc">{targetDesc}</span>}
    </div>
    <style jsx>{`
      .claim-target-container {
        font-family: ${Styles.sbSans};
        padding: 0;
        width: 100%;
        color: black;
      }

      .target-section {
        margin-top: 10px;
        padding: 5px;
      }
      .claim-section {
        padding: 5px;
      }
    `}</style>
  </div>
);
export const MobileClaimTargetSummary = mediaQueryWrapper(ClaimTargetSummary, MobileBreakSize);
