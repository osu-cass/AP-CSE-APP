import React, { Fragment } from 'react';
import { FilterProps, CSEAdvancedFilterModels, FilterComponentProps } from '../FilterProps';
import {
  sanitizeParams,
  createFilters,
  paramsFromFilter,
  paramsFromMobileFilter
} from '../FilterHelper';
import { FilterOptionModel, FilterType } from '@osu-cass/sb-components';
import { MobileFilter, MobileFilterWrapped } from '../MobileFilter';
import { DesktopFilterWrapped } from '../DesktopFilter';
import { FilterContainer } from '../FilterContainer';

export const FilterComponent: React.SFC<FilterComponentProps> = ({
  options,
  params,
  onUpdate,
  expanded
}) => {
  const cleanParams = sanitizeParams(params, options);
  const filters: CSEAdvancedFilterModels = createFilters(options, cleanParams);
  const sortHelper = (filter: FilterOptionModel[]) => {
    filter.sort((a, b) => {
      let x: string | number = a.label.toLowerCase();
      let y: string | number = b.label.toLowerCase();
      if (a.label.includes('Target ')) {
        x = parseFloat(
          a.label
            .split(':')[0]
            .split('Target ')[1]
            .replace('a', '.1')
        );
        y = parseFloat(
          b.label
            .split(':')[0]
            .split('Target ')[1]
            .replace('b', '.2')
        );
      }
      if (x < y) {
        return -1;
      }
      if (x > y) {
        return 1;
      }

      return 0;
    });
  };

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

  const reset = () => {
    onUpdate({ grades: [], subject: undefined, claim: undefined, target: undefined });
  };

  const content = (
    <Fragment>
      <MobileFilterWrapped
        filters={filters}
        onUpdate={onUpdateMobile}
        onSubjectUpdate={onUpdateDesktop}
        reset={reset}
      />
      <DesktopFilterWrapped filters={filters} onUpdate={onUpdateDesktop} reset={reset} />
    </Fragment>
  );

  return (
    <Fragment>
      <FilterContainer expanded={expanded}>{content}</FilterContainer>
    </Fragment>
  );
};
