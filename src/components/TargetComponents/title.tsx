import React from 'react';
import { IClaim } from '../../models/claim';
import { BreadcrumbsProps, Breadcrumbs } from '../../components/Breadcrumbs';
import { TitleBarProps, TitleBar } from '../../components/TitleBar';
import { DownloadBtnProps } from '../../components/TitleBar/DownloadBtn';
import { blueGradient } from '../../constants';
import { SearchBaseModel } from '@osu-cass/sb-components';

export interface TargetTitleBarProps {
  claim: IClaim;
  targetList?: SearchBaseModel[];
}

const downloadBtnMock: DownloadBtnProps = {
  url: 'test/url',
  filename: 'test-file-name'
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

export const parseTitleBarData = (claim: IClaim): TitleBarProps => {
  return {
    claimTitle: claim.claimNumber,
    claimDesc: claim.description,
    downloadBtnProps: downloadBtnMock,
    targetTitle: claim.target[0].title,
    targetDesc: claim.target[0].description
  };
};

export const TargetTitleBar: React.SFC<TargetTitleBarProps> = ({ claim, targetList }) => (
  <div>
    <Breadcrumbs {...parseBreadCrumbData(claim, targetList)} />
    <TitleBar {...parseTitleBarData(claim)} />
    <style jsx>{`
      div {
        background: ${blueGradient};
      }
    `}</style>
  </div>
);
