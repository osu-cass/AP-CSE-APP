import React, { Fragment } from 'react';
import { FilterProps, CSEAdvancedFilterModels, FilterComponentProps } from '../FilterProps';
import {
  sanitizeParams,
  createFilters,
  paramsFromFilter,
  paramsFromMobileFilter
} from '../FilterHelper';
import { FilterOptionModel, FilterType, AdvancedFilter } from '@osu-cass/sb-components';
import { MobileFilter, MobileFilterWrapped } from '../MobileFilter';
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
    performanceOptions[0].isSelected = false;
    performanceOptions[1].isSelected = true;
  };

  const ptFilter = (
    <div id="pt-filter">
      <AdvancedFilter
        label={'Show Performance Task Items Only?'}
        isMultiSelect={false}
        displayAllButton={false}
        disabled={false}
        filterOptions={performanceOptions}
        code={FilterType.Performance}
        onFilterOptionSelect={(data?: FilterOptionModel) => {
          if (filterPT) {
            performanceOptions.forEach(o => (o.isSelected = !o.isSelected));
            if (performanceOptions[0].isSelected) {
              filterPT();
            } else {
              onUpdateDesktop(FilterType.Performance, data);
            }
          }
        }}
      />
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
