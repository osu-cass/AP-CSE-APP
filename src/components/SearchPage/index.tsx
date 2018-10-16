import React from 'react';
import { SearchBar } from '../SearchBar';
import { FilterItemList } from '../FilterItemList';
import { Filter } from '../Filter';
import { CSEFilterOptions, CSEFilterParams } from '../../models/filter';
import { FilterItemProps } from '../FilterItem';
import { GenericPage } from '../GenericPage';

export interface SearchPageProps {
  filterOptions: CSEFilterOptions;
  searchApi: (search: string) => FilterItemProps[];
}

export interface SearchPageState {
  filterParams: CSEFilterParams;
  results: FilterItemProps[];
}

/**
 * Search page react component. Handles text searching and filtering
 *
 * @export
 * @class SearchPage
 * @extends {React.Component<SearchPageProps, SearchPageState>}
 */
export class SearchPage extends React.Component<SearchPageProps, SearchPageState> {
  constructor(props: SearchPageProps) {
    super(props);

    this.state = {
      filterParams: { grades: [] },
      results: []
    };
  }

  updateFilter = (newFilter: CSEFilterParams) => {
    this.setState({ filterParams: newFilter });
  };

  render() {
    const { filterOptions } = this.props;
    const { filterParams, results } = this.state;

    return (
      <GenericPage claimTitle="Find Targets">
        <SearchBar />
        <div className="filter">
          <Filter options={filterOptions} params={filterParams} onUpdate={this.updateFilter} />
        </div>
        <FilterItemList allItems={results} />
        <style jsx>{`
          .filter {
            display: flex;
            flex-wrap: wrap;
          }

          :global(.filter-selection) {
            flex-grow: 0;
            flex-basis: 200px;
          }
        `}</style>
      </GenericPage>
    );
  }
}
