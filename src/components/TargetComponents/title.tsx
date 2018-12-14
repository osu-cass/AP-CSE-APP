import React from 'react';
import { IClaim } from '../../models/claim';
import { BreadcrumbsProps, Breadcrumbs } from '../../components/Breadcrumbs';
import { TitleBarProps, TitleBar, TitleBarWrapped } from '../../components/TitleBar';
import { MobileTitleBarWrapped } from '../../components/TitleBar/mobileTitleBar';
import { DownloadBtnProps } from '../../components/TitleBar/DownloadBtn';
import { blueGradient } from '../../constants';

import { Z_ASCII } from 'zlib';
import { ClaimType } from '../Breadcrumbs/BreadcrumbModel';
import { SearchBaseModel } from '@osu-cass/sb-components';

export interface TargetTitleBarProps {
  claim: IClaim;
  targetList?: SearchBaseModel[];
}

const downloadBtnProps: DownloadBtnProps = {
  url: 'test/url',
  filename: 'test-file-name'
};

export const parseTitleBarMobileData = (claim: IClaim): TitleBarProps => {
  const codeSegments: string[] = claim.target[0].shortCode.split('.');
  const targetTitle: string = `Target ${codeSegments[codeSegments.length - 1].slice(1)}`;
  const claimTitle: string = `Claim ${claim.claimNumber.slice(1)}`;

  return {
    claimTitle,
    targetTitle,
    downloadBtnProps
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
  const tNameArr: string[] = [];
  claim.target[0].taskModels.forEach(tm => tNameArr.push(tm.taskName));
  downloadBtnProps.taskNames = tNameArr;

  return downloadBtnProps;
};
export const parseTitleBarData = (claim: IClaim): TitleBarProps => {
  return {
    claimTitle: claim.claimNumber,
    claimDesc: claim.description,
    downloadBtnProps: parseDownloadBtnProps(claim),
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
