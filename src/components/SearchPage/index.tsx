import React from 'react';
import { blueGradientBgImg } from '../../constants';
import { NavBar } from '../NavBar';
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
    <NavBar links={[]} siteName={'test'} mainContentId={'main'} />
    <div style={style}>
      <TitleBar claimTitle={props.pageTitle} />
    </div>
    <div>This is a placeholder for the filter component</div>
    <FilterItemList {...props.results} />
  </div>
);
