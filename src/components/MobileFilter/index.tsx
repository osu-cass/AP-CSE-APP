import React, { Fragment } from 'react';
import { FilterOptionModel, AdvancedFilter, FilterType } from '@osu-cass/sb-components';

import { Message } from '../Message';
import { globalFilterStyle } from '../DesktopFilter';
import { MobileAdvancedFilter } from '../MobileAdvancedFilter';
import { MobileBreakSize, mediaQueryWrapper } from '../MediaQueryWrapper';
import { MobileFilterProps, CSEAdvancedFilterModels } from '../FilterProps';

// tslint:disable
export const MobileFilter: React.SFC<MobileFilterProps> = ({
  filters,
  onUpdate,
  onSubjectUpdate,
  reset
}) => {
  const {
    gradeFilter,
    subjectFilter,
    claimFilter,
    targetFilter
  }: CSEAdvancedFilterModels = filters;

  const update = (selectedOptions: string[], code: FilterType) => {
    if (selectedOptions.includes('All')) {
      onUpdate([], code);
    } else {
      onUpdate(selectedOptions, code);
    }
  };

  const renderClaimFilter = (): JSX.Element | undefined => {
    let content: JSX.Element | undefined;
    if (claimFilter) {
      const filterOptions: FilterOptionModel[] = [{ label: 'All', key: 'All', isSelected: false }];
      const newFilter = {
        filterOptions: filterOptions.concat(claimFilter.filterOptions),
        ...claimFilter
      };
      content = (
        <MobileAdvancedFilter
          key={newFilter.label}
          {...newFilter}
          onMobileSelect={update}
          isMultiSelect={false}
        />
      );
    } else {
      content = <Message>Please Select a Grade and Subject</Message>;
    }

    return content;
  };

  const renderTargetFilter = (): JSX.Element | undefined => {
    let content: JSX.Element;
    if (claimFilter && targetFilter) {
      let filterOptions: FilterOptionModel[] = [{ label: 'All', key: 'All', isSelected: false }];
      const newFilter = {
        filterOptions: filterOptions.concat(targetFilter.filterOptions),
        ...targetFilter
      };

      content = (
        <MobileAdvancedFilter
          key={newFilter.label}
          {...newFilter}
          onMobileSelect={update}
          isMultiSelect={false}
        />
      );
    } else {
      content = <Message>Please Select a Claim.</Message>;
    }

    return content;
  };

  return (
    <Fragment>
      <div className="mobileFilter">
        <AdvancedFilter
          key={subjectFilter.label}
          {...subjectFilter}
          onFilterOptionSelect={(data?: FilterOptionModel) => {
            onSubjectUpdate(subjectFilter.code, data);
          }}
          isMultiSelect={false}
        />
        <MobileAdvancedFilter key={gradeFilter.label} {...gradeFilter} onMobileSelect={onUpdate} />
        {renderClaimFilter()}
        {renderTargetFilter()}
        <div className="reset-container">
          <button className="btn" onClick={reset}>
            Reset
          </button>
        </div>
      </div>
      <style jsx>{`
        .mobileFilter {
          flex-direction: column;
        }

        .reset-container {
          text-align: right;
        }
      `}</style>
      <style jsx global>
        {globalFilterStyle}
      </style>
    </Fragment>
  );
};

export const MobileFilterWrapped = mediaQueryWrapper(MobileFilter, MobileBreakSize);
