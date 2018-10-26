import React from 'react';
import { renderListItems, SubLayout } from './index';
import { parseContent } from './parseUtils';
import { IStem, ITaskModel } from '../../models/target/index';
import { MainHeader, NonBulletList, NumberList, Passage, Section, SubHeader } from './Components';

export interface TaskModelProps {
  task: ITaskModel;
  stems: IStem[];
  evidences: string[];
  scoringRule: string;
  index: number;
  names: SubLayout;
}

const renderStemsBy = (target: string, stems: IStem[]) =>
  stems.filter(stem => stem.shortStem === target).map((stem, index) => {
    const desc = parseContent(stem.stemDesc);

    return <li key={index}>{desc}</li>;
  });

const renderAppropriateStems = (stems: IStem[]) => renderStemsBy('Appropriate Stems', stems);

const renderDualTextOnlyStems = (stems: IStem[]) =>
  renderStemsBy('Appropriate Stems for Dual-Text Stimuli', stems);

const renderFormatExample = (example: string | undefined, sectionName: string) => {
  // If example data has 'NA' or 'Examples', ignore them temporarily.
  // If API changes how to present none for example, this block should change.
  if (example !== 'NA' && example !== 'Examples') {
    return (
      <Section name={sectionName}>
        <SubHeader text={'Format Example'} />
        <Passage>{parseContent(example)}</Passage>
      </Section>
    );
  }
};

export const TaskModel = ({
  task,
  stems,
  evidences,
  scoringRule,
  index,
  names
}: TaskModelProps) => {
  const taskPrefix = `taskModel${index}`;
  const desc = parseContent(task.taskDesc ? task.taskDesc : '');

  return (
    <Section name={task.taskName}>
      <MainHeader text={task.taskName} />
      <Section name={`${task.taskName}-${names.taskDesc}`}>
        <SubHeader text={names.taskDesc} />
        <Passage>{desc}</Passage>
      </Section>

      <Section name={`${task.taskName}-${names.evidence}`}>
        <SubHeader text={names.evidence} />
        <NumberList>{renderListItems(evidences)}</NumberList>
      </Section>

      <Section name={`${task.taskName}-${names.stem}`}>
        <SubHeader text={names.stem} />
        <NonBulletList>{renderAppropriateStems(stems)}</NonBulletList>
      </Section>

      <Section name={`${task.taskName}-Appropriate Stems for Dual-Text Stimuli Only`}>
        <SubHeader text={'Appropriate Stems for Dual-Text Stimuli Only'} />
        <NonBulletList>{renderDualTextOnlyStems(stems)}</NonBulletList>
      </Section>

      <Section name={`${task.taskName}-${names.rubrics}`}>
        <SubHeader text={names.rubrics} />
        <Passage>{scoringRule}</Passage>
      </Section>

      {renderFormatExample(task.examples, `${taskPrefix}-formatExample`)}
    </Section>
  );
};
