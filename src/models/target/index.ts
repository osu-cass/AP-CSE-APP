// tslint:disable:no-reserved-keywords
export interface ITaskModel {
  taskName: string;
  taskDesc?: string;
  stimulus?: string;
  examples?: string[];
  stem?: IStem;
  relatedEvidence?: string[];
}

export interface IStem {
  stemDesc: string;
  shortStem: string;
}

export interface IStandards {
  stdCode: string;
  stdDesc: string;
}

export interface IEvidence {
  evTitle: string;
  evDesc: string;
}

export interface IDOK {
  dokCode: string;
  dokDesc: string;
  dokShort: string;
}
export interface ITarget {
  interactionType: string;
  title: string;
  shortCode: string;
  taskModels: ITaskModel[];
  stem: IStem[] | undefined;
  standards: IStandards[] | undefined;
  evidence: IEvidence[] | undefined;
  rubrics: string[];
  clarification: string;
  heading: string;
  accessibility: string;
  description: string;
  tools: string;
  devNotes: string;
  stimInfo: string;
  dualText: string;
  complexity: string;
  DOK: IDOK[];
  vocab?: string;
}
