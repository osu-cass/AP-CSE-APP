import { SearchBaseModel, FilterType } from '@osu-cass/sb-components';
import { CSEFilterParams, CSEFilterOptions } from '../../models/filter';

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
    change: FilterType,
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

  constructor(baseUrl?: string) {
    this.baseUrl = baseUrl || 'http://localhost:3000';
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
    change: FilterType,
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

      if (change === FilterType.Subject) {
        newOptions.claims = await this.updateClaims(params);
      } else if (change === FilterType.Claim) {
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
    if (params.subject) {
      const result = await this.getClaimOptions(params.subject, params.grades);

      return result.claimNumbers;
    }

    return undefined;
  }

  private async updateTargets(params: CSEFilterParams): Promise<SearchBaseModel[] | undefined> {
    if (params.subject && params.claim) {
      const result = await this.getTargetOptions(params.subject, params.grades, params.claim);

      return result.targetShortCodes;
    }

    return undefined;
  }
}
