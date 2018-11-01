import React from 'react';
import { SearchBar } from '../SearchBar';
import { FilterItemList } from '../FilterItemList';
import { Filter } from '../Filter';
import { CSEFilterOptions, CSEFilterParams, CSESearchQuery } from '../../models/filter';
import { GenericPage } from '../GenericPage';
import { Styles } from '../../constants';
import { FilterContianer } from '../FilterContainer';
import { Message, ErrorMessage } from '../Filter/Messages';
import { FilterType } from '@osu-cass/sb-components';
import { ISearchClient } from '../../clients/search';
import { IClaim } from '../../models/claim';
import { IFilterClient } from '../../clients/filter';
import { stringify } from 'query-string';
import { History } from 'history';

export interface SearchPageProps {
  paramsFromUrl: CSESearchQuery;
  filterClient: IFilterClient;
  searchClient: ISearchClient;
  history: History;
}

export interface SearchPageState {
  params: CSEFilterParams;
  results?: IClaim[] | Error;
  options?: CSEFilterOptions | Error;
  search: string;
}

function anyParams(urlParmas: CSESearchQuery): boolean {
  return Object.values(urlParmas).some((p: boolean) => p);
}

function unwrapError<T>(data?: T | Error): T | undefined {
  if (!data) {
    return undefined;
  }

  return data instanceof Error ? undefined : data;
}

function compareParams(oldParams: CSEFilterParams, newParams: CSEFilterParams): FilterType {
  if (JSON.stringify(oldParams.grades) !== JSON.stringify(newParams.grades)) {
    return FilterType.Grade;
  }
  if (oldParams.subject !== newParams.subject) {
    return FilterType.Subject;
  }
  if (oldParams.claim !== newParams.claim) {
    return FilterType.Claim;
  }

  return FilterType.Target;
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
      params: {
        ...props.paramsFromUrl,
        grades: props.paramsFromUrl.grades || []
      },
      search: ''
    };
  }

  async componentDidMount() {
    if (anyParams(this.props.paramsFromUrl)) {
      const [results, options] = await Promise.all([
        this.props.searchClient.search(this.props.paramsFromUrl),
        this.props.filterClient.getFilterOptions(this.state.params)
      ]);
      this.setState({ results, options });
    } else {
      const options = await this.props.filterClient.getFilterOptions(this.state.params);
      this.setState({ options });
    }
  }

  private updateQuery(search: string, params: CSEFilterParams) {
    const query: CSESearchQuery = {
      search,
      ...params
    };
    const queryString = stringify(query);
    this.props.history.replace({ search: queryString });
  }

  onFilterChanged = async (newFilter: CSEFilterParams) => {
    const { params, search } = this.state;
    const [options, results] = await Promise.all([
      this.props.filterClient.getFilterOptions(
        newFilter,
        compareParams(params, newFilter),
        unwrapError(this.state.options)
      ),
      this.props.searchClient.search({ search, ...newFilter })
    ]);

    this.updateQuery(search, newFilter);
    this.setState({ options, results, params: newFilter });
  };

  onSearch = async (search: string) => {
    const results = await this.props.searchClient.search({ search, ...this.state.params });

    this.updateQuery(search, this.state.params);
    this.setState({ results, search });
  };

  renderFilter() {
    const { params, options } = this.state;
    if (!options) {
      return <Message>Loading filter options...</Message>;
    }
    if (options instanceof Error) {
      return <ErrorMessage>Error loading filter options</ErrorMessage>;
    }

    return (
      <FilterContianer expanded={anyParams(this.props.paramsFromUrl)}>
        <Filter options={options} params={params} onUpdate={this.onFilterChanged} />
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
      <GenericPage title="Find Targets">
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
