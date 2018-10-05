import React from 'react';
import { storiesOf } from '@storybook/react';
import centered from '@storybook/addon-centered';
import { SearchPage, SearchPageProps } from '.';

const searchPageMockProps: SearchPageProps = {
  pageTitle: 'Find Targets'
};

storiesOf('SearchPage component', module)
  .addDecorator(centered)
  .add('SearchPage', () => <SearchPage pageTitle={searchPageMockProps.pageTitle} />);
