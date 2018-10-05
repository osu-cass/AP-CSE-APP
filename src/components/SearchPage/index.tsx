import React from 'react';
import { Search } from 'react-feather';
import { Colors, blueGradientBgImg } from '../../constants';
import { SearchBar } from '../SearchBar';
import { TitleBar } from '../TitleBar';

export interface SearchPageProps {
  pageTitle: string;
}

const style = {
  ...blueGradientBgImg,
  maxWidth: '1024px'
};

export const SearchPage = ({ pageTitle }: SearchPageProps): JSX.Element => (
  <div>
    <div style={style}>
      <TitleBar claimTitle={pageTitle} />
    </div>
    <SearchBar />
    <div>This is a placeholder for the filter component</div>
    <div>This is a placeholder for the results component</div>
  </div>
);
