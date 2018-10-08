import React from 'react';
import { Search } from 'react-feather';
import { Colors, blueGradientBgImg } from '../../constants';
import { SearchBar } from '../SearchBar';
import { TitleBar } from '../TitleBar';
import { FilterItemList, FilterItemListProps } from '../FilterItemList';

export interface SearchPageProps {
  pageTitle: string;
  results: FilterItemListProps;
}

const style = {
  ...blueGradientBgImg,
  maxWidth: '1024px'
};

export const SearchPage = (props: SearchPageProps): JSX.Element => (
  <div>
    <div style={style}>
      <TitleBar claimTitle={props.pageTitle} />
    </div>
    <SearchBar />
    <div>This is a placeholder for the filter component</div>
    <FilterItemList {...props.results} />
  </div>
);
