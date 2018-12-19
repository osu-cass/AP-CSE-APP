import React, { Fragment } from 'react';
import { FilterProps, CSEAdvancedFilterModels, FilterComponentProps } from '../FilterProps';
import {
  sanitizeParams,
  createFilters,
  paramsFromFilter,
  paramsFromMobileFilter
} from '../FilterHelper';
import { sortHelper } from './sortHelper';
import { FilterOptionModel, FilterType } from '@osu-cass/sb-components';
import { MobileFilter, MobileFilterWrapped } from '../MobileFilter';
import { ToggleBtn, ToggleBtnProps } from '../ToggleBtn';
import { DesktopFilterWrapped } from '../DesktopFilter';
import { FilterContainer } from '../FilterContainer';
import { performanceOptions } from '../../models/filter';

export const FilterComponent: React.SFC<FilterComponentProps> = ({
  options,
  params,
  onUpdate,
  expanded,
  filterPT
}) => {
  const cleanParams = sanitizeParams(params, options);
  const filters: CSEAdvancedFilterModels = createFilters(options, cleanParams);

  const sortFilters = () => {
    if (filters.claimFilter) {
      sortHelper(filters.claimFilter.filterOptions);
    }
    if (filters.targetFilter) {
      sortHelper(filters.targetFilter.filterOptions);
    }
  };
  sortFilters();

  const onUpdateDesktop = (filterType: FilterType, data?: FilterOptionModel) => {
    const newParams = paramsFromFilter(cleanParams, filterType, data);
    onUpdate(newParams);
  };

  const onUpdateMobile = (selectedOptions: string[], code: FilterType) => {
    const newParams = paramsFromMobileFilter(cleanParams, selectedOptions, code);
    onUpdate(newParams);
  };
  const clearPTFilter = () => {
    onUpdateDesktop(FilterType.Performance, performanceOptions[0]);
  };
  const toggleProps: ToggleBtnProps = {
    toggled: false,
    filter: filterPT,
    unFilter: clearPTFilter
  };

  const reset = () => {
    onUpdate({ grades: [], subject: undefined, claim: undefined, target: undefined });
    toggleProps.toggled = false;
  };

  const ptFilter = (
    <div id="pt-filter">
      <ToggleBtn {...toggleProps} />
    </div>
  );
  const content = (
    <Fragment>
      <MobileFilterWrapped
        filters={filters}
        onUpdate={onUpdateMobile}
        onSubjectUpdate={onUpdateDesktop}
        reset={reset}
      />
      <DesktopFilterWrapped filters={filters} onUpdate={onUpdateDesktop} reset={reset} />
      {ptFilter}
    </Fragment>
  );

  return (
    <Fragment>
      <FilterContainer expanded={expanded}>{content}</FilterContainer>
    </Fragment>
  );
};
