import { SearchBaseModel } from '@osu-cass/sb-components';
import { CSEFilterParams, CSEFilterOptions } from '../../models/filter';

export interface IFilterParams {
  testing?;
}

export interface FilterOptionsTargets {
  targetShortCodes: SearchBaseModel[];
}

export interface FilterOptionsClaims {
  claimNumbers: SearchBaseModel[];
}

export interface FilterOptionsGradesSubjects {
  subject: SearchBaseModel[];
  grades: SearchBaseModel[];
}

export interface IFilterClient {
  // noParams: () => Promise<FilterOptionsGradesSubjects | Error>;
  // subjectGrades: (subject: string, grades: string[]) => Promise<FilterOptionsClaims | Error>;
  // subjectGradeClaims: (
  //   subject: string,
  //   grades: string[],
  //   target: string
  // ) => Promise<FilterOptionsTargets | Error>;
  getFilterOptions: (
    params: CSEFilterParams,
    options: CSEFilterOptions
  ) => Promise<CSEFilterOptions | Error>;
}

export class FilterClient implements IFilterClient {
  private endpoint: string;

  constructor(endpoint?: string) {
    this.endpoint = endpoint || 'https://localhost:3000';
  }

  private async getResults<T>(url: string): Promise<T | Error> {
    try {
      const response = await window.fetch(url);

      return response.json();
    } catch (err) {
      return new Error(err);
    }
  }

  private async getSubjectGradeOptions(): Promise<FilterOptionsGradesSubjects | Error> {
    const url = `${this.endpoint}/api/filter`;

    return this.getResults<FilterOptionsGradesSubjects>(url);
  }

  private async getClaimOptions(
    subject: string,
    grades: string[]
  ): Promise<FilterOptionsClaims | Error> {
    const url = `${this.endpoint}/api/filter?subject=${subject}&grades=${grades.join(',')}`;
    try {
      const response = await window.fetch(url);

      return response.json();
    } catch (err) {
      return new Error(err);
    }
  }

  private async getTargetOptions(
    subject: string,
    grades: string[],
    claim: string
  ): Promise<FilterOptionsTargets | Error> {
    const gradeString = grades.join(',');
    const url =
      `${this.endpoint}/api/filter?` +
      `subject=${subject}&grades=${gradeString}&claimNumber=${claim}`;
    try {
      const response = await window.fetch(url);

      return response.json();
    } catch (err) {
      return new Error(err);
    }
  }

  async getFilterOptions(
    params: CSEFilterParams,
    options: CSEFilterOptions
  ): Promise<CSEFilterOptions | Error> {
    if (options)
  }
}
