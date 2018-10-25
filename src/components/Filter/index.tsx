import React, { Fragment } from 'react';
import {
  AdvancedFilterCategoryModel,
  AdvancedFilter,
  FilterOptionModel,
  FilterType
} from '@osu-cass/sb-components';
import { createFilters, sanitizeParams, paramsFromFilter } from './FilterHelper';
import { CSEFilterOptions, CSEFilterParams } from '../../models/filter';
import { Colors, blueGradient, Styles } from '../../constants';

const globalFilterStyle = `
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
    border-left: 1px solid gray;
    padding-left: 4px;
    margin-left: 4px;
  }
`;

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
    const newParams = paramsFromFilter(cleanParams, filterType, data);
    onUpdate(newParams);
  };

  const reset = () => {
    onUpdate({ grades: [], subject: undefined, claim: undefined, target: undefined });
  };

  const filterJsx = [gradeFilter, subjectFilter, claimFilter, targetFilter].map(
    (f, i) =>
      f ? (
        <AdvancedFilter
          key={i}
          {...f}
          onFilterOptionSelect={data => {
            callback(f.code, data);
          }}
        />
      ) : (
        undefined
      )
  );

  return (
    <Fragment>
      <div className="filter">{filterJsx}</div>
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
