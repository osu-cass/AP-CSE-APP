import React from 'react';
import { Styles, Colors } from '../../constants';
import { IDomain } from '../../models/claim';
import { MobileBreakSize, mediaQueryWrapper } from '../MediaQuery/MediaQueryWrapper';

/**
 * interface for TargetClaim
 * @export
 * @interface TargetClaimProps
 */
export interface TargetClaimProps {
  claimTitle?: string;
  claimDesc?: string;
  targetTitle?: string;
  targetDesc?: string;
}
/**
 * Renders a TitleBar that shows a title, a description, a download button.
 * The description and the download button are optional although the title is always shown
 * @export
 * @function TargetClaimSec
 * @param {string | undefined} claimTitle
 * @param {string | undefined} claimDesc
 * @param {string | undefined} targetTitle
 * @param {string | undefined} targetDesc
 */
export const TargetClaimSec: React.SFC<TargetClaimProps> = ({
  claimTitle,
  claimDesc,
  targetTitle,
  targetDesc
}: TargetClaimProps) => (
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
        .target-claim-container {
          font-family: ${Styles.sbSans};
          padding: 0.7em 0;
          width: '100%',
          font-size:1.2em;
        }
        .title {
          color: black;
          text-align: left;
        }
        .target-section{
          marigin-top: 10px;
          padding: 5px;
        }
        .claim-section{
          padding:5px;
        }
        .desc {
          width: 75%;
          min-width: 50px;
          padding-bottom: 15px;
          color: black;
          text-align: left;
        }
      `}</style>
  </div>
);
export const MobileTargetClaimWrapped = mediaQueryWrapper(TargetClaimSec, MobileBreakSize);
