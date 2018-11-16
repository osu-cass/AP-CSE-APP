import React from 'react';
import { RouteComponentProps } from 'react-router';
import { parse } from 'query-string';
import { CSESearchQuery } from '../../models/filter';
import { SearchPage } from '../../components/SearchPage';
import { FilterClient } from '../../clients/filter';
import { SearchClient } from '../../clients/search';
import { genericLayout } from '../../components/GenericPage/GenericLayout';
import { Title } from '../../components/GenericPage/Title';

const SearchPageComponent: React.SFC<RouteComponentProps> = ({ location, history }) => {
  const query: CSESearchQuery = parse(location.search);
  standardizeQuery(query);

  return (
    <SearchPage
      paramsFromUrl={query}
      filterClient={new FilterClient()}
      searchClient={new SearchClient()}
      history={history}
    />
  );
};

function standardizeQuery(query: CSESearchQuery) {
  if (query.grades && !Array.isArray(query.grades)) {
    query.grades = [query.grades];
  }
}

export const SearchPageRoute = genericLayout(<Title>Find Targets</Title>, SearchPageComponent);
