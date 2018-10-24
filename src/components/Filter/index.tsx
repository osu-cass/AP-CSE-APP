import React, { Fragment } from 'react';
import {
  AdvancedFilterCategoryModel,
  AdvancedFilter,
  FilterOptionModel,
  FilterType
} from '@osu-cass/sb-components';
import { createFilters, sanitizeParams, paramsFromFilter } from './FilterHelper';
import { CSEFilterOptions, CSEFilterParams } from '../../models/filter';

export interface FilterProps {
  options: CSEFilterOptions;
  params: CSEFilterParams;
  onUpdate: (filter: CSEFilterParams) => void;
}

export interface CSEAdvancedFilterModels {
  gradeFilter: AdvancedFilterCategoryModel;
  subjectFilter: AdvancedFilterCategoryModel;
  claimFilter?: AdvancedFilterCategoryModel;
  targetFilter?: AdvancedFilterCategoryModel;
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

  const filterJsx = [gradeFilter, subjectFilter, claimFilter, targetFilter].map(
    f =>
      f ? (
        <AdvancedFilter
          {...f}
          onFilterOptionSelect={data => {
            callback(f.code, data);
          }}
        />
      ) : (
        undefined
      )
  );

  return <Fragment>{filterJsx}</Fragment>;
};
