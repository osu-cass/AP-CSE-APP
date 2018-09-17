import React from 'react';

import { NavBar } from '../../components/NavBar';
import { TitleBar, TitleBarProps } from '../../components/TitleBar';
import { ContentNav, ContentNavProps } from '../../components/ContentNav';
import { SubItem, SubItemProps } from '../../components/ContentNav/SubItem';
import { Item, ItemProps } from '../../components/ContentNav/Item';
import { DownloadBtn, DownloadBtnProps } from '../../components/TitleBar/DownloadBtn';
import { Breadcrumbs, BreadcrumbsProps } from '../../components/Breadcrumbs';
import { blueGradientBgImg } from '../../constants';
import { ClaimType, GradeType, SubjectType } from '../../components/Breadcrumbs/BreadcrumbModel';

export interface TargetPageProps {
  titleBarProps: TitleBarProps;
}
const style = {
  ...blueGradientBgImg
};
const downloadBtnMock: DownloadBtnProps = {
  url: 'test/url',
  filename: 'test-file-name'
};
const claimOnlyMock: TitleBarProps = {
  claimTitle: 'Claim 1',
  claimDesc:
    'Students can read closely and analytically to comprehend a range of increasingly complex literary and informational texts.',
  downloadBtnProps: downloadBtnMock
};
const allDataMock: TitleBarProps = {
  ...claimOnlyMock,
  targetTitle: 'Target 1',
  targetDesc:
    'Given an inference or conclusion, use explicit details and implicit information from the text to support the inference or conclusion provided.'
};

const allBreadcrumbDataMock: BreadcrumbsProps = {
  subject: SubjectType.ELA,
  grade: GradeType.Eight,
  claim: ClaimType.Four,
  target: 'Target 1'
};

const targetPageProps: TargetPageProps = {
  titleBarProps: allDataMock
};
const subMock1: SubItemProps = { name: 'sdgasdfasdf' };
const subMock2: SubItemProps = { name: 'helasd' };
const mock: ItemProps[] = [
  {
    name: 'Clarifications'
  },
  {
    name: 'Standards'
  },
  {
    name: 'Stimuli/Text Complexity'
  },
  {
    name: 'Accessibility Concerns'
  },
  {
    name: 'Evidence Required'
  },
  {
    name: 'Task Model 1',
    subItems: [
      {
        name: 'Task Descriptions'
      },
      {
        name: 'Target Evidence Statement'
      },
      {
        name: 'Appropriate Stems'
      }
    ]
  },
  {
    name: 'Scoring Rules'
  }
];

export const ContentFrame = () => {
  return (
    <div className="frame">
      <ContentNav items={mock} />
      <div className="content-placeholder">
        <p> nathan sucks </p>
      </div>
      <style jsx>{`
        .content-placeholder {
          width: 400px;
          height: 400px;
          border-bottom: 1px solid black;
        }
        .frame {
          display: flex;
          justify-content: center;
        }
      `}</style>
    </div>
  );
};

export const TargetPage = () => {
  return (
    <>
      <div style={style}>
        <Breadcrumbs
          subject={allBreadcrumbDataMock.subject}
          grade={allBreadcrumbDataMock.grade}
          claim={allBreadcrumbDataMock.claim}
          target={allBreadcrumbDataMock.target}
        />
        <TitleBar
          claimTitle={targetPageProps.titleBarProps.claimTitle}
          claimDesc={targetPageProps.titleBarProps.claimDesc}
          targetTitle={targetPageProps.titleBarProps.targetTitle}
          targetDesc={targetPageProps.titleBarProps.targetDesc}
          downloadBtnProps={targetPageProps.titleBarProps.downloadBtnProps}
        />
      </div>
      <ContentFrame />
      <style jsx>{`
        * {
          margin: 0;
          padding: 0;
        }
      `}</style>
    </>
  );
};
