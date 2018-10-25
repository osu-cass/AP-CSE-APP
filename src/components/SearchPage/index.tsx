import React, { Fragment } from 'react';
import { SearchBar } from '../SearchBar';
import { FilterItemList } from '../FilterItemList';
import { Filter } from '../Filter';
import { CSEFilterOptions, CSEFilterParams } from '../../models/filter';
import { FilterItemProps } from '../FilterItem';
import { GenericPage } from '../GenericPage';
import { Colors, Styles } from '../../constants';
import { FilterContianer } from '../FilterContainer';
import { Message, ErrorMessage } from '../Filter/Messages';
import { Resource, getResourceContent } from '@osu-cass/sb-components';

export type FilterOptionsQuery = (
  params: CSEFilterParams,
  current?: CSEFilterOptions
) => Promise<CSEFilterOptions>;

export type SearchQuery = (search: string, filter: CSEFilterParams) => Promise<FilterItemProps[]>;

export interface SearchPageProps {
  paramsFromUrl: CSEFilterParams;
  getFilterOptions: FilterOptionsQuery;
  getSearch: SearchQuery;
}

export interface SearchPageState {
  params: CSEFilterParams;
  results: Resource<FilterItemProps[]>;
  options: Resource<CSEFilterOptions>;
  search: string;
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
      params: { ...props.paramsFromUrl },
      results: { kind: 'loading' },
      options: { kind: 'loading' },
      search: ''
    };
  }

  async loadFilterOptions(
    params: CSEFilterParams,
    oldOptions?: CSEFilterOptions
  ): Promise<Resource<CSEFilterOptions>> {
    try {
      const options = await this.props.getFilterOptions(params, oldOptions);

      return { kind: 'success', content: options };
    } catch {
      return { kind: 'failure' };
    }
  }

  async loadSearchResults(
    search: string,
    params: CSEFilterParams
  ): Promise<Resource<FilterItemProps[]>> {
    try {
      const results = await this.props.getSearch(search, params);

      return { kind: 'success', content: results };
    } catch {
      return { kind: 'failure' };
    }
  }

  async componentDidMount() {
    const options = await this.loadFilterOptions(this.state.params);
    this.setState({ options });
  }

  onFilterChanged = async (newFilter: CSEFilterParams) => {
    const oldOptions = getResourceContent(this.state.options);
    const [options, results] = await Promise.all([
      this.loadFilterOptions(newFilter, oldOptions),
      this.loadSearchResults(this.state.search, newFilter)
    ]);

    this.setState({ options, results, params: newFilter });
  };

  onSearch = async (search: string) => {
    const results = await this.loadSearchResults(search, this.state.params);
    this.setState({ results, search });
  };

  renderFilter() {
    const { params, options } = this.state;
    const optionsContent = getResourceContent(options);
    if (!optionsContent) {
      return <ErrorMessage>Error loading filter options</ErrorMessage>;
    }

    return (
      <FilterContianer>
        <Filter options={optionsContent} params={params} onUpdate={this.onFilterChanged} />
      </FilterContianer>
    );
  }

  renderResults() {
    switch (this.state.results.kind) {
      case 'loading':
        return <Message>Begin by searching for targets.</Message>;
      case 'failure':
        return <ErrorMessage>Error fetching results from the server</ErrorMessage>;
      default:
    }
    const resultsContent = getResourceContent(this.state.results);
    if (!resultsContent || resultsContent.length === 0) {
      return <Message>No results matched your query.</Message>;
    }

    return <FilterItemList allItems={resultsContent} />;
  }

  render() {
    return (
      <GenericPage claimTitle="Find Targets">
        <SearchBar onSearch={this.onSearch} />
        <div className="content-container">
          {this.renderFilter()}
          {this.renderResults()}
        </div>
        <style jsx>{`
          .content-container {
            margin: ${Styles.paddingUnit} 0;
          }
        `}</style>
      </GenericPage>
    );
  }
}
