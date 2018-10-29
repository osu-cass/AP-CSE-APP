import { IClaim } from '../../models/claim';
import { ITargetParams } from '../target';
import { CSEFilterParams } from '../../models/filter';
import { SearchBaseModel } from '@osu-cass/sb-components';

export interface ISearchParams extends ITargetParams {
  query?: string;
}
export interface ISearchClient {
  search: (params: ISearchParams) => Promise<IClaim[] | Error>;
}

export function paramsToSearchQuery(search: string, params: CSEFilterParams): ISearchParams {
  return {
    query: search,
    grades: params.grades,
    subject: params.subject || '',
    claim: params.claim || '',
    targetShortCode: params.target || ''
  };
}

/**
 * Client class that cxommunicates with the cse api
 * @class {SearchClient}
 */
export class SearchClient implements ISearchClient {
  private endpoint: string;

  constructor() {
    this.endpoint = 'https://localhost:3000';
  }

  private buildParams(params: ISearchParams): string {
    const { query, subject, grades, claim, targetShortCode } = params;
    let url = `${this.endpoint}/api/search/?`;

    if (query) {
      url = url.concat(`query=${query}&`);
    }
    if (subject) {
      url = url.concat(`subject=${subject}`);
    }
    if (grades) {
      url = url.concat(`&grades=${grades}`);
    }
    if (claim) {
      url = url.concat(`&claimNumber=${claim}`);
    }
    if (targetShortCode) {
      url = url.concat(`&targetShortCode=${targetShortCode}`);
    }

    return url;
  }

  public async search(params: ISearchParams): Promise<IClaim[] | Error> {
    const url: string = this.buildParams(params);

    try {
      const response = await window.fetch(url);

      return await response.json();
    } catch (err) {
      return new Error('Search failed.');
    }
  }
}
