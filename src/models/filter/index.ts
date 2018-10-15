import { SearchBaseModel, SubjectModel } from '@osu-cass/sb-components';

/**
 * We're using this instead of ClaimModel from sb-components because
 * ClaimModel has targetCodes of type number[] | undefined
 *
 * @interface CSEClaimModel
 * @extends {SearchBaseModel}
 */
export interface CSEClaimModel extends SearchBaseModel {
  targetCodes?: string[];
}

export interface CSEFilterOptions {
  grades: SearchBaseModel[];
  subjects: SubjectModel[];
  claims: CSEClaimModel[];
  targets: SearchBaseModel[];
}

export interface CSEFilterParams {
  grades: string[];
  subject?: string;
  claim?: string;
  target?: string;
}
