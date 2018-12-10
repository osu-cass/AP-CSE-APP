import { IClaim } from '../../models/claim';
const { API_ENDPOINT } = process.env;

export interface ITargetParams {
  targetShortCode: string;
}

export interface ITargetClient {
  getTarget: (params: ITargetParams) => Promise<IClaim>;
}

/**
 * Client class that communicates with the cse api
 * @class {SearchClient}
 */
export class TargetClient implements ITargetClient {
  private endpoint: string;

  constructor() {
    this.endpoint = API_ENDPOINT || 'http://localhost:3000';
  }

  private buildParams(params: ITargetParams): string {
    const { targetShortCode } = params;
    let url = `${this.endpoint}/api/target`;

    if (targetShortCode) {
      url = url.concat(`/${targetShortCode}`);
    }

    return url;
  }

  public async getTarget(params: ITargetParams): Promise<IClaim> {
    const url: string = this.buildParams(params);
    let claim: IClaim;

    try {
      const response: Response = await window.fetch(url);
      claim = <IClaim>await response.json();
    } catch (err) {
      throw new Error('Failed to fetch target.');
    }

    return claim;
  }
}
