import React from 'react';
import { Search } from 'react-feather';
import { Colors, blueGradientBgImg } from '../../constants';
import { SearchBar } from '../SearchBar';
import { TitleBar } from '../TitleBar';
import { FilterItemList } from '../FilterItemList';
import { Filter } from '../Filter';
import { CSEFilterOptions, CSEFilterParams } from '../../models/filter';
import { FilterItemProps } from '../FilterItem';

export interface SearchPageProps {
  pageTitle: string;
  filterOptions: CSEFilterOptions;
  searchApi: (search: string) => FilterItemProps[];
}

export interface SearchPageState {
  filterParams: CSEFilterParams;
  results: FilterItemProps[];
}

const style = {
  ...blueGradientBgImg,
  maxWidth: '1024px'
};

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
    const { pageTitle, filterOptions } = this.props;
    const { filterParams, results } = this.state;

    return (
      <div>
        <div style={style}>
          <TitleBar claimTitle={pageTitle} />
        </div>
        <SearchBar />
        <div>
          <Filter options={filterOptions} params={filterParams} onUpdate={this.updateFilter} />
        </div>
        <FilterItemList allItems={results} />
      </div>
    );
  }
}
