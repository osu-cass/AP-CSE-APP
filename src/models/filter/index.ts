import { SearchBaseModel } from '@osu-cass/sb-components';

export interface CSEFilterOptions {
  grades: SearchBaseModel[];
  subjects: SearchBaseModel[];
  claims?: SearchBaseModel[];
  targets?: SearchBaseModel[];
}

export interface CSEFilterParams {
  grades: string[];
  subject?: string;
  claim?: string;
  target?: string;
}

export interface CSESearchQuery {
  grades?: string[];
  subject?: string;
  claim?: string;
  target?: string;
  search?: string;
}
