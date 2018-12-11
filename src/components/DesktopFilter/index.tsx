import React, { Fragment } from 'react';
import {
  AdvancedFilterCategoryModel,
  AdvancedFilter,
  FilterOptionModel,
  FilterType
} from '@osu-cass/sb-components';
import {
  createFilters,
  sanitizeParams,
  paramsFromFilter,
  paramsFromMobileFilter
} from '../FilterHelper';
import { CSEFilterOptions, CSEFilterParams } from '../../models/filter';
import { Colors, blueGradient, Styles, SizeBreaks, mediaQueries } from '../../constants';
import { Message } from '../Message';
import { FilterProps, CSEAdvancedFilterModels } from '../FilterProps';
import css from 'styled-jsx/css';
import { mediaQueryWrapper, DesktopBreakSize } from '../MediaQuery/MediaQueryWrapper';

export const globalFilterStyle = css`
  .filter-selection {
    margin-right: ${Styles.paddingUnit};
  }

  .tooltip-label {
    font-weight: bold;
  }

  .btn {
    border: 1px solid ${Colors.sbGray};
    border-radius: 3px;
    background-color: transparent;
    padding: 5px 7px;
    margin: 2px 0;
    font-size: 18px;
  }

  .btn.active {
    background-image: ${blueGradient};
    border-color: transparent;
    color: ${Colors.sbWhite};
  }

  .nested-btn-group {
    display: flex;
    align-items: flex-start;
  }

  .filter-btn-group {
    display: flex;
    flex-direction: column;
    padding-left: 4px;
    margin-left: 4px;
  }
`;

export const DesktopFilter: React.SFC<FilterProps> = ({ filters, onUpdate, reset }) => {
  const {
    subjectFilter,
    gradeFilter,
    claimFilter,
    targetFilter
  }: CSEAdvancedFilterModels = filters;

  const renderClaimFilter = (): JSX.Element | undefined => {
    let content: JSX.Element | undefined;
    if (claimFilter) {
      content = (
        <AdvancedFilter
          key={claimFilter.label}
          {...claimFilter}
          onFilterOptionSelect={(data?: FilterOptionModel) => {
            onUpdate(claimFilter.code, data);
          }}
        />
      );
    } else {
      content = <Message>Please select a Grade and Subject</Message>;
    }

    return content;
  };

  const renderTargetFilter = (): JSX.Element | undefined => {
    let content: JSX.Element | undefined;
    if (claimFilter && targetFilter) {
      content = (
        <AdvancedFilter
          key={targetFilter.label}
          {...targetFilter}
          onFilterOptionSelect={(data?: FilterOptionModel) => {
            onUpdate(targetFilter.code, data);
          }}
        />
      );
    } else if (claimFilter) {
      content = <Message>Please select a Claim.</Message>;
    }

    return content;
  };

  return (
    <Fragment>
      <div className="filter">
        <AdvancedFilter
          key={gradeFilter.label}
          {...gradeFilter}
          onFilterOptionSelect={(data?: FilterOptionModel) => {
            onUpdate(gradeFilter.code, data);
          }}
        />
        <AdvancedFilter
          key={subjectFilter.label}
          {...subjectFilter}
          onFilterOptionSelect={(data?: FilterOptionModel) => {
            onUpdate(subjectFilter.code, data);
          }}
        />
        {renderClaimFilter()}
        {renderTargetFilter()}
      </div>
      <div className="reset-container">
        <button className="btn" onClick={reset}>
          Reset
        </button>
      </div>
      <style jsx>{`
        .filter {
          display: flex;
          flex-wrap: wrap;
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

export const DesktopFilterWrapped = mediaQueryWrapper(DesktopFilter, DesktopBreakSize);
