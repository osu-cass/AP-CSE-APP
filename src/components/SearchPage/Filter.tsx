import React from 'react';
import {
  AdvancedFilterCategoryModel,
  AdvancedFilter,
  FilterOptionModel,
  FilterType
} from '@osu-cass/sb-components';
import { CSEFilterOptions, CSEFilterModel, createFilters, updateFilters } from './FilterHelper';

export interface FilterProps {
  filterOptions: CSEFilterOptions;
  filter: CSEFilterModel;
  onUpdate: (filter: CSEFilterModel) => void;
}

export interface CSEAdvancedFilterModels {
  gradeFilter: AdvancedFilterCategoryModel;
  subjectFilter: AdvancedFilterCategoryModel;
  claimFilter: AdvancedFilterCategoryModel;
  targetFilter: AdvancedFilterCategoryModel;
}

export class Filter extends React.Component<FilterProps, CSEAdvancedFilterModels> {
  constructor(props: FilterProps) {
    super(props);

    const filters = createFilters(props.filterOptions);
    updateFilters(filters, props.filterOptions, props.filter);
  }

  onUpdate = (filterType: FilterType, data?: FilterOptionModel) => {};

  render() {
    const { gradeFilter, subjectFilter, claimFilter, targetFilter } = this.state;
    return (
      <div>
        <AdvancedFilter
          {...gradeFilter}
          onFilterOptionSelect={data => this.onUpdate(FilterType.Grade, data)}
        />
        <AdvancedFilter
          {...subjectFilter}
          onFilterOptionSelect={data => this.onUpdate(FilterType.Subject, data)}
        />
        <AdvancedFilter
          {...claimFilter}
          onFilterOptionSelect={data => this.onUpdate(FilterType.Claim, data)}
        />
        <AdvancedFilter
          {...targetFilter}
          onFilterOptionSelect={data => this.onUpdate(FilterType.Target, data)}
        />
      </div>
    );
  }
}
