import React from 'react';
import { ContentSection, GenericContentPage } from '../GenericContentPage';
import { ITarget } from '../../models/target';
import { parseContent } from '../MainContent/parseUtils';
import { Standards } from './Standards';
import { Evidence } from './Evidence';
import { OrderedList } from './Lists';
import { Stems } from './Stems';
import { AdditionalMaterials } from './AdditionalMaterials';

export interface TargetDetailProps {
  target: ITarget;
}

// function optionallyRender<T>(data: T | undefined, title: string, jsx: React.ReactNode): {
//   return data ? {render(data)} : undefined;
// }

export const TargetDetail: React.SFC<TargetDetailProps> = ({ target }) => {
  const taskModelSections: ContentSection[] = target.taskModels.map((tm, i) => {
    const subsections: ContentSection[] = [];

    // task description
    if (tm.taskDesc) {
      subsections.push({ title: 'Task Description', jsx: parseContent(tm.taskDesc) });
    }

    // target evidence statements
    if (tm.relatedEvidence) {
      subsections.push({
        title: 'Target Evidence Statements',
        jsx: <OrderedList elements={tm.relatedEvidence} />
      });
    }

    // appropriate stems
    subsections.push({
      title: 'Appropriate Stems',
      jsx: <Stems stems={target.stem} stemType="Appropriate Stems" />
    });

    // appropriate stems for dual-text stimuli
    subsections.push({
      title: 'Appropriate Stems for Dual-Text Stimuli',
      jsx: <Stems stems={target.stem} stemType="Appropriate Stems for Dual-Text Stimuli" />
    });

    return {
      subsections,
      title: tm.taskName,
      jsx: undefined
    };
  });

  const sections: ContentSection[] = [
    {
      title: 'Clarification',
      jsx: parseContent(target.clarification)
    },
    {
      title: 'Standards',
      jsx: <Standards standards={target.standards} />
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
      jsx: <Evidence evidence={target.evidence} />
    },
    ...taskModelSections
  ];

  return (
    <GenericContentPage
      contentSections={sections}
      scrollOffset={-260}
      rightContent={<AdditionalMaterials target={target.shortCode} />}
    />
  );
};
