import React from 'react';
import { IClaim } from '../../models/claim';
import { BreadcrumbsProps, Breadcrumbs } from '../../components/Breadcrumbs';
import { TitleBarProps, TitleBar } from '../../components/TitleBar';
import { DownloadBtnProps } from '../../components/TitleBar/DownloadBtn';
import { blueGradient } from '../../constants';

export interface TargetTitleBarProps {
  claim: IClaim;
}

const downloadBtnMock: DownloadBtnProps = {
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

export const parseTitleBarData = (claim: IClaim): TitleBarProps => {
  return {
    claimTitle: claim.claimNumber,
    claimDesc: claim.description,
    downloadBtnProps: downloadBtnMock,
    targetTitle: claim.target[0].title,
    targetDesc: claim.target[0].description
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
