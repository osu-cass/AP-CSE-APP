import React from 'react';
import { Passage, RenderListItems, Section, Stem, Task } from './index';
import { MainHeader, SubHeader } from './Header';
import { BulletList, NumberList } from './List';

interface TaskModelProps {
  task: Task;
  stems: Stem[];
  evidences: string[];
  scoringRule: string;
}

const RenderStemsBy = (target: string, stems: Stem[]) =>
  stems.filter(stem => stem.shortStem === target).map((stem, index) => {
    return <li key={index}>{stem.stemDesc}</li>;
  });

const RenderAppropriateStems = (stems: Stem[]) => RenderStemsBy('Appropriate Stems', stems);

const RenderDualTextOnlyStems = (stems: Stem[]) =>
  RenderStemsBy('Appropriate Stems for Dual-Text Stimuli', stems);

const RenderFormatExample = (example: string) => {
  let elements: JSX.Element | undefined;

  if (example === 'NA') return;
  if (example === 'Examples') return;

  elements = (
    <Section>
      <SubHeader>Format Example</SubHeader>
      <Passage>{example}</Passage>
    </Section>
  );

  return elements;
};

export const TaskModel = ({ task, stems, evidences, scoringRule }: TaskModelProps) => (
  <Section>
    <MainHeader>{task.taskName}</MainHeader>
    <Section>
      <SubHeader>Task Description</SubHeader>
      <Passage>{task.taskDesc}</Passage>
    </Section>

    <Section>
      <SubHeader>Target Evidence Statements</SubHeader>
      <NumberList>{RenderListItems(evidences)}</NumberList>
    </Section>

    <Section>
      <SubHeader>Appropriate Stems</SubHeader>
      <BulletList>{RenderAppropriateStems(stems)}</BulletList>
    </Section>

    <Section>
      <SubHeader>Appropriate Stems for Dual-Text Stimuli Only</SubHeader>
      <BulletList>{RenderDualTextOnlyStems(stems)}</BulletList>
    </Section>

    <Section>
      <SubHeader>Scoring Rules</SubHeader>
      <Passage>{scoringRule}</Passage>
    </Section>

    {RenderFormatExample(task.examples)}
  </Section>
);
