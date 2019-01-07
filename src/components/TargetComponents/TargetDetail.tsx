import React from 'react';
import { ContentSection, GenericContentPage } from '../GenericContentPage';
import { ITarget, ITaskModel, IStem } from '../../models/target';
import { parseContent, parseExamples } from '../MainContent/parseUtils';
import { Standards } from './Standards';
import { Evidence } from './Evidence';
import { OrderedList } from './Lists';
import { Stems } from './Stems';
import { AdditionalMaterials } from '../AdditionalMaterials';
import { DOK } from './DOK';
import { ExamplesProps, Examples } from '../TaskModelExample';

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

function fillValidSection(section: string, sections: ContentSection[], title: string){
  if(section){
   sections.push({
      title: title,
      jsx: parseContent(section)
    });
  }
}

function setUpTargetSections(target: ITarget, sections: ContentSection[]){
  fillValidSection(target.clarification, sections, 'Clarification')
  if (target.standards) {
    sections.push({
      title: 'Standards',
      jsx: <Standards standards={target.standards} />
    });
  }
  if (target.stimInfo || target.dualText || target.complexity) {
    sections.push({
      title: 'Stimuli/Text Complexity',
      jsx: undefined
    });
    const subsects: ContentSection []= [];
    fillValidSection(target.stimInfo, subsects, 'Passage');
    fillValidSection(target.dualText, subsects, 'Dual Text');
    fillValidSection(target.complexity, subsects, 'Text Complexity');
    sections[sections.length-1].subsections=subsects;
  }
  fillValidSection(target.accessibility, sections, 'Accessibility Concerns')

  // evidence required
  if (target.evidence) {
    sections.push({
      title: 'Evidence Required',
      jsx: <Evidence evidence={target.evidence} />
    });
  } 
}
export const TargetDetail: React.SFC<TargetDetailProps> = ({ target }) => {
  let sections: ContentSection[] = [];
  setUpTargetSections(target, sections);
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
