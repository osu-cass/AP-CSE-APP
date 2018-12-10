import React from 'react';
import { RouteComponentProps } from 'react-router';
import { IClaim } from '../../models/claim';
import { ITargetClient, TargetClient } from '../../clients/target';
import { genericLayout } from '../../components/GenericPage/GenericLayout';
import { TargetTitleBar } from '../../components/TargetComponents/title';
import { Message, ErrorMessage } from '../../components/Filter/Messages';
import { TargetDetail } from '../../components/TargetComponents/TargetDetail';

export interface TargetMatchParams {
  targetShortCode?: string;
}

export interface TargetPageProps extends RouteComponentProps<TargetMatchParams> {}

export interface TargetPageState {
  target?: string;
  result?: IClaim;
  loaded: boolean;
}

<<<<<<< HEAD
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
    grades: claim.grades,
    claim: claim.claimNumber,
    target: claim.target[0].title
  };
};

export const parseTitleBarData = (claim: IClaim, targetIndex: number): TitleBarProps => {
  const taskNameArr: string[] = claim.target[targetIndex].taskModels.map(task => task.taskName);

  return {
    claimTitle: claim.claimNumber,
    claimDesc: claim.description,
    downloadBtnProps: {
      url: window.location.href,
      filename: 'mock.pdf',
      taskNames: taskNameArr
    },
    targetTitle: claim.target[targetIndex].title,
    targetDesc: claim.target[targetIndex].description
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

=======
>>>>>>> dev
/**
 * Class that handles placing the target page components in the generic page layout
 * @class{TargetPage}
 */
export class TargetPage extends React.Component<TargetPageProps, TargetPageState> {
  constructor(props: TargetPageProps) {
    super(props);
    this.state = {
<<<<<<< HEAD
      breadCrumbProps: { subject: '', grades: [], claim: '', target: '' },
      titleBarProps: {}
=======
      target: props.match.params.targetShortCode,
      loaded: false
>>>>>>> dev
    };
  }

  async componentDidMount() {
    if (!this.state.target) {
      this.setState({ loaded: true });

      return;
    }
    const client = new TargetClient();
    try {
      const result = await client.getTarget({ targetShortCode: this.state.target });
      this.setState({ result, loaded: true });
    } catch (err) {
      this.setState({ loaded: true });
    }
  }

  render() {
<<<<<<< HEAD
    const { error } = this.state;
    const { subject, grades, claim, target } = this.state.breadCrumbProps;
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
              <Breadcrumbs subject={subject} grades={grades} claim={claim} target={target} />
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
=======
    if (!this.state.loaded) {
      return <Message>Loading...</Message>;
>>>>>>> dev
    }
    if (!this.state.result) {
      return <ErrorMessage>Error loading target {this.state.target}.</ErrorMessage>;
    }

    const Page = genericLayout(<TargetTitleBar claim={this.state.result} />, TargetDetail);

    return <Page target={this.state.result.target[0]} />;
  }
}
