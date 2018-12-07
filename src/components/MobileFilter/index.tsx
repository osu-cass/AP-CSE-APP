import React, { Fragment } from 'react';
import { MobileFilterProps, CSEAdvancedFilterModels } from '../FilterProps';
import { MobileAdvancedFilter } from '../MobileAdvancedFilter';
import { Message } from '../FilterMessage';
import {
  sanitizeParams,
  createFilters,
  paramsFromMobileFilter,
  paramsFromFilter
} from '../FilterHelper';
import {
  FilterType,
  onFilterSelect,
  FilterOptionModel,
  AdvancedFilter
} from '@osu-cass/sb-components';
import { MobileBreakSize, mediaQueryWrapper } from '../MediaQuery/MediaQueryWrapper';

export const MobileFilter: React.SFC<MobileFilterProps> = ({ filters, onUpdate, reset }) => {
  const {
    gradeFilter,
    subjectFilter,
    claimFilter,
    targetFilter
  }: CSEAdvancedFilterModels = filters;

  const onSubjectUpdate = (data?: FilterOptionModel) => {
    if (data) {
      onUpdate([data.key], subjectFilter.code);
    }
  };

  const renderClaimFilter = (): JSX.Element | undefined => {
    let content: JSX.Element | undefined;
    if (claimFilter) {
      content = (
        <MobileAdvancedFilter
          key={claimFilter.label}
          {...claimFilter}
          onMobileSelect={onUpdate}
          isMultiSelect={false}
        />
      );
    } else {
      content = <Message>Please Select a Grade and Subject</Message>;
    }

    return content;
  };

  const renderTargetFilter = (): JSX.Element | undefined => {
    let content: JSX.Element | undefined;
    if (claimFilter && targetFilter) {
      content = (
        <MobileAdvancedFilter
          key={targetFilter.label}
          {...targetFilter}
          onMobileSelect={onUpdate}
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
          onFilterOptionSelect={onSubjectUpdate}
          isMultiSelect={false}
        />
        <MobileAdvancedFilter
          key={gradeFilter.label}
          {...gradeFilter}
          isMultiSelect={true}
          onMobileSelect={onUpdate}
        />
        {renderClaimFilter()}
        {renderTargetFilter()}
        <div className="reset-container">
          <button className="btn" onClick={reset}>
            Reset
          </button>
        </div>
      </div>
      <style jsx>{`
        .filter {
          display: flex;
          flex-wrap: wrap;
        }

        .mobileFilter {
          flex-direction: column;
        }

        .reset-container {
          text-align: right;
        }
      `}</style>
    </Fragment>
  );
};

export const MobileFilterWrapped = mediaQueryWrapper(MobileFilter, MobileBreakSize);
