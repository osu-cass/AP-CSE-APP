import React from 'react';
import { renderListItems, Stem, Task } from './index';
import { parseContent } from './parseUtils';
import { MainHeader, NonBulletList, NumberList, Passage, Section, SubHeader } from './Components';

export interface TaskModelProps {
  task: Task;
  stems: Stem[];
  evidences: string[];
  scoringRule: string;
  index: number;
  name: string;
}

const renderStemsBy = (target: string, stems: Stem[]) =>
  stems.filter(stem => stem.shortStem === target).map((stem, index) => {
    const desc = parseContent(stem.stemDesc);

    return <li key={index}>{desc}</li>;
  });

const renderAppropriateStems = (stems: Stem[]) => renderStemsBy('Appropriate Stems', stems);

const renderDualTextOnlyStems = (stems: Stem[]) =>
  renderStemsBy('Appropriate Stems for Dual-Text Stimuli', stems);

const renderFormatExample = (example: string, sectionName: string) => {
  let elements: JSX.Element | undefined;

  // If example data has 'NA' or 'Examples', ignore them temporarily.
  // If API changes how to present none for example, this block should change.
  if (example === 'NA') return;
  if (example === 'Examples') return;

  elements = (
    <Section name={sectionName}>
      <SubHeader text={'Format Example'} />
      <Passage>{parseContent(example)}</Passage>
    </Section>
  );

  return elements;
};

export const TaskModel = ({ task, stems, evidences, scoringRule, index, name }: TaskModelProps) => {
  const taskPrefix = `taskModel${index}`;
  const desc = parseContent(task.taskDesc);

  return (
    <Section name={task.taskName}>
      <MainHeader text={task.taskName} />
      <Section name={`${task.taskName}-Task Description`}>
        <SubHeader text={'Task Description'} />
        <Passage>{desc}</Passage>
      </Section>

      <Section name={`${task.taskName}-Target Evidence Statements`}>
        <SubHeader text={'Target Evidence Statements'} />
        <NumberList>{renderListItems(evidences)}</NumberList>
      </Section>

      <Section name={`${task.taskName}-Appropriate Stems`}>
        <SubHeader text={'Appropriate Stems'} />
        <NonBulletList>{renderAppropriateStems(stems)}</NonBulletList>
      </Section>

      <Section name={`${task.taskName}-Appropriate Stems for Dual-Text Stimuli Only`}>
        <SubHeader text={'Appropriate Stems for Dual-Text Stimuli Only'} />
        <NonBulletList>{renderDualTextOnlyStems(stems)}</NonBulletList>
      </Section>

      <Section name={`${task.taskName}-Scoring Rules`}>
        <SubHeader text={'Scoring Rules'} />
        <Passage>{scoringRule}</Passage>
      </Section>

      {renderFormatExample(task.examples, `${taskPrefix}-formatExample`)}
    </Section>
  );
};
