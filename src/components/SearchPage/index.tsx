import { ErrorBoundary, FilterType } from '@osu-cass/sb-components';
import { History } from 'history';
import { stringify } from 'query-string';
import React from 'react';

import { IFilterClient } from '../../clients/filter';
import { ISearchClient } from '../../clients/search';
import { Styles } from '../../constants/style';
import { IClaim } from '../../models/claim';
import { CSEFilterOptions, CSEFilterParams, CSESearchQuery } from '../../models/filter';
import { FilterComponent } from '../FilterComponent';
import { FilterItemList } from '../FilterItemList';
import { ErrorMessage, Message } from '../Message';
import { SearchBar } from '../SearchBar';

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
  pt: boolean;
}

function anyParams(urlParams: CSESearchQuery): boolean {
  return urlParams.filter ? true : false;
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
        grades: props.paramsFromUrl.grades || [],
        subject: props.paramsFromUrl.subject,
        claim: props.paramsFromUrl.claim,
        target: props.paramsFromUrl.target,
        filter: props.paramsFromUrl.filter
      },
      search: props.paramsFromUrl.search || '',
      pt: false
    };
  }

  async componentDidMount() {
    const { filter, ...filterParams } = this.state.params;
    const options = await this.props.filterClient.getFilterOptions(filterParams);
    this.setState({ options });
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
    // tslint:disable-next-line:prefer-const
    let [options, results] = await Promise.all([
      this.props.filterClient.getFilterOptions(
        newFilter,
        compareParams(params, newFilter),
        unwrapError(this.state.options)
      ),
      this.props.searchClient.search({ search, ...newFilter })
    ]);

    if (this.state.pt) {
      results = this.filterPerformanceTasks(results as IClaim[]);
    }

    this.updateQuery(search, newFilter);
    this.setState({ options, results, params: newFilter });
  };

  onSearch = async (search: string) => {
    let results = await this.props.searchClient.search({ search, ...this.state.params });

    if (this.state.pt) {
      results = this.filterPerformanceTasks(results as IClaim[]);
    }

    this.updateQuery(search, this.state.params);
    this.setState({ results, search });
  };

  renderFilter() {
    const { params, options } = this.state;
    const errorJsx = <ErrorMessage>Error loading filter options</ErrorMessage>;
    if (!options) {
      return <Message>Loading filter options...</Message>;
    }
    if (options instanceof Error) {
      return errorJsx;
    }

    return (
      <ErrorBoundary fallbackUI={errorJsx}>
        <FilterComponent
          options={options}
          params={params}
          onUpdate={this.onFilterChanged}
          expanded={anyParams(this.props.paramsFromUrl)}
          filterPT={this.togglePerformaceTask}
        />
      </ErrorBoundary>
    );
  }

  togglePerformaceTask = () => {
    const { results } = this.state;
    this.setState(() => ({
      results: this.filterPerformanceTasks(results as IClaim[]),
      pt: !this.state.pt
    }));
  };

  filterPerformanceTasks = (claims: IClaim[]): IClaim[] => {
    const results: IClaim[] = [];
    claims.forEach(c => {
      c.target = c.target.filter(t => t.interactionType === 'PT');
      if (c.target.length > 0) {
        results.push(c);
      }
    });

    return results;
  };

  renderNarrowText(results: IClaim[]) {
    let resultCount = 0;
    results.forEach(r => (resultCount = resultCount + r.target.length));

    return (
      <div>
        {resultCount > 10 ? (
          <div id="narrow-results">
            <i>Use filter to narrow search results</i>
            <style jsx>{`
              #narrow-results {
                color: #ff0000;
              }
            `}</style>
          </div>
        ) : (
          ''
        )}
      </div>
    );
  }

  renderResults() {
    const { results } = this.state;
    const errorJsx = <ErrorMessage>Error fetching results from the server</ErrorMessage>;
    if (!results) {
      return <Message>Enter a query to see matching targets.</Message>;
    }
    if (results instanceof Error) {
      return errorJsx;
    }
    if (results.length === 0) {
      return <Message>No results found.</Message>;
    }

    return (
      <ErrorBoundary fallbackUI={errorJsx}>
        {this.renderNarrowText(results)}
        <FilterItemList claims={results} getTargetLink={placeholder} />
      </ErrorBoundary>
    );
  }

  render() {
    return (
      <React.Fragment>
        <SearchBar onSearch={this.onSearch} initialText={this.props.paramsFromUrl.search} />
        <div className="content-container">
          {this.renderFilter()}
          {this.renderResults()}
        </div>
        <style jsx>{`
          .content-container {
            margin: ${Styles.paddingUnit} 0;
          }
        `}</style>
      </React.Fragment>
    );
  }
}
