import React from 'react';
import { TaskModel } from './TaskModel';
import { parseContent } from './parseUtils';
import { MainHeader, NonBulletList, NumberList, Passage, Section, SubHeader } from './Components';

export interface Standard {
  stdCode: string;
  stdDesc: string;
}

export interface DOK {
  dokCode: string;
  dokDesc: string;
  dokShort: string;
}

export interface Stem {
  stemDesc: string;
  shortStem: string;
}

export interface Task {
  taskName: string;
  taskDesc: string;
  examples: string;
  stimulus: string;
}

export interface Target {
  title: string;
  shortCode: string;
  description: string;
  standards: Standard[];
  DOK: DOK[];
  targetType: string;
  clarification: string;
  heading: string;
  evidence: string[];
  vocab: string;
  tools: string;
  stimInfo: string;
  devNotes: string;
  complexity: string;
  dualText: string;
  accessibility: string;
  stem: Stem[];
  taskModels: Task[];
  rubrics: string[];
}

export interface MainContentProps {
  target: Target;
}

export const renderListItems = (items: string[]) =>
  items.map((item, index) => {
    return <li key={index}>{item}</li>;
  });

const shortenStandardCode = (code: string) => {
  const parts = code.split('.');
  if (parts.length !== 7) return code;

  return `${parts[4]}-${parts[6]}`;
};

const colorStandardCode = (code: string) => {
  const found = code.match('^.*[0-9]$');
  if (found) {
    return (
      <span>
        {code}
        <style jsx>{`
          span {
            color: red;
          }
        `}</style>
      </span>
    );
  }

  return code;
};

const sortStandards = (a: Standard, b: Standard) => {
  if (shortenStandardCode(a.stdCode) < shortenStandardCode(b.stdCode)) return -1;
  if (shortenStandardCode(a.stdCode) > b.stdCode) return 1;

  return 0;
};

const RenderStandards = (standards: Standard[]) =>
  standards.map((standard, index) => {
    const code = colorStandardCode(shortenStandardCode(standard.stdCode));
    const desc = parseContent(standard.stdDesc);

    return (
      <li key={index}>
        <strong>{code}</strong> {desc}
      </li>
    );
  });

const RenderTaskModels = (
  taskModels: Task[],
  stems: Stem[],
  evidence: string[],
  scoringRules: string[]
) =>
  taskModels.map((taskModel, index) => {
    const startIndex = index * 2;
    const endIndex = startIndex + 2;
    const targetStems = stems.slice(startIndex, endIndex);

    return (
      <TaskModel
        key={index}
        task={taskModel}
        stems={targetStems}
        evidences={evidence}
        scoringRule={scoringRules[index]}
        index={index + 1}
      />
    );
  });

const RenderDOKs = (doks: DOK[]) =>
  doks.map((dok, index) => {
    return (
      <span key={index}>
        {dok.dokCode.replace(/R-/, '')}
        <style jsx>{`
          span + span:before {
            content: ', ';
          }
        `}</style>
      </span>
    );
  });

export const MainContent = ({ target }: MainContentProps) => {
  const clarification = parseContent(target.clarification);
  const stimPassage = parseContent(target.stimInfo);
  const stimTextComplexity = parseContent(target.dualText);
  const accessibility = parseContent(target.accessibility);

  target.standards.sort(sortStandards);

  return (
    <div className="container">
      <Section name="clarification">
        <MainHeader text="Clarification" />
        <Passage>{clarification}</Passage>
      </Section>

      <Section name="standards">
        <MainHeader text="Standards" />
        <NonBulletList>{RenderStandards(target.standards)}</NonBulletList>
      </Section>

      <Section name="stimuli">
        <MainHeader text="Stimuli Passage/Text Complexity" />
        <Section name="stimuli-passage">
          <SubHeader text="Passage" />
          <Passage>{stimPassage}</Passage>
        </Section>
        <Section name="stimuli-complexity">
          <SubHeader text="Text Complexity" />
          <Passage>{stimTextComplexity}</Passage>
        </Section>
      </Section>

      <Section name="accessibility">
        <MainHeader text="Accessibility Concerns" />
        <Passage>{accessibility}</Passage>
      </Section>

      <Section name="evidence">
        <MainHeader text="Evidence Required" />
        <NumberList>{renderListItems(target.evidence)}</NumberList>
      </Section>

      <Section name="tasks">
        {RenderTaskModels(target.taskModels, target.stem, target.evidence, target.rubrics)}
      </Section>

      <Section name="dok">
        <MainHeader text="Depth of Knowledge" />
        <Passage>{RenderDOKs(target.DOK)}</Passage>
      </Section>

      <Section name="allowableItemTypes">
        <MainHeader text="Allowable Item Types" />
      </Section>

      <style jsx>{`
        * {
          margin: 0;
          padding: 0;
        }
        div {
          max-width: 100%;
        }
        .container {
          display: flex;
          flex-direction: column;
          flex-wrap: wrap;
          padding: 1em;
          max-width: 100%;
        }
      `}</style>
    </div>
  );
};
