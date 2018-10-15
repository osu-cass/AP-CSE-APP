import React, { Fragment } from 'react';
import {
  AdvancedFilterCategoryModel,
  AdvancedFilter,
  FilterOptionModel,
  FilterType
} from '@osu-cass/sb-components';
import {
  CSEFilterOptions,
  CSEFilterParams,
  createFilters,
  sanitizeParams,
  paramsFromFilter
} from './FilterHelper';

export interface FilterProps {
  options: CSEFilterOptions;
  params: CSEFilterParams;
  onUpdate: (filter: CSEFilterParams) => void;
}

export interface CSEAdvancedFilterModels {
  gradeFilter: AdvancedFilterCategoryModel;
  subjectFilter: AdvancedFilterCategoryModel;
  claimFilter: AdvancedFilterCategoryModel;
  targetFilter: AdvancedFilterCategoryModel;
}

export const Filter: React.SFC<FilterProps> = ({ options, params, onUpdate }) => {
  const cleanParams = sanitizeParams(params, options);
  const { gradeFilter, subjectFilter, claimFilter, targetFilter } = createFilters(
    options,
    cleanParams
  );

  const callback = (filterType: FilterType, data?: FilterOptionModel) => {
    let newParams = paramsFromFilter(cleanParams, filterType, data);
    newParams = sanitizeParams(newParams, options);
    onUpdate(newParams);
  };

  return (
    <Fragment>
      <AdvancedFilter
        {...gradeFilter}
        onFilterOptionSelect={data => {
          callback(FilterType.Grade, data);
        }}
      />
      <AdvancedFilter
        {...subjectFilter}
        onFilterOptionSelect={data => {
          callback(FilterType.Subject, data);
        }}
      />
      <AdvancedFilter
        {...claimFilter}
        onFilterOptionSelect={data => {
          callback(FilterType.Claim, data);
        }}
      />
      <AdvancedFilter
        {...targetFilter}
        onFilterOptionSelect={data => {
          callback(FilterType.Target, data);
        }}
      />
    </Fragment>
  );
};
