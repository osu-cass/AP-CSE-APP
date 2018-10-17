import React, { Fragment } from 'react';
import { SearchBar } from '../SearchBar';
import { FilterItemList } from '../FilterItemList';
import { Filter } from '../Filter';
import { CSEFilterOptions, CSEFilterParams } from '../../models/filter';
import { FilterItemProps } from '../FilterItem';
import { GenericPage } from '../GenericPage';
import { Colors } from '../../constants';

export interface SearchPageProps {
  filterOptions: CSEFilterOptions;
  searchApi: (search: string) => Promise<FilterItemProps[]>;
}

export interface SearchPageState {
  filterParams: CSEFilterParams;
  results: FilterItemProps[];
  error: boolean;
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
      results: [],
      error: false
    };
  }

  updateFilter = (newFilter: CSEFilterParams) => {
    this.setState({ filterParams: newFilter });
  };

  onSearch = (search: string) => {
    this.props
      .searchApi(search)
      .then(results => {
        this.setState({ results, error: false });
      })
      .catch(() => {
        this.setState({ error: true });
      });
  };

  renderContent() {
    const { filterOptions } = this.props;
    const { filterParams, results, error } = this.state;
    if (error) {
      return <div className="error">Error fetching results from the server</div>;
    }

    return (
      <Fragment>
        <div className="filter">
          <Filter options={filterOptions} params={filterParams} onUpdate={this.updateFilter} />
        </div>
        <FilterItemList allItems={results} />
      </Fragment>
    );
  }

  render() {
    return (
      <GenericPage claimTitle="Find Targets">
        <SearchBar onSearch={this.onSearch} />
        {this.renderContent()}
        <style jsx>{`
          .filter {
            display: flex;
            flex-wrap: wrap;
          }

          .error {
            color: ${Colors.sbError};
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
