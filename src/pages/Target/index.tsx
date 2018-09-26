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
import { MainContent, MainContentProps, Target} from '../../components/MainContent';
// import { targetMock } from '../../components/MainContent/__mocks__/target';
import { ELAG3TargetMock } from '../../../mock_api_data/E.G3.PT.ts';
// const targetMock = JSON.parse('../../../mock_api_data/E.G3.PT.json');


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

const targetLayout = {
  items: [
    {
      name: 'Clarification',
      key: 'clarification',
    },
    {
      name: 'Standards',
      key: 'standards',
    },
    {
      name: 'Stimuli/Text Complexity',
      key: 'stimInfo',
    },
    {
      name: 'Accessibility Concerns',
      key: 'accessibility',
    },
    {
      name: 'Evidence Required',
      key: 'evidence',
    },
    {
      name: 'Tasks',
      key: 'taskModels',
    },
    {
      name: 'Depth of Knowledge',
      key: 'DOK',
    }
  ]
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
    for( const a in targetLayout.items) {
     const name = targetLayout.items[a]['name'];
     const key = targetLayout.items[a]['key'];
      if (key == 'taskModels') {
        this.props.targetJson['target'][0]['taskModels'].forEach((tm) => {
          const item: ItemProps = {name: tm['taskName']};
          item.subItems = [];
          for( const t in tm ) {
            if( t != 'taskName') {
              item.subItems.push({name: t});
            }
          }
        items.push(item);
        });
      } else {
        items.push({name});
      }
    }

    return items;
  }

  render() {
    console.log(ELAG3TargetMock.target[0]);
    return(
      <div className="frame">
      <div className="content-nav">
      <ContentNav items={this.state.navJson} />
      </div>
      <div className="content-frame" id="content-frame">
      <MainContent target={this.state.contentJson}/>
      </div>
      <style jsx>{`
      .container {
        display: flex;
        flex-direction: column;
        margin-left: 10px;
      }
      .content-frame {
        overflow-y: scroll;
        border-left: 1px solid black;
        width: 75%;
      }
      .content-nav {
        width: 25%;
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
