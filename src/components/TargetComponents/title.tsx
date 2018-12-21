import React from 'react';
import { IClaim } from '../../models/claim';
import { BreadcrumbsProps, Breadcrumbs, buildSearchUrl } from '../../components/Breadcrumbs';
import { TitleBarProps, TitleBar, TitleBarWrapped } from '../../components/TitleBar';
import {
  MobileTitleBarWrapped,
  MobileTitleBarProps
} from '../../components/TitleBar/mobileTitleBar';
import { DownloadBtnProps } from '../../components/TitleBar/DownloadBtn';
import { blueGradient } from '../../constants/style';

import { Z_ASCII } from 'zlib';
import { ClaimType } from '../Breadcrumbs/BreadcrumbModel';
import { SearchBaseModel } from '@osu-cass/sb-components';

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
  return {
    targetList,
    subject: claim.subject,
    grades: claim.grades,
    claim: claim.claimNumber,
    target: claim.target[0].title
  };
};
export const parseDownloadBtnProps = (claim: IClaim): DownloadBtnProps => {
  return {
    claim
  };
};
export const parseTitleBarData = (claim: IClaim): TitleBarProps => {
  return {
    claimTitle: claim.claimNumber,
    claimDesc: claim.description,
    downloadBtnProps: { claim },
    targetTitle: claim.target[0].title,
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
