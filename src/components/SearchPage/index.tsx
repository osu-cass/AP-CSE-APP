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
import { paramsToSearchQuery, ISearchClient } from '../../clients/search';
import { IClaim } from '../../models/claim';
import { IFilterClient } from '../../clients/filter';

export interface SearchPageProps {
  paramsFromUrl: CSESearchQuery;
  filterClient: IFilterClient;
  searchClient: ISearchClient;
}

export interface SearchPageState {
  params: CSEFilterParams;
  results?: IClaim[] | Error;
  options?: CSEFilterOptions | Error;
  search: string;
}

function unwrapError<T>(data?: T | Error): T | undefined {
  if (!data) {
    return undefined;
  }

  return data instanceof Error ? undefined : data;
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
    const options = await this.props.filterClient.getFilterOptions(
      this.state.params,
      FilterType.Grade
    );
    this.setState({ options });
  }

  private compareParams(oldParams: CSEFilterParams, newParams: CSEFilterParams): FilterType {
    if (oldParams.subject !== newParams.subject) {
      return FilterType.Subject;
    }
    if (oldParams.claim !== newParams.claim) {
      return FilterType.Claim;
    }
    // don't care about target

    return FilterType.Grade;
  }

  onFilterChanged = async (newFilter: CSEFilterParams) => {
    const query = paramsToSearchQuery(this.state.search, newFilter);
    const [options, results] = await Promise.all([
      this.props.filterClient.getFilterOptions(
        newFilter,
        this.compareParams(this.state.params, newFilter),
        unwrapError(this.state.options)
      ),
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
    if (!options) {
      return <Message>Loading filter options...</Message>;
    }
    if (options instanceof Error) {
      return <ErrorMessage>Error loading filter options</ErrorMessage>;
    }

    return (
      <FilterContianer>
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
