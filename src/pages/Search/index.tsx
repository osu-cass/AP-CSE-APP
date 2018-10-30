import React from 'react';
import { RouteComponentProps } from 'react-router';
import QueryString from 'query-string';
import { CSESearchQuery } from '../../models/filter';
import { SearchPage } from '../../components/SearchPage';
import { FilterClient } from '../../clients/filter';
import { SearchClient } from '../../clients/search';

export const SearchPageRoute: React.SFC<RouteComponentProps<{}>> = props => {
  const query: CSESearchQuery = QueryString.parse(props.location.search);

  return (
    <SearchPage
      paramsFromUrl={query}
      filterClient={new FilterClient()}
      searchClient={new SearchClient()}
    />
  );
};
