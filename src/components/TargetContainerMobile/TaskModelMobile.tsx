import React from 'react';
import { ITaskModel } from '../../models/target';
import { Accordion } from '../Accordion';
import { parseContent } from '../MainContent/parseUtils';
export const TaskModelMobile: React.SFC<ITaskModel> = task => {
  let desc: React.ReactNode;
  let stim: React.ReactNode;
  let examples: React.ReactNode;

  if (task.taskDesc && task.taskDesc !== 'NA') {
    desc = (
      <Accordion title="Task Description" indentBody titleClass="accordion-content">
        <div className="accordion-content">{parseContent(task.taskDesc)}</div>
      </Accordion>
    );
  }
  if (task.stimulus && task.stimulus !== 'NA') {
    stim = (
      <Accordion title="Stimulus" indentBody titleClass="accordion-content">
        <div className="accordion-content">{parseContent(task.stimulus)}</div>
      </Accordion>
    );
  }
  if (task.examples && task.examples !== 'NA') {
    examples = (
      <Accordion title="Examples" indentBody titleClass="accordion-content">
        <div className="accordion-content">{parseContent(task.examples)}</div>
      </Accordion>
    );
  }

  return (
    <Accordion
      title={task.taskName}
      titleClass="accordion-title-l1"
      containerClass="accordion-container-l1"
      indentBody
    >
      {desc}
      {stim}
      {examples}
    </Accordion>
  );
};
