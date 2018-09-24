import React, { ReactElement, ReactNode } from 'react';
import { ITarget } from '../../models/target';
import { Accordion } from '../Accordion';

function listify(list: ReactNode[], ordered = false) {
  const elements = list.map((l, i) => <li key={i}>{l}</li>);

  return ordered ? (
    <ol className="accordion-content no-whitespace-list">{elements}</ol>
  ) : (
    <ul className="accordion-content no-whitespace-list">{elements}</ul>
  );
}

export const TargetContainerMobile: React.SFC<ITarget> = (props: ITarget) => {
  const standardsJsx = props.standards.map(s => (
    <Accordion key={s.stdCode} title={s.stdCode} indentBody titleClass="accordion-content">
      <div className="accordion-content">{s.stdDesc}</div>
    </Accordion>
  ));

  const taskModelsJsx = props.taskModels.map((task, idx) => {
    let desc: ReactNode;
    let stim: ReactNode;
    let examples: ReactNode;

    if (task.taskDesc && task.taskDesc !== 'NA') {
      desc = (
        <Accordion title="Task Description" indentBody titleClass="accordion-content">
          <div className="accordion-content">{task.taskDesc}</div>
        </Accordion>
      );
    }
    if (task.stimulus && task.stimulus !== 'NA') {
      stim = (
        <Accordion title="Stimulus" indentBody titleClass="accordion-content">
          <div className="accordion-content">{task.stimulus}</div>
        </Accordion>
      );
    }
    if (task.examples && task.examples !== 'NA') {
      examples = (
        <Accordion title="Examples" indentBody titleClass="accordion-content">
          <div className="accordion-content">{task.examples}</div>
        </Accordion>
      );
    }

    return (
      <Accordion
        key={idx}
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
  });

  return (
    <div>
      <Accordion
        title="Item Specifications"
        titleClass="accordion-title-l1"
        containerClass="accordion-container-l1"
        indentBody
      >
        <Accordion title="Clarifications" titleClass="accordion-content" indentBody>
          <div className="accordion-content">{props.clarification}</div>
        </Accordion>
        <Accordion
          title="Standards"
          titleClass="accordion-content"
          content={standardsJsx}
          indentBody
        />
        <Accordion title="Depth of Knowledge" indentBody titleClass="accordion-content">
          {listify(props.DOK.map(d => d.dokDesc))}
        </Accordion>
        <Accordion title="Evidence Required" titleClass="accordion-content" indentBody>
          {listify(props.evidence, true)}
        </Accordion>
      </Accordion>
      {taskModelsJsx}

      <style jsx global>{`
        .accordion-title-l1 {
          font-size: 1.15em;
        }
        .accordion-container-l1 {
          border-bottom: 1px solid #006298;
          padding: 10px 0;
        }
        .accordion-content {
          padding-top: 10px;
        }
        .no-whitespace-list {
          margin: 0;
          padding-left: 1em;
        }
      `}</style>
    </div>
  );
};
