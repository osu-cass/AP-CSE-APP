import React from 'react';

import { NavBar } from '../../components/NavBar';
import { TitleBar, TitleBarProps } from '../../components/TitleBar';
import { ContentNav, ContentNavProps } from '../../components/ContentNav';
import { SubItem, SubItemProps } from '../../components/ContentNav/SubItem';
import { Item, ItemProps } from '../../components/ContentNav/Item';
import { DownloadBtn, DownloadBtnProps } from '../../components/TitleBar/DownloadBtn';
import { Breadcrumbs, BreadcrumbsProps } from '../../components/Breadcrumbs';
import { Styles, blueGradientBgImg } from '../../constants';
import { ClaimType, GradeType, SubjectType } from '../../components/Breadcrumbs/BreadcrumbModel';
import { SbNavLink, SbNavlinkProps } from '../../components/SbNavLink';
import { HelpCircle } from 'react-feather';
import { AdditionalMaterials } from '../../components/AdditionalMaterials';

export interface TargetPageProps {
  titleBarProps: TitleBarProps;
}

export interface AdditionalMaterialsProps {
  links: SbNavlinkProps[];
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

export const ContentFrame: React.SFC = (): JSX.Element => (
  <div className="frame">
    <div className="content-nav">
      <ContentNav items={mock} />
    </div>
    <div className="content-placeholder">
      <p> nathan sucks </p>
    </div>
    <style jsx>{`
      .content-placeholder {
        border-left: 1px solid black;
      }
      .content-nav {
        width: 35%;
      }
      .frame {
        display: flex;
        flex-direction: row;
        justify-content: left;
        width: ${Styles.targetContentWidth};
        max-width: ${Styles.targetContentWidth};
        height: 550px;
        max-height: 550px;
        border-bottom: 1px solid black;
      }
    `}</style>
  </div>
);

export const TargetPage: React.SFC = (): JSX.Element => (
  <>
    <div className="content">
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
      <AdditionalMaterials />
      <style jsx>{`
        .content {
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          padding-bottom: 10px;
        }
      `}</style>
    </div>
  </>
);
