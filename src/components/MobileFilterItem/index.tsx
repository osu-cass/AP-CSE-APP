import React from 'react';
import {
  AdvancedFilterProps,
  AdvancedFilterCategoryModel,
  FilterOptionModel,
  FilterType
} from '@osu-cass/sb-components';
import { Colors } from '../../constants';

export interface MobileFilterProps extends AdvancedFilterCategoryModel {
  onMobileSelect: (selectedOptions: string[], code: FilterType) => void;
}

export const MobileFilterItem: React.SFC<MobileFilterProps> = ({
  onMobileSelect,
  filterOptions,
  isMultiSelect,
  displayAllButton,
  label,
  code
}) => {
  const allFilterOptions = displayAllButton
    ? [
        { key: '', label: 'All', isSelected: filterOptions.every(fo => fo.isSelected) },
        ...filterOptions
      ]
    : filterOptions;
  const optionsJsx = allFilterOptions.map((fo, i) => (
    <option key={i} selected={fo.isSelected} value={fo.key} aria-selected={fo.isSelected}>
      {fo.label}
    </option>
  ));

  const onSelect = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const htmlOptions = event.currentTarget.selectedOptions;
    const selectedOptions: string[] = [];

    // for of for HTMLCollections aren't suppported everywhere...
    // tslint:disable-next-line:prefer-for-of
    for (let i = 0; i < htmlOptions.length; i++) {
      const htmlOption = htmlOptions.item(i);
      if (!htmlOption) {
        continue;
      }
      selectedOptions.push(htmlOption.value);
    }

    onMobileSelect(selectedOptions, code);
  };

  return (
    <div className="container">
      <b>{label}</b>
      <select multiple={isMultiSelect} onChange={onSelect}>
        {optionsJsx}
      </select>
      <style jsx>{`
        .container {
          padding: 10px 0;
          display: flex;
          flex-direction: column;
          align-items: stretch;
        }

        select {
          padding: 5px;
          border: 2px solid ${Colors.sbGray};
          text-align: center;
          background-color: #eee;
        }
      `}</style>
    </div>
  );
};
