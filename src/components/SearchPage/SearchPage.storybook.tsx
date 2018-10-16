import React from 'react';
import { storiesOf } from '@storybook/react';
import { SearchPage } from '.';
import { searchPageMockProps } from './__mocks__';

storiesOf('SearchPage component', module).add('SearchPage', () => (
  <SearchPage {...searchPageMockProps} />
));
