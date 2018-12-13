import React from 'react';
import { IClaim } from '../../models/claim';
import { BreadcrumbsProps, Breadcrumbs } from '../../components/Breadcrumbs';
import { TitleBarProps, TitleBar } from '../../components/TitleBar';
import { DownloadBtnProps } from '../../components/TitleBar/DownloadBtn';
import { blueGradient } from '../../constants';

export interface TargetTitleBarProps {
  claim: IClaim;
}

export const parseBreadCrumbData = (claim: IClaim): BreadcrumbsProps => {
  return {
    subject: claim.subject,
    grade: `Grade ${claim.grades}`,
    claim: claim.claimNumber,
    target: claim.target[0].title
  };
};

export const parseTitleBarData = (IClaim: IClaim): TitleBarProps => {
  return {
    claimTitle: IClaim.claimNumber,
    claimDesc: IClaim.description,
    downloadBtnProps: { claim: IClaim },
    targetTitle: IClaim.target[0].title,
    targetDesc: IClaim.target[0].description
  };
};

export const TargetTitleBar: React.SFC<TargetTitleBarProps> = ({ claim }) => (
  <div>
    <Breadcrumbs {...parseBreadCrumbData(claim)} />
    <TitleBar {...parseTitleBarData(claim)} />
    <style jsx>{`
      div {
        background: ${blueGradient};
      }
    `}</style>
  </div>
);
