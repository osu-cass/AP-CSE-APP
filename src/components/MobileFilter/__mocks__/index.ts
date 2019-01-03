import { CSEAdvancedFilterModels } from '../../FilterProps';
import {
  FilterOptionModel,
  FilterType,
  AdvancedFilterCategoryModel
} from '@osu-cass/sb-components';

const gradeOptionModel: FilterOptionModel[] = [
  {
    label: 'Elementry',
    key: 'elm',
    isSelected: false
  },
  {
    label: 'Middle School',
    key: 'mid',
    isSelected: true
  },
  {
    label: 'High School',
    key: 'hs',
    isSelected: false
  }
];

const subjectOptionModel: FilterOptionModel[] = [
  {
    label: 'English Language Arts',
    key: 'ela',
    isSelected: false
  },
  {
    label: 'Mathematics',
    key: 'math',
    isSelected: true
  }
];

const claimOptionModel: FilterOptionModel[] = [
  {
    label: 'Claim 1',
    key: 'c1',
    isSelected: false
  },
  {
    label: 'Claim 2',
    key: 'c2',
    isSelected: true
  },
  {
    label: 'Claim 3',
    key: 'c3',
    isSelected: false
  }
];

const targetOptionModel: FilterOptionModel[] = [
  {
    label: 'Target 1',
    key: 't1',
    isSelected: false
  },
  {
    label: 'Target 2',
    key: 'T2',
    isSelected: true
  },
  {
    label: 'Target 3',
    key: 'T3',
    isSelected: false
  }
];

const gradeFilterCategory: AdvancedFilterCategoryModel = {
  code: FilterType.Grade,
  disabled: false,
  label: 'Grade',
  filterOptions: gradeOptionModel,
  isMultiSelect: true,
  displayAllButton: false
};

const subjectFilterCategory: AdvancedFilterCategoryModel = {
  code: FilterType.Grade,
  disabled: false,
  label: 'Subject',
  filterOptions: subjectOptionModel,
  isMultiSelect: true,
  displayAllButton: false
};

const claimFilterCategory: AdvancedFilterCategoryModel = {
  code: FilterType.Grade,
  disabled: false,
  label: 'Claim',
  filterOptions: claimOptionModel,
  isMultiSelect: true,
  displayAllButton: false
};

const targetFilterCategory: AdvancedFilterCategoryModel = {
  code: FilterType.Grade,
  disabled: false,
  label: 'Target',
  filterOptions: targetOptionModel,
  isMultiSelect: true,
  displayAllButton: false
};

export const filterModelGS: CSEAdvancedFilterModels = {
  gradeFilter: gradeFilterCategory,
  subjectFilter: subjectFilterCategory,
  claimFilter: undefined,
  targetFilter: undefined
};

export const filterModelGSC: CSEAdvancedFilterModels = {
  gradeFilter: gradeFilterCategory,
  subjectFilter: subjectFilterCategory,
  claimFilter: claimFilterCategory,
  targetFilter: undefined
};

export const filterModelCSCT: CSEAdvancedFilterModels = {
  gradeFilter: gradeFilterCategory,
  subjectFilter: subjectFilterCategory,
  claimFilter: claimFilterCategory,
  targetFilter: targetFilterCategory
};
