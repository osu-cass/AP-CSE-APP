import React from 'react';
import { TaskModel } from './TaskModel';
import { NonBulletList, NumberList } from './List';
import { MainHeader, SubHeader } from './Header';
import { Content } from './ParseContent';

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

export interface ContentProps {
  children:
    | void
    | string
    | JSX.Element
    | JSX.Element[]
    | (JSX.Element | undefined)[]
    | (JSX.Element | undefined);
}

export const Section = ({ children }: ContentProps) => (
  <section>
    {children}
    <style jsx>{`
      padding-left: 0.5em;
    `}</style>
  </section>
);

export const Passage = ({ children }: ContentProps) => (
  <p>
    {children}
    <style jsx>{`
      padding-left: 0.5em;
    `}</style>
  </p>
);

export const RenderListItems = (items: string[]) =>
  items.map((item, index) => {
    return <li key={index}>{item}</li>;
  });

const RenderStandards = (standards: Standard[]) =>
  standards.map((standard, index) => {
    const code = standard.stdCode;
    const desc = Content(standard.stdDesc);

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
  const clarification = Content(target.clarification);
  const stimPassage = Content(target.stimInfo);
  const stimTextComplexity = Content(target.dualText);
  const accessibility = Content(target.accessibility);

  return (
    <div className="container">
      <Section>
        <MainHeader>Clarification</MainHeader>
        <Passage>{clarification}</Passage>
      </Section>

      <Section>
        <MainHeader>Standards</MainHeader>
        <NonBulletList>{RenderStandards(target.standards)}</NonBulletList>
      </Section>

      <Section>
        <MainHeader>Stimuli Passage/Text Complexity</MainHeader>
        <Section>
          <SubHeader>Passage</SubHeader>
          <Passage>{stimPassage}</Passage>
        </Section>
        <Section>
          <SubHeader>Text Complexity</SubHeader>
          <Passage>{stimTextComplexity}</Passage>
        </Section>
      </Section>

      <Section>
        <MainHeader>Accessibility Concerns</MainHeader>
        <Passage>{accessibility}</Passage>
      </Section>

      <Section>
        <MainHeader>Evidence Required</MainHeader>
        <NumberList>{RenderListItems(target.evidence)}</NumberList>
      </Section>

      <Section>
        {RenderTaskModels(target.taskModels, target.stem, target.evidence, target.rubrics)}
      </Section>

      <Section>
        <MainHeader>Depth of Knowledge</MainHeader>
        <Passage>{RenderDOKs(target.DOK)}</Passage>
      </Section>

      <Section>
        <MainHeader>Allowable Item Types</MainHeader>
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