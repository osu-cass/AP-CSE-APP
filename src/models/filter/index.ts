import { SearchBaseModel, FilterOptionModel } from '@osu-cass/sb-components';

export const performanceOptions: FilterOptionModel[] = [
  { key: 'PT', label: 'Yes', isSelected: false },
  { key: 'PT', label: 'No', isSelected: true }
];
export interface CSEFilterOptions {
  grades: SearchBaseModel[];
  subjects: SearchBaseModel[];
  claims?: SearchBaseModel[];
  targets?: SearchBaseModel[];
  performance: SearchBaseModel[];
}

export interface CSEFilterParams {
  grades: string[];
  subject?: string;
  claim?: string;
  target?: string;
  performance?: string;
}

export interface CSESearchQuery {
  grades?: string[];
  subject?: string;
  claim?: string;
  target?: string;
  search?: string;
}
