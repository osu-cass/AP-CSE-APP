import React, { Component } from 'react';

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
import { MainContent, MainContentProps, Target, TargetLayout, SubLayout} from '../../components/MainContent';
import { ELAG3TargetMock } from '../../../mock_api_data/E.G3.PT.ts';


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

const subMock1: SubItemProps = { name: 'sdgasdfasdf' };
const subMock2: SubItemProps = { name: 'helasd' };
const mock: ItemProps[] = [
  {
    name: 'Clarification'
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

const targetLayout: TargetLayout = {
  clarification: 'Clarification',
  standards: 'Standards',
  stimInfo: 'Stimuli/Text Complexity',
  accessibility: 'Accessibility Concerns',
  evidence: 'Evidence Required',
  taskModels: 'Task Model ',
  DOK: 'Depth of Knowledge',
};

const subItemLayout: SubLayout = {
  taskDesc: 'Task Description',
  evidence: 'Target Evidence Statements',
  stem: 'Appropriate Stems',
  rubrics: 'Scoring Rules',
};

export interface ContentFrameProps {
  targetJson: JSON;
}

export interface ContentFrameState {
  contentJson: Target;
  navJson: ItemProps[];
}

export class ContentFrame extends Component<ContentFrameProps, ContentFrameState> {
  constructor(props: ContentFrameProps) {
    super(props);
    this.state = {
      contentJson: this.parseJsonToContent(),
      navJson: this.parseJsonToNav()
    };
  }

  parseJsonToContent(): Target {

   return this.props.targetJson['target'][0];
  }

  parseJsonToNav(): ItemProps[] {
    const items: ItemProps[] = [];
    // for( const a of targetLayout.k) {
    Object.keys(targetLayout).forEach((a: string) => {
     const name:string = targetLayout[a];
      if (a === 'taskModels') {
        this.props.targetJson['target'][0]['taskModels'].forEach((tm: JSON) => {
          const item: ItemProps = {name: tm['taskName']};
          item.subItems = [];
            Object.keys(subItemLayout).forEach((t: string) => {
              if (tm[t] !== 'NA') {
                item.subItems.push({name: `${item.name}-${subItemLayout[t]}`});
              }
          });
        items.push(item);
        });
      } else {
        items.push({name});
      }
    });

    return items;
  }

  render() {
    return(
      <div className="frame">
      <div className="content-nav">
      <ContentNav items={this.state.navJson} />
      </div>
      <div className="content-frame" id="content-frame">
      <MainContent target={this.state.contentJson} names={targetLayout}/>
      </div>
      <style jsx>{`
      .container {
        display: flex;
        flex-direction: column;
        margin-left: 10px;
      }
      .content-frame {
        overflow-y: scroll;
        width: 75%;
      }
      .content-nav {
        overflow-y: scroll;
        width: 25%;
      }
      .content-nav::-webkit-scrollbar {
        display: none;
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
  }
}

const parseBreadCrumbData = (target:JSON): BreadcrumbsProps => {
  const fields: string[] = target['shortCode'].split('.');

  return ({
    subject: SubjectType[fields[0]],
    grade: GradeType[fields[1]],
    claim: ClaimType[fields[2].slice(0,2)],
    target: fields[3]
  });
};

const parseTitleBarData = (claim:JSON): TitleBarProps => {
  const fields: string[] = claim['shortCode'].split('.');

  return ({
    claimTitle: claim['claimNumber'],
    claimDesc: 'Given an inference or conclusion, use explicit details and implicit information from the text to support the inference or conclusion provided.',
    downloadBtnProps: downloadBtnMock,
    targetTitle: fields[3],
    targetDesc: claim['target'][0]['description']
  });
};

export const TargetPage: React.SFC = (): JSX.Element => {
  const breadCrumbProps: BreadcrumbsProps = parseBreadCrumbData(ELAG3TargetMock['target'][0]);
  const titleBarProps: TitleBarProps = parseTitleBarData(ELAG3TargetMock);

  return (
    <>
      <div className="content">
        <div style={style}>
          <Breadcrumbs
            subject={breadCrumbProps.subject}
            grade={breadCrumbProps.grade}
            claim={breadCrumbProps.claim}
            target={breadCrumbProps.target}
          />
          <TitleBar
            claimTitle={titleBarProps.claimTitle}
            claimDesc={titleBarProps.claimDesc}
            targetTitle={titleBarProps.targetTitle}
            targetDesc={titleBarProps.targetDesc}
            downloadBtnProps={titleBarProps.downloadBtnProps}
          />
        </div>
        <ContentFrame targetJson={ELAG3TargetMock}/>
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
};
