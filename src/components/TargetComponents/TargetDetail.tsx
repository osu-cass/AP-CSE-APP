import React from 'react';
import { ContentSection, GenericContentPage } from '../GenericContentPage';
import { ITarget, ITaskModel, IStem } from '../../models/target';
import { parseContent } from '../MainContent/parseUtils';
import { Standards } from './Standards';
import { Evidence } from './Evidence';
import { OrderedList } from './Lists';
import { Stems } from './Stems';
import { AdditionalMaterials } from './AdditionalMaterials';
import { DOK } from './DOK';

export interface TargetDetailProps {
  target: ITarget;
}

// function optionallyRender<T>(data: T | undefined, title: string, jsx: React.ReactNode): {
//   return data ? {render(data)} : undefined;
// }

function taskModelSections(taskModels: ITaskModel[], stem?: IStem[]): ContentSection[] {
  return taskModels.map((tm, i) => {
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
    if (stem) {
      subsections.push({
        title: 'Appropriate Stems',
        jsx: <Stems stems={stem} stemType="Appropriate Stems" />
      });
    }

    // appropriate stems for dual-text stimuli
    if (stem) {
      subsections.push({
        title: 'Appropriate Stems for Dual-Text Stimuli',
        jsx: <Stems stems={stem} stemType="Appropriate Stems for Dual-Text Stimuli" />
      });
    }

    return {
      subsections,
      title: tm.taskName,
      jsx: undefined
    };
  });
}

export const TargetDetail: React.SFC<TargetDetailProps> = ({ target }) => {
  let sections: ContentSection[] = [];

  sections.push({
    title: 'Clarification',
    jsx: parseContent(target.clarification)
  });

  if (target.standards) {
    sections.push({
      title: 'Standards',
      jsx: <Standards standards={target.standards} />
    });
  }

  sections.push({
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
  });

  sections.push({
    title: 'Accessibility Concerns',
    jsx: parseContent(target.accessibility)
  });

  // evidence required
  if (target.evidence) {
    sections.push({
      title: 'Evidence Required',
      jsx: <Evidence evidence={target.evidence} />
    });
  }

  // add task model sections
  sections = sections.concat(taskModelSections(target.taskModels, target.stem));

  sections.push({
    title: 'Depth of Knowledge',
    jsx: <DOK dok={target.DOK} />
  });

  return (
    <GenericContentPage
      contentSections={sections}
      scrollOffset={-300}
      rightContent={<AdditionalMaterials target={target.shortCode} />}
    />
  );
};
