import React from 'react';

import { DOK } from './DOK';
import { Stems } from './Stems';
import { OrderedList } from './Lists';
import { Evidence } from './Evidence';
import { Standards } from './Standards';
import { parseContent } from './parseUtils';
import { AdditionalMaterials } from '../AdditionalMaterials';
import { ExamplesProps, Examples } from '../TaskModelExample';
import { ITarget, ITaskModel, IStem } from '../../models/target';
import { ContentSection, GenericContentPage } from '../GenericContentPage';

export interface TargetDetailProps {
  target: ITarget;
}

// function optionallyRender<T>(data: T | undefined, title: string, jsx: React.ReactNode): {
//   return data ? {render(data)} : undefined;
// }

function stemSection(stem: IStem[]): ContentSection[] {
  const sections: ContentSection[] = [];

  sections.push({
    title: 'Appropriate Stems',
    jsx: <Stems stems={stem} stemType="Appropriate Stems" />
  });

  sections.push({
    title: 'Appropriate Stems for Dual-Text Stimuli',
    jsx: <Stems stems={stem} stemType="Appropriate Stems for Dual-Text Stimuli" />
  });

  return sections;
}

function taskModelSections(
  taskModels: ITaskModel[],
  stem?: IStem[],
  isMath?: boolean
): ContentSection[] {
  return taskModels.map((tm, i) => {
    let subsections: ContentSection[] = [];

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

    // stem section
    if (stem) {
      subsections = subsections.concat(stemSection(stem));
    }

    // Have to check if Example is NA because is possible there is one example like this ['NA']
    if (tm.examples && tm.examples[0] !== 'NA') {
      const exampleProps: ExamplesProps = {
        examples: []
      };
      tm.examples.map((e, index) => {
        exampleProps.examples.push({ label: `Example ${index + 1}`, content: e });
      });
      subsections.push({
        title: 'Examples',
        jsx: <Examples {...exampleProps} />
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
  if (target.clarification) {
    sections.push({
      title: 'Clarification',
      jsx: parseContent(target.clarification)
    });
  }

  if (target.standards) {
    sections.push({
      title: 'Standards',
      jsx: <Standards standards={target.standards} />
    });
  }

  if (target.stimInfo) {
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
  }
  if (target.accessibility) {
    sections.push({
      title: 'Accessibility Concerns',
      jsx: parseContent(target.accessibility)
    });
  }

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
      rightContent={<AdditionalMaterials target={target.shortCode} />}
    />
  );
};
