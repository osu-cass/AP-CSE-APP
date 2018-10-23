import React from 'react';
import { TaskModel } from './TaskModel';
import { parseContent } from './parseUtils';
import { MainHeader, NonBulletList, NumberList, Passage, Section, SubHeader } from './Components';
import { ITarget, IDOK, IStandards, IStem, ITaskModel } from '../../models/target';

export interface TargetLayout {
  [key: string]: string;
  clarification: string;
  standards: string;
  stimInfo: string;
  accessibility: string;
  evidence: string;
  taskModels: string;
  DOK: string;
}

export interface SubLayout {
  [key: string]: string;
  taskDesc: string;
  evidence: string;
  stem: string;
  rubrics: string;
}

export interface MainContentProps {
  target: ITarget;
  names: TargetLayout;
  subNames: SubLayout;
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
            color: #e00;
          }
        `}</style>
      </span>
    );
  }

  return code;
};

const sortStandards = (a: IStandards, b: IStandards) => {
  if (shortenStandardCode(a.stdCode) < shortenStandardCode(b.stdCode)) return -1;
  if (shortenStandardCode(a.stdCode) > b.stdCode) return 1;

  return 0;
};

const RenderStandards = (standards: IStandards[]) =>
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
  taskModels: ITaskModel[],
  stems: IStem[],
  evidence: string[],
  names: SubLayout,
  scoringRules?: string[]
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
        scoringRule={scoringRules ? scoringRules[index] : ''}
        index={index + 1}
        names={names}
      />
    );
  });

const RenderDOKs = (doks: IDOK[]) =>
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

export const MainContent: React.SFC<MainContentProps> = ({ target, names, subNames }) => {
  const clarification = parseContent(target.clarification);
  const stimPassage = parseContent(target.stimInfo);
  const stimTextComplexity = parseContent(target.dualText);
  const accessibility = parseContent(target.accessibility);

  target.standards.sort(sortStandards);

  return (
    <div className="container">
      <Section name={names.clarification}>
        <MainHeader text={names.clarification} />
        <Passage>{clarification}</Passage>
      </Section>

      <Section name={names.standards}>
        <MainHeader text="Standards" />
        <NonBulletList>{RenderStandards(target.standards)}</NonBulletList>
      </Section>

      <Section name={names.stimInfo}>
        <MainHeader text={names.stimInfo} />
        <Section name="stimuli-passage">
          <SubHeader text="Passage" />
          <Passage>{stimPassage}</Passage>
        </Section>
        <Section name="stimuli-complexity">
          <SubHeader text="Text Complexity" />
          <Passage>{stimTextComplexity}</Passage>
        </Section>
      </Section>

      <Section name={names.accessibility}>
        <MainHeader text={names.accessibility} />
        <Passage>{accessibility}</Passage>
      </Section>

      <Section name={names.evidence}>
        <MainHeader text={names.evidence} />
        <NumberList>{renderListItems(target.evidence)}</NumberList>
      </Section>

      {RenderTaskModels(target.taskModels, target.stem, target.evidence, subNames, target.rubrics)}

      <Section name={names.DOK}>
        <MainHeader text={names.DOK} />
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
          max-width: 100%;
        }
      `}</style>
    </div>
  );
};
