import React from 'react';
import { ContentSection, GenericContentPage } from '../GenericContentPage';
import { ITarget, ITaskModel, IStem } from '../../models/target';
import { parseContent, parseExamples } from '../MainContent/parseUtils';
import { Standards } from './Standards';
import { Evidence } from './Evidence';
import { OrderedList } from './Lists';
import { Stems } from './Stems';
import { AdditionalMaterials } from './AdditionalMaterials';
import { DOK } from './DOK';
import { ExamplesProps } from '../TaskModelExample';

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

// tslint:disable: no-non-null-assertion
function handleFractions(taskModels: ITaskModel[]) {
  const rex = /\$\\frac{(\w+)}{(\w+)}\$/g;
  const rexMin = /{(\w+)}{(\w+)}/;
  taskModels.forEach(tm => {
    if (tm.taskDesc && tm.taskDesc.match(rex)) {
      tm.taskDesc.match(rex)!.forEach(m => {
        tm.taskDesc = tm.taskDesc!.replace(m, `${m.match(rexMin)![1]}/${m.match(rexMin)![2]}`);
      });
    }
    // tslint:enable: no-non-null-assertion
  });
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

    if (tm.examples && isMath) {
      const exampleProps: ExamplesProps = {
        examples: []
      };
      if (typeof tm.examples === 'string') {
        exampleProps.examples.push({ label: 'Example 1', content: tm.examples });
      } else {
        tm.examples.map((e, index) => {
          exampleProps.examples.push({ label: `Example ${index + 1}`, content: e });
        });
      }
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
      scrollOffset={-300}
      rightContent={<AdditionalMaterials target={target.shortCode} />}
    />
  );
};
