import React from 'react';
import { SearchBaseModel } from '@osu-cass/sb-components';

import { IClaim } from '../../../models/claim';
import { blueGradient } from '../../../constants/style';
import { DownloadBtnProps } from '../../TitleBar/DownloadBtn';
import { TitleBarProps, TitleBarWrapped } from '../../TitleBar';
import { BreadcrumbsProps, Breadcrumbs, buildSearchUrl } from '../../Breadcrumbs';
import { MobileTitleBarWrapped, MobileTitleBarProps } from '../../TitleBar/mobileTitleBar';

export interface TargetTitleBarProps {
  claim: IClaim;
  targetList?: SearchBaseModel[];
}

export const parseTitleBarMobileData = (claim: IClaim): MobileTitleBarProps => {
  const codeSegments: string[] = claim.target[0].shortCode.split('.');
  const targetTitle: string = `Target ${codeSegments[codeSegments.length - 1].slice(1)}`;
  const claimTitle: string = `Claim ${claim.claimNumber.slice(1)}`;
  const claimUrl: string = buildSearchUrl(claim.subject, claim.grades, claim.claimNumber);

  return {
    claimTitle,
    claimUrl,
    targetTitle,
    downloadBtnProps: { claim }
  };
};

export const parseBreadCrumbData = (
  claim: IClaim,
  targetList?: SearchBaseModel[]
): BreadcrumbsProps => {
  const claimTitle: string = `Claim ${claim.claimNumber.slice(1)}`;
  return {
    targetList,
    subject: claim.subject,
    grades: claim.grades,
    claim: claimTitle,
    target: claim.target[0].title
  };
};
export const parseDownloadBtnProps = (claim: IClaim): DownloadBtnProps => {
  return {
    claim
  };
};
export const parseTitleBarData = (claim: IClaim): TitleBarProps => {
  const codeSegments: string[] = claim.target[0].shortCode.split('.');
  const targetTitle: string = `Target ${codeSegments[codeSegments.length - 1].slice(1)}`;
  const claimTitle: string = `Claim ${claim.claimNumber.slice(1)}`;
  return {
    claimTitle,
    targetTitle,
    claimDesc: claim.description,
    downloadBtnProps: { claim },
    targetDesc: claim.target[0].description
  };
};

export const TargetTitleBar: React.SFC<TargetTitleBarProps> = ({ claim, targetList }) => (
  <div>
    <Breadcrumbs {...parseBreadCrumbData(claim, targetList)} />
    <TitleBarWrapped {...parseTitleBarData(claim)} />
    <MobileTitleBarWrapped {...parseTitleBarMobileData(claim)} />

    <style jsx>{`
      div {
        background: ${blueGradient};
      }
    `}</style>
  </div>
);
