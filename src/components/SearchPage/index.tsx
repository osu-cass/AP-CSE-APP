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
import { paramsToSearchQuery, ISearchClient } from '../../clients/search';
import { IClaim } from '../../models/claim';

export type FilterOptionsQuery = (
  params: CSEFilterParams,
  current?: CSEFilterOptions
) => Promise<CSEFilterOptions>;

export interface SearchPageProps {
  paramsFromUrl: CSEFilterParams;
  getFilterOptions: FilterOptionsQuery;
  searchClient: ISearchClient;
}

export interface SearchPageState {
  params: CSEFilterParams;
  results?: IClaim[] | Error;
  options: Resource<CSEFilterOptions>;
  search: string;
}

const placeholder = (targetCode: string) => `/target/${targetCode}`;

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

  async componentDidMount() {
    const options = await this.loadFilterOptions(this.state.params);
    this.setState({ options });
  }

  onFilterChanged = async (newFilter: CSEFilterParams) => {
    const oldOptions = getResourceContent(this.state.options);
    const query = paramsToSearchQuery(this.state.search, newFilter);
    const [options, results] = await Promise.all([
      this.loadFilterOptions(newFilter, oldOptions),
      this.props.searchClient.search(query)
    ]);

    this.setState({ options, results, params: newFilter });
  };

  onSearch = async (search: string) => {
    const query = paramsToSearchQuery(search, this.state.params);
    const results = await this.props.searchClient.search(query);
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
    const { results } = this.state;
    if (!results) {
      return <Message>Enter a query to see matching targets.</Message>;
    }
    if (results instanceof Error) {
      return <ErrorMessage>Error fetching results from the server</ErrorMessage>;
    }
    if (results.length === 0) {
      return <Message>No results found.</Message>;
    }

    return <FilterItemList claims={results} getTargetLink={placeholder} />;
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
