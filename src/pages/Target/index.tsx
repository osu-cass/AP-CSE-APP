import React, { Component } from 'react';

import { TitleBar, TitleBarProps } from '../../components/TitleBar';
import { ContentNav } from '../../components/ContentNav';
import { ItemProps } from '../../components/ContentNav/Item';
import { DownloadBtnProps } from '../../components/TitleBar/DownloadBtn';
import { Breadcrumbs, BreadcrumbsProps } from '../../components/Breadcrumbs';
import { Styles, blueGradientBgImg } from '../../constants';
import { AdditionalMaterials } from '../../components/AdditionalMaterials';
import {
  MainContent,
  Claim,
  Target,
  TargetLayout,
  SubLayout,
  TaskModel
} from '../../components/MainContent';
import { targetMock } from './__mocks__';

export interface TargetPageProps {
  url: string;
}

export interface TargetPageState {
  url: string;
  contentLoaded: boolean;
  claim?: Claim;
  target?: Target;
  breadCrumbProps: BreadcrumbsProps;
  titleBarProps: TitleBarProps;
}

export interface ContentFrameProps {
  target: Target;
}

const style = {
  ...blueGradientBgImg
};
const downloadBtnMock: DownloadBtnProps = {
  url: 'test/url',
  filename: 'test-file-name'
};

export const targetLayout: TargetLayout = {
  clarification: 'Clarification',
  standards: 'Standards',
  stimInfo: 'Stimuli/Text Complexity',
  accessibility: 'Accessibility Concerns',
  evidence: 'Evidence Required',
  taskModels: 'Task Model ',
  DOK: 'Depth of Knowledge'
};

export const subItemLayout: SubLayout = {
  taskDesc: 'Task Description',
  evidence: 'Target Evidence Statements',
  stem: 'Appropriate Stems',
  rubrics: 'Scoring Rules'
};

export const parseSubItem = (taskModel: TaskModel): ItemProps => {
  const item: ItemProps = { name: taskModel.taskName, subItems: [] };
  Object.keys(subItemLayout).forEach((subItemName: string) => {
    item.subItems.push({ name: `${item.name}-${subItemLayout[subItemName]}` });
  });

  return item;
};

export const parseItem = (targetItem: string, target: Target): ItemProps[] => {
  const name: string = targetLayout[targetItem];
  let items: ItemProps[] = [];
  if (targetItem === 'taskModels') {
    const itemTaskModels: ItemProps[] = [];
    if (target.taskModels.length > 0) {
      target.taskModels.forEach((taskModel: TaskModel) => {
        itemTaskModels.push(parseSubItem(taskModel));
      });
    }
    items = itemTaskModels;
  } else {
    items = [{ name, subItems: [] }];
  }

  return items;
};

export const parseNavProps = (target: Target): ItemProps[] => {
  let items: ItemProps[] = [];
  Object.keys(targetLayout).forEach((targetItem: string) => {
    items = items.concat(parseItem(targetItem, target));
  });

  return items;
};

export const parseBreadCrumbData = (claim: Claim): BreadcrumbsProps => {
  return {
    subject: claim.subject,
    grade: `Grade ${claim.grades}`,
    claim: claim.domain,
    target: 'Placeholder Title'
  };
};

export const parseTitleBarData = (claim: Claim): TitleBarProps => {
  return {
    claimTitle: claim.domain,
    claimDesc: claim.description,
    downloadBtnProps: downloadBtnMock,
    targetTitle: 'Placeholder Title',
    targetDesc: claim.target[0].description
  };
};

export const ContentFrame = ({ target }: ContentFrameProps): JSX.Element => {
  return (
    <div className="frame">
      <div className="content-nav">
        <ContentNav items={parseNavProps(target)} referenceContainer={'content-frame'} />
      </div>
      <div className="content-frame" id="content-frame">
        <MainContent target={target} names={targetLayout} subNames={subItemLayout} />
      </div>
      <div className="additional-materials">
        <AdditionalMaterials />
      </div>
      <style jsx>{`
        .content-frame {
          overflow-y: scroll;
          width: 65%;
        }
        .content-nav {
          width: 20%;
        }
        .additional-materials {
          width: 15%;
        }
        .frame {
          display: flex;
          flex-direction: row;
          justify-content: left;
          width: ${Styles.targetContentWidth};
          max-width: ${Styles.targetContentWidth};
          overflow: hidden;
        }
      `}</style>
    </div>
  );
};

/**
 * Renders the page for viewing a single target.
 * @export
 * @class {TargetPage}
 * @param {TargetPageProps} item
 */
export class TargetPage extends Component<TargetPageProps, TargetPageState> {
  /*
   * This here content is waiting to be replaced with functionality
   * to make requests to the API.
   */

  constructor(props: TargetPageProps) {
    super(props);
    this.state = {
      url: '',
      contentLoaded: false,
      breadCrumbProps: { subject: '', grade: '', claim: '', target: '' },
      titleBarProps: {}
    };
  }

  componentWillMount() {
    this.loadData()
      .then(data => {
        if (data !== undefined) {
          this.setState({
            url: '',
            contentLoaded: true,
            breadCrumbProps: parseBreadCrumbData(data),
            titleBarProps: parseTitleBarData(data)
          });
        }
      })
      .catch(() => {
        Error('hello');
      });
  }

  /*tslint:disable: promise-function-async */
  loadData() {
    let data: Claim | undefined;
    let promise = Promise.resolve();
    promise = promise.then(() => {
      return import('../../../mock_api_data/E.G3.C1').then(rawData => {
        data = (rawData.default as unknown) as Claim;
      });
    });

    return promise.then(() => {
      return data;
    });
  }

  render() {
    const { subject, grade, claim, target } = this.state.breadCrumbProps;
    const {
      claimTitle,
      claimDesc,
      targetTitle,
      targetDesc,
      downloadBtnProps
    } = this.state.titleBarProps;

    return this.state.target === undefined ? (
      <div>Loading data...</div>
    ) : (
      <>
        <div className="content">
          <div style={style}>
            <Breadcrumbs subject={subject} grade={grade} claim={claim} target={target} />
            <TitleBar
              claimTitle={claimTitle}
              claimDesc={claimDesc}
              targetTitle={targetTitle}
              targetDesc={targetDesc}
              downloadBtnProps={downloadBtnProps}
            />
          </div>
          <ContentFrame target={this.state.target} />
          <style jsx>{`
            .content {
              display: flex;
              flex-direction: column;
              justify-content: center;
              align-items: center;
              max-height: calc(100vh - 64px);
            }
          `}</style>
        </div>
      </>
    );
  }
}
