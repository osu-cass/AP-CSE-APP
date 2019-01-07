import {
  AdvancedFilterCategoryModel,
  FilterType,
  FilterOptionModel
} from '@osu-cass/sb-components';

import { CSEFilterOptions, CSEFilterParams } from '../../models/filter';

export interface FilterComponentProps {
  options: CSEFilterOptions;
  params: CSEFilterParams;
  onUpdate: (filter: CSEFilterParams) => void;
  expanded: boolean;
  filterPT: () => void;
}

export interface FilterProps {
  filters: CSEAdvancedFilterModels;
  onUpdate: (code: FilterType, filter?: FilterOptionModel) => void;
  reset: () => void;
}

export interface MobileFilterProps {
  filters: CSEAdvancedFilterModels;
  onUpdate: (selectedOptions: string[], code: FilterType) => void;
  onSubjectUpdate: (code: FilterType, filter?: FilterOptionModel) => void;
  reset: () => void;
}

export interface CSEAdvancedFilterModels {
  gradeFilter: AdvancedFilterCategoryModel;
  subjectFilter: AdvancedFilterCategoryModel;
  claimFilter?: AdvancedFilterCategoryModel;
  targetFilter?: AdvancedFilterCategoryModel;
}
