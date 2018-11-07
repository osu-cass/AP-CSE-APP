import { IClaim } from '../../models/claim';
const { API_ENDPOINT } = process.env;

export interface ITargetParams {
  grades: string[];
  subject: string;
  claim: string;
  targetShortCode: string;
}

export interface ITargetClient {
  getTarget: (params: ITargetParams) => Promise<IClaim | Error>;
}

/**
 * Cliuent class that cxommunicates with the cse api
 * @class {SearchClient}
 */
export class TargetClient implements ITargetClient {
  private endpoint: string;

  constructor() {
    this.endpoint = API_ENDPOINT || 'https://localhost:3000';
  }

  private buildParams(params: ITargetParams): string {
    const { subject, grades, claim, targetShortCode } = params;
    let url = `${this.endpoint}/api/target/?`;

    if (subject) {
      url = url.concat(url, `/${subject}`);
    }
    if (grades) {
      url = url.concat(url, `/${grades}`);
    }
    if (claim) {
      url = url.concat(url, `/${claim}`);
    }
    if (targetShortCode) {
      url = url.concat(url, `/${targetShortCode}`);
    }

    return url;
  }

  public async getTarget(params: ITargetParams): Promise<IClaim | Error> {
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
