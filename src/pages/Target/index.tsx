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
import { ITargetParams, ITargetClient, TargetClient } from '../../clients/target';
import { Message } from '../../components/Filter/Messages';

export interface MatchParams {
  targetShortCode: string;
}

export interface Match {
  params: MatchParams;
}

export interface DefaultTargetPageProps {
  targetClient: ITargetClient;
}

export interface TargetPageProps extends DefaultTargetPageProps {
  // tslint: disable: any
  match: Match;
}

export interface TargetPageState {
  claim?: IClaim;
  target?: ITarget;
  breadCrumbProps: BreadcrumbsProps;
  titleBarProps: TitleBarProps;
  error?: string;
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
  static defaultProps: DefaultTargetPageProps = {
    targetClient: TargetClient
  };

  /*
   * This here content is waiting to be replaced with functionality
   * to make requests to the API.
   */
  constructor(props: TargetPageProps) {
    super(props);
    this.state = {
      breadCrumbProps: { subject: '', grade: '', claim: '', target: '' },
      titleBarProps: {}
    };
  }

  componentWillMount() {
    let targetParams: ITargetParams;
    const { targetShortCode }: MatchParams = this.props.match.params;
    if (!this.props.match || !this.props.match.params) {
      targetParams = {
        targetShortCode: ''
      };
    } else {
      targetParams = {
        targetShortCode
      };
    }
    this.props.targetClient
      .getTarget(targetParams)
      // tslint:disable-next-line: no-unsafe-any no-anya
      .then(data => {
        if (data !== undefined) {
          const claimData = (data as unknown) as IClaim;
          this.setState({
            claim: claimData,
            target: claimData.target[0],
            breadCrumbProps: parseBreadCrumbData(claimData),
            titleBarProps: parseTitleBarData(claimData)
          });
        }
      })
      .catch((e: string) => {
        this.setState({ error: 'Failed to fetch Target.' });
        // throw new Error(e);
      });
  }

  render() {
    const { error } = this.state;
    const { subject, grade, claim, target } = this.state.breadCrumbProps;
    const {
      claimTitle,
      claimDesc,
      targetTitle,
      targetDesc,
      downloadBtnProps
    } = this.state.titleBarProps;

    // tslint:disable-next-line:no-unnecessary-initializer
    let page: React.ReactFragment = <></>;

    if (!this.state.target && !error) {
      page = <Message>Loading data...</Message>;
    } else if (error) {
      page = <Message>{error}</Message>;
    } else if (this.state.target) {
      page = (
        <>
          <div className="content">
            <div className="title" style={style}>
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
                width: 100%;
              }
              .title {
                width: inherit;
              }
            `}</style>
          </div>
        </>
      );
    }

    return page;
  }
}
