import React, { Component } from 'react';

import { TitleBar, TitleBarProps } from '../../components/TitleBar';
import { ContentNav } from '../../components/ContentNav';
import { ItemProps } from '../../components/ContentNav/Item';
import { DownloadBtnProps } from '../../components/TitleBar/DownloadBtn';
import { Breadcrumbs, BreadcrumbsProps } from '../../components/Breadcrumbs';
import { Styles, blueGradientBgImg } from '../../constants';
import { AdditionalMaterials } from '../../components/AdditionalMaterials';
import { MainContent, TargetLayout, SubLayout } from '../../components/MainContent';
import { ITarget, ITaskModel } from '../../models/target';
import { IClaim } from '../../models/claim';
import { targetMock } from './__mocks__';
import { TargetClient, ITargetParams } from '../../clients/target';

export interface TargetPageProps {
  match: any;
}

export interface TargetPageState {
  claim?: IClaim;
  target?: ITarget;
  breadCrumbProps: BreadcrumbsProps;
  titleBarProps: TitleBarProps;
}

export interface ContentFrameProps {
  target: ITarget;
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

export const parseSubItem = (taskModel: ITaskModel): ItemProps => {
  const item: ItemProps = { name: taskModel.taskName, subItems: [] };
  Object.keys(subItemLayout).forEach((subItemName: string) => {
    item.subItems.push({ name: `${item.name}-${subItemLayout[subItemName]}` });
  });

  return item;
};

export const parseItem = (targetItem: string, target: ITarget): ItemProps[] => {
  const name: string = targetLayout[targetItem];
  let items: ItemProps[] = [];
  if (targetItem === 'taskModels') {
    const itemTaskModels: ItemProps[] = [];
    if (target.taskModels.length > 0) {
      target.taskModels.forEach((taskModel: ITaskModel) => {
        itemTaskModels.push(parseSubItem(taskModel));
      });
    }
    items = itemTaskModels;
  } else {
    items = [{ name, subItems: [] }];
  }

  return items;
};

export const parseNavProps = (target: ITarget): ItemProps[] => {
  let items: ItemProps[] = [];
  Object.keys(targetLayout).forEach((targetItem: string) => {
    items = items.concat(parseItem(targetItem, target));
  });

  return items;
};

export const parseBreadCrumbData = (claim: IClaim): BreadcrumbsProps => {
  return {
    subject: claim.subject,
    grade: `Grade ${claim.grades}`,
    claim: claim.claimNumber,
    target: 'Placeholder Title'
  };
};

export const parseTitleBarData = (claim: IClaim): TitleBarProps => {
  return {
    claimTitle: claim.claimNumber,
    claimDesc: claim.description,
    downloadBtnProps: downloadBtnMock,
    targetTitle: 'Place holder',
    targetDesc: 'This description is a placeholder description.'
  };
};

export const ContentFrame = ({ target }: ContentFrameProps): JSX.Element => {
  return (
    <div className="frame">
      <div className="content-nav">
        <ContentNav items={parseNavProps(target)} />
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
          overflow-y: scroll;
          width: 25%;
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

  targetClient: TargetClient;
  constructor(props: TargetPageProps) {
    super(props);
    this.state = {
      breadCrumbProps: { subject: '', grade: '', claim: '', target: '' },
      titleBarProps: {}
    };
    this.targetClient = new TargetClient();
  }

  componentWillMount() {
    const test: ITargetParams = {
      grades: [this.props.match.params.grade],
      subject: this.props.match.params.subject,
      claim: this.props.match.params.claim,
      targetShortCode: this.props.match.params.shortCode
    };
    this.targetClient.getTarget(test)
      .then((data) => {
        if (data !== undefined) {
          const claimData = data as unknown as IClaim;
          this.setState({
            claim: claimData,
            target: claimData.target[0],
            breadCrumbProps: parseBreadCrumbData(claimData),
            titleBarProps: parseTitleBarData(claimData)
          });
        }
      })
      .catch((e) => {
        throw new Error(e);
      });
  }

  /*
  tslint:disable: promise-function-async
  loadData() {
    let data: IClaim | undefined;
    let promise = Promise.resolve();
    promise = test.then(() => {
      return import('../../../mock_api_data/E.G3.C1').then(rawData => {
        data = (rawData.default as unknown) as IClaim;
      });
    });

    return promise.then(() => {
      return data;
    });
  }
  */

  render() {
    const { subject, grade, claim, target } = this.state.breadCrumbProps;
    const {
      claimTitle,
      claimDesc,
      targetTitle,
      targetDesc,
      downloadBtnProps
    } = this.state.titleBarProps;

    return this.state.target === undefined ?
      <div>Loading data...</div>
    :
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
      </>;
  }
}
