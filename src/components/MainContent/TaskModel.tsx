import React from 'react';
import { Passage, RenderListItems, Section, Stem, Task } from './index';
import { MainHeader, SubHeader } from './Header';
import { NonBulletList, NumberList } from './List';
import { Content } from './ParseContent';

interface TaskModelProps {
  task: Task;
  stems: Stem[];
  evidences: string[];
  scoringRule: string;
}

const RenderStemsBy = (target: string, stems: Stem[]) =>
  stems.filter(stem => stem.shortStem === target).map((stem, index) => {
    const desc = Content(stem.stemDesc);

    return <li key={index}>{desc}</li>;
  });

const RenderAppropriateStems = (stems: Stem[]) => RenderStemsBy('Appropriate Stems', stems);

const RenderDualTextOnlyStems = (stems: Stem[]) =>
  RenderStemsBy('Appropriate Stems for Dual-Text Stimuli', stems);

const RenderFormatExample = (example: string) => {
  let elements: JSX.Element | undefined;

  if (example === 'NA') return;
  if (example === 'Examples') return;

  const parsedExample = Content(example);

  elements = (
    <Section>
      <SubHeader>Format Example</SubHeader>
      <Passage>{parsedExample}</Passage>
    </Section>
  );

  return elements;
};

export const TaskModel = ({ task, stems, evidences, scoringRule }: TaskModelProps) => {
  const desc = Content(task.taskDesc);

  return (
    <div>
      <MainHeader>{task.taskName}</MainHeader>
      <Section>
        <SubHeader>Task Description</SubHeader>
        <Passage>{desc}</Passage>
      </Section>

      <Section>
        <SubHeader>Target Evidence Statements</SubHeader>
        <NumberList>{RenderListItems(evidences)}</NumberList>
      </Section>

      <Section>
        <SubHeader>Appropriate Stems</SubHeader>
        <NonBulletList>{RenderAppropriateStems(stems)}</NonBulletList>
      </Section>

      <Section>
        <SubHeader>Appropriate Stems for Dual-Text Stimuli Only</SubHeader>
        <NonBulletList>{RenderDualTextOnlyStems(stems)}</NonBulletList>
      </Section>

      <Section>
        <SubHeader>Scoring Rules</SubHeader>
        <Passage>{scoringRule}</Passage>
      </Section>

      {RenderFormatExample(task.examples)}
    </div>
  );
};
