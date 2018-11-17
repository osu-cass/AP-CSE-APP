import React from 'react';
import { ContentSection, GenericContentPage } from '../GenericContentPage';
import { ITarget, IStandards } from '../../models/target';
import { parseContent } from '../MainContent/parseUtils';
import { Standards } from './Standards';
import { Evidence } from './Evidence';
import { TaskModel } from '../MainContent/TaskModel';

export interface TargetDetailProps {
  target: ITarget;
}



export const TargetDetail: React.SFC<TargetDetailProps> = ({ target }) => {
  const taskModelSections: ContentSection[] = target.taskModels.map((tm, i) => ({
    title: `Task Model ${i + 1}`,
    jsx: undefined,
    subsections: [
      {
        title: 'Task Description',
        jsx: parseContent(tm.taskDesc)
      },
      {
        title: 'Target Evidence Statements',
        jsx: 
      }
    ]
  }))

  const sections: ContentSection[] = [
    {
      title: 'Clarification',
      jsx: parseContent(target.clarification)
    },
    {
      title: 'Standards',
      jsx: <Standards {...target.standards} />
    },
    {
      title: 'Stimuli/Text Complexity',
      jsx: undefined,
      subsections: [
        {
          title: 'Passage',
          jsx: parseContent(target.stimInfo)
        },
        {
          title: 'Text Complexity',
          jsx: parseContent(target.dualText)
        }
      ]
    },
    {
      title: 'Accessibility Concerns',
      jsx: parseContent(target.accessibility)
    },
    {
      title: 'Evidence Required',
      jsx: <Evidence {...target.evidence} />
    },
    ...
  ];

  return <GenericContentPage contentSections={sections} />;
};
