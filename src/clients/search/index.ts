import { IClaim } from '../../models/claim';
import { ITargetParams } from '../target';

export interface ISearchParams extends ITargetParams {
  query?: string;
}
export interface ISearchClient {
  search: (params: ISearchParams) => Promise<IClaim | Error>;
}

/**
 * Cliuent class that cxommunicates with the cse api
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
      url = url.concat(url, `query=${query}&`);
    }
    if (subject) {
      url = url.concat(url, `subject=${subject}`);
    }
    if (grades) {
      url = url.concat(url, `&grades=${grades}`);
    }
    if (claim) {
      url = url.concat(url, `&claimNumber=${claim}`);
    }
    if (targetShortCode) {
      url = url.concat(url, `&targetShortCode=${targetShortCode}`);
    }

    return url;
  }

  public async search(params: ISearchParams): Promise<IClaim | Error> {
    const url: string = this.buildParams(params);
    let claim: IClaim;

    try {
      const response: Response = await window.fetch(url);
      claim = <IClaim>await response.json();
    } catch (err) {
      throw new Error('Search failed.');
    }

    return claim;
  }
}
