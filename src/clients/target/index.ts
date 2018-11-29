import { IClaim } from '../../models/claim';
const { API_ENDPOINT } = process.env;

export interface ITargetParams {
  targetShortCode: string;
}

export interface ITargetClient {
<<<<<<< HEAD
  getTarget: (params: ITargetParams) => Promise<IClaim>;
=======
  buildParams: (params: ITargetParams) => string;
  getTarget: (params: ITargetParams) => Promise<IClaim | Error>;
>>>>>>> dev
}

function buildParams(params: ITargetParams): string {
  const { targetShortCode } = params;
  let url = `${API_ENDPOINT || 'http://localhost:3000'}/api/target`;

  if (targetShortCode) {
    url = url.concat(`/${targetShortCode}`);
  }

  return url;
}

async function getTarget(params: ITargetParams): Promise<IClaim | Error> {
  const url: string = buildParams(params);
  let claim: IClaim;

  try {
    const response: Response = await window.fetch(url);
    claim = <IClaim>await response.json();
  } catch (err) {
    throw new Error('Failed to fetch target.');
  }

<<<<<<< HEAD
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
=======
  return claim;
>>>>>>> dev
}

export const TargetClient: ITargetClient = {
  buildParams,
  getTarget
};
