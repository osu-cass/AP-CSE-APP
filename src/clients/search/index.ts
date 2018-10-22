import { IClaim } from '../../models/claim';

export interface ISearchClient {
  search: () => Promise<IClaim>;
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

  public async search(): Promise<IClaim> {
    return new Promise<IClaim>((resolve, reject) => {
      const claim: Partial<IClaim> = {
        title: 'test claim'
      };
      resolve(<IClaim>claim);
    });
  }
}
