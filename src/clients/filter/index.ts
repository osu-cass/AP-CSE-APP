import { FilterType, SearchBaseModel } from '@osu-cass/sb-components';

import { CSEFilterOptions, CSEFilterParams } from '../../models/filter';

const { API_ENDPOINT } = process.env;

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
  getFilterOptions: (
    params: CSEFilterParams,
    change?: FilterType,
    options?: CSEFilterOptions
  ) => Promise<CSEFilterOptions | Error>;
}

/**
 * The Filter Client acts as an interface to the API from the client.
 *
 * @class FilterClient
 * @implements {IFilterClient}
 */
export class FilterClient implements IFilterClient {
  private baseUrl: string;

  constructor() {
    this.baseUrl = API_ENDPOINT || 'http://localhost:3000';
  }

  private async getSubjectGradeOptions(): Promise<FilterOptionsGradesSubjects> {
    const url = `${this.baseUrl}/api/filter`;
    const response = await window.fetch(url);

    return response.json();
  }

  private async getClaimOptions(subject: string, grades: string[]): Promise<FilterOptionsClaims> {
    const url = `${this.baseUrl}/api/filter?subject=${subject}&grades=${grades.join(',')}`;
    const response = await window.fetch(url);

    return response.json();
  }

  private async getTargetOptions(
    subject: string,
    grades: string[],
    claim: string
  ): Promise<FilterOptionsTargets> {
    const gradeString = grades.join(',');
    const url =
      `${this.baseUrl}/api/filter?` +
      `subject=${subject}&grades=${gradeString}&claimNumber=${claim}`;
    const response = await window.fetch(url);

    return response.json();
  }

  async getFilterOptions(
    params: CSEFilterParams,
    change?: FilterType,
    options?: CSEFilterOptions
  ): Promise<CSEFilterOptions | Error> {
    let newOptions: CSEFilterOptions;
    try {
      if (options) {
        newOptions = { ...options };
      } else {
        const result = await this.getSubjectGradeOptions();
        newOptions = this.combineSubjectGradeOptions(result);
      }

      // this should only happen if page was reloaded/navigated to
      if (!change) {
        const [c, t] = await Promise.all([this.updateClaims(params), this.updateTargets(params)]);
        newOptions.claims = c;
        newOptions.targets = t;
      }

      if (change === FilterType.Subject || change === FilterType.Grade) {
        newOptions.claims = await this.updateClaims(params);
        newOptions.targets = await this.updateTargets(params);
      }
      if (change === FilterType.Claim) {
        newOptions.targets = await this.updateTargets(params);
      }

      return newOptions;
    } catch (err) {
      return new Error(String(err));
    }
  }

  private combineSubjectGradeOptions(options: FilterOptionsGradesSubjects): CSEFilterOptions {
    return {
      subjects: options.subject,
      grades: options.grades
    };
  }

  private async updateClaims(params: CSEFilterParams): Promise<SearchBaseModel[] | undefined> {
    if (params.subject && params.grades && params.grades.length) {
      const result = await this.getClaimOptions(params.subject, params.grades);

      return result.claimNumbers;
    }

    return undefined;
  }

  private async updateTargets(params: CSEFilterParams): Promise<SearchBaseModel[] | undefined> {
    if (params.grades && params.grades.length && params.subject && params.claim) {
      const result = await this.getTargetOptions(params.subject, params.grades, params.claim);

      return result.targetShortCodes;
    }

    return undefined;
  }
}
