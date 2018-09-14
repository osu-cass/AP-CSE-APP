import React from 'react';
import { RenderListItems, Stem, Task } from './index';
import { Content } from './Content';
import { MainHeader, NonBulletList, NumberList, Passage, Section, SubHeader } from './Components';

interface TaskModelProps {
  task: Task;
  stems: Stem[];
  evidences: string[];
  scoringRule: string;
  index: number;
}

export const TaskModel = ({ task, stems, evidences, scoringRule, index }: TaskModelProps) => {
  const taskPrefix = `taskModel${index}`;
  const desc = Content(task.taskDesc);

  const RenderStemsBy = (target: string, stems: Stem[]) =>
    stems.filter(stem => stem.shortStem === target).map((stem, index) => {
      const desc = Content(stem.stemDesc);

      return <li key={index}>{desc}</li>;
    });

  const RenderAppropriateStems = (stems: Stem[]) => RenderStemsBy('Appropriate Stems', stems);

  const RenderDualTextOnlyStems = (stems: Stem[]) =>
    RenderStemsBy('Appropriate Stems for Dual-Text Stimuli', stems);

  const RenderFormatExample = (example: string, sectionName: string) => {
    let elements: JSX.Element | undefined;

    if (example === 'NA') return;
    if (example === 'Examples') return;

    const parsedExample = Content(example);

    elements = (
      <Section name={sectionName}>
        <SubHeader>Format Example</SubHeader>
        <Passage>{parsedExample}</Passage>
      </Section>
    );

    return elements;
  };

  return (
    <div>
      <MainHeader>{task.taskName}</MainHeader>
      <Section name={`${taskPrefix}-desc`}>
        <SubHeader>Task Description</SubHeader>
        <Passage>{desc}</Passage>
      </Section>

      <Section name={`${taskPrefix}-evidence`}>
        <SubHeader>Target Evidence Statements</SubHeader>
        <NumberList>{RenderListItems(evidences)}</NumberList>
      </Section>

      <Section name={`${taskPrefix}-appropriateStems`}>
        <SubHeader>Appropriate Stems</SubHeader>
        <NonBulletList>{RenderAppropriateStems(stems)}</NonBulletList>
      </Section>

      <Section name={`${taskPrefix}-appropriateStemsDualText`}>
        <SubHeader>Appropriate Stems for Dual-Text Stimuli Only</SubHeader>
        <NonBulletList>{RenderDualTextOnlyStems(stems)}</NonBulletList>
      </Section>

      <Section name={`${taskPrefix}-scoringRules`}>
        <SubHeader>Scoring Rules</SubHeader>
        <Passage>{scoringRule}</Passage>
      </Section>

      {RenderFormatExample(task.examples, `${taskPrefix}-formatExample`)}
    </div>
  );
};
