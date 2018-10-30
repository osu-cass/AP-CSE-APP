import { IClaim } from '../../models/claim';
import { ITargetParams } from '../target';
import { CSEFilterParams, CSESearchQuery } from '../../models/filter';
import { SearchBaseModel } from '@osu-cass/sb-components';

export interface ISearchClient {
  search: (params: CSESearchQuery) => Promise<IClaim[] | Error>;
}

/**
 * Client class that cxommunicates with the cse api
 * @class {SearchClient}
 */
export class SearchClient implements ISearchClient {
  private endpoint: string;

  constructor() {
    this.endpoint = 'http://localhost:3000';
  }

  private buildParams(params: CSESearchQuery): string {
    const { search, subject, grades, claim, target } = params;
    let url = `${this.endpoint}/api/search/?`;

    if (search) {
      url = url.concat(`query=${search}&`);
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
    if (target) {
      url = url.concat(`&targetShortCode=${target}`);
    }

    return url;
  }

  public async search(params: CSESearchQuery): Promise<IClaim[] | Error> {
    const url: string = this.buildParams(params);

    try {
      const response = await window.fetch(url);

      return (await response.json()) as IClaim[];
    } catch (err) {
      return new Error('Search failed.');
    }
  }
}
