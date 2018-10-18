import React, { Fragment } from 'react';
import { SearchBar } from '../SearchBar';
import { FilterItemList } from '../FilterItemList';
import { Filter } from '../Filter';
import { CSEFilterOptions, CSEFilterParams } from '../../models/filter';
import { FilterItemProps } from '../FilterItem';
import { GenericPage } from '../GenericPage';
import { Colors, Styles } from '../../constants';
import css from 'styled-jsx/css';

export interface SearchPageProps {
  filterOptions: CSEFilterOptions;
  searchApi: (search: string) => Promise<FilterItemProps[]>;
}

export interface SearchPageState {
  filterParams: CSEFilterParams;
  results: FilterItemProps[];
  resultsState: ResultsState;
}

enum ResultsState {
  initial,
  error,
  fetched
}

const style = css`
  .filter {
    display: flex;
    flex-wrap: wrap;
  }

  .error,
  .message {
    text-align: center;
  }

  .error {
    color: ${Colors.sbError};
  }

  :global(.filter-selection) {
    flex-grow: 0;
    flex-basis: 200px;
  }
`;

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
      resultsState: ResultsState.initial
    };
  }

  updateFilter = (newFilter: CSEFilterParams) => {
    this.setState({ filterParams: newFilter });
  };

  onSearch = (search: string) => {
    this.props
      .searchApi(search)
      .then(results => {
        this.setState({ results, resultsState: ResultsState.fetched });
      })
      .catch(() => {
        this.setState({ resultsState: ResultsState.error });
      });
  };

  renderContent() {
    const { filterOptions } = this.props;
    const { filterParams, results, resultsState } = this.state;

    switch (resultsState) {
      case ResultsState.initial:
        return (
          <div className="message">
            Start by searching for a target
            <style jsx>{style}</style>
          </div>
        );
      case ResultsState.error:
        return (
          <div className="error">
            Error fetching results from the server
            <style jsx>{style}</style>
          </div>
        );
      case ResultsState.fetched:
        if (results.length === 0) {
          return (
            <div className="message">
              No results matched your query
              <style jsx>{style}</style>
            </div>
          );
        }
      default:
    }

    return (
      <Fragment>
        <div className="filter">
          <Filter options={filterOptions} params={filterParams} onUpdate={this.updateFilter} />
        </div>
        <FilterItemList allItems={results} />
        <style jsx>{style}</style>
      </Fragment>
    );
  }

  render() {
    return (
      <GenericPage claimTitle="Find Targets">
        <SearchBar onSearch={this.onSearch} />
        <div className="content-container">{this.renderContent()}</div>
        <style jsx>{`
          .content-container {
            margin: ${Styles.paddingUnit} 0;
          }
        `}</style>
      </GenericPage>
    );
  }
}
