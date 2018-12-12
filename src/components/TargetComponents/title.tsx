import React from 'react';
import { IClaim } from '../../models/claim';
import { BreadcrumbsProps, Breadcrumbs } from '../../components/Breadcrumbs';
import { TitleBarProps, TitleBar, TitleBarWrapped } from '../../components/TitleBar';
import { MobileTitleBarWrapped } from '../../components/TitleBar/mobileTitleBar';
import { DownloadBtnProps } from '../../components/TitleBar/DownloadBtn';
import { blueGradient } from '../../constants';
import { Z_ASCII } from 'zlib';
import { ClaimType } from '../Breadcrumbs/BreadcrumbModel';

export interface TargetTitleBarProps {
  claim: IClaim;
}

const downloadBtnProps: DownloadBtnProps = {
  url: 'test/url',
  filename: 'test-file-name'
};

export const parseBreadCrumbData = (claim: IClaim): BreadcrumbsProps => {
  return {
    subject: claim.subject,
    grade: `Grade ${claim.grades}`,
    claim: claim.claimNumber,
    target: claim.target[0].title
  };
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
export const parseTitleBarData = (claim: IClaim): TitleBarProps => {
  return {
    downloadBtnProps,
    claimTitle: claim.claimNumber,
    claimDesc: claim.description,
    targetTitle: claim.target[0].title,
    targetDesc: claim.target[0].description
  };
};

export const TargetTitleBar: React.SFC<TargetTitleBarProps> = ({ claim }) => (
  <div>
    {/* <Breadcrumbs {...parseBreadCrumbData(claim)} /> */}
    <TitleBarWrapped {...parseTitleBarData(claim)} />
    <MobileTitleBarWrapped {...parseTitleBarMobileData(claim)} />
    <style jsx>{`
      div {
        background: ${blueGradient};
      }
    `}</style>
  </div>
);
