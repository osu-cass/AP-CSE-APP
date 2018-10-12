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
import { ELAG3ClaimMock } from '../../../mock_api_data/E.G3.C1';
import { targetMock } from './__mocks__';

export interface TargetPageProps {
  url: string;
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

const targetLayout: TargetLayout = {
  clarification: 'Clarification',
  standards: 'Standards',
  stimInfo: 'Stimuli/Text Complexity',
  accessibility: 'Accessibility Concerns',
  evidence: 'Evidence Required',
  taskModels: 'Task Model ',
  DOK: 'Depth of Knowledge'
};

const subItemLayout: SubLayout = {
  taskDesc: 'Task Description',
  evidence: 'Target Evidence Statements',
  stem: 'Appropriate Stems',
  rubrics: 'Scoring Rules'
};

export const ContentFrame = ({ target }: ContentFrameProps): JSX.Element => {
  const parseSubItem = (taskModel: TaskModel): ItemProps => {
    const item: ItemProps = { name: taskModel.taskName, subItems: [] };
    Object.keys(subItemLayout).forEach((subItemName: string) => {
      item.subItems.push({ name: `${item.name}-${subItemLayout[subItemName]}` });
    });

    return item;
  };

  const parseItem = (targetItem: string): ItemProps[] => {
    const name: string = targetLayout[targetItem];
    let items: ItemProps[] = [];
    if (targetItem === 'taskModels') {
      const taskModels: ItemProps[] = [];
      if (target.taskModels.length > 0) {
        target.taskModels.forEach((taskModel: TaskModel) => {
          taskModels.push(parseSubItem(taskModel));
        });
      }
      items = taskModels;
    } else {
      items = [{ name, subItems: [] }];
    }

    return items;
  };

  const parseNavProps = (): ItemProps[] => {
    let items: ItemProps[] = [];
    Object.keys(targetLayout).forEach((targetItem: string) => {
      items = items.concat(parseItem(targetItem));
    });

    return items;
  };

  return (
    <div className="frame">
      <div className="content-nav">
        <ContentNav items={parseNavProps()} />
      </div>
      <div className="content-frame" id="content-frame">
        <MainContent target={target} names={targetLayout} />
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
    targetDesc: claim['target'][0]['description']
  };
};

export const TargetPage = ({ url }: TargetPageProps): JSX.Element => {
  /*
   * This here content is waiting to be replaced with functionality
   * to make requests to the API.
   */
  const claim = ELAG3ClaimMock;
  let target: Target;
  target = url === 'blank' ? targetMock : claim.target[0];

  const breadCrumbProps: BreadcrumbsProps = parseBreadCrumbData(claim);
  const titleBarProps: TitleBarProps = parseTitleBarData(claim);

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
        <ContentFrame target={target} />
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
};
