import css from 'styled-jsx/css';
import React, { Fragment } from 'react';
import { AdvancedFilter, FilterOptionModel } from '@osu-cass/sb-components';

import { Message } from '../Message';
import { blueGradient, Colors, Styles } from '../../constants/style';
import { CSEAdvancedFilterModels, FilterProps } from '../FilterProps';
import { DesktopBreakSize, mediaQueryWrapper } from '../MediaQueryWrapper';

export const globalFilterStyle = css`
  .filter-selection {
    margin-right: ${Styles.paddingUnit};
  }
  #target-filter {
    max-width: 25vw;
  }
  .tooltip-label {
    font-weight: bold;
  }

  div#claim-filter div button {
    text-align: left;
  }
  div#target-filter div button {
    text-align: left;
  }
  .btn {
    border: 1px solid ${Colors.sbGray};
    border-radius: 3px;
    background-color: transparent;
    padding: 5px 7px;
    margin: 2px 0;
    font-size: 1.125em;
  }

  .btn.active {
    background-image: ${blueGradient};
    border-color: transparent;
    color: ${Colors.sbWhite};
  }
  #pt-filter .nested-btn-group div {
    max-width: 20%;
    display: inline-flex;
    flex-direction: row;
    align-items: center;
  }
  #pt-filter .nested-btn-group button {
    margin-right: 5px;
    min-width: 48.75px;
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
// tslint:disable: max-func-body-length
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
      content = <Message>Select a Grade and Subject first.</Message>;
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
      content = <Message>Select a Grade, Subject, and Claim first</Message>;
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
