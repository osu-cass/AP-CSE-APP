import React from 'react';
import { storiesOf } from '@storybook/react';
import centered from '@storybook/addon-centered';
import { FilterItemList } from '.';
import { searchResults } from '../SearchPage/__mocks__/SearchResults';
import { RouterDecorator } from '../../__decorators__';

storiesOf('FilterItemList component', module)
  .addDecorator(centered)
  .addDecorator(RouterDecorator)
  .add('FilterItemList', () => (
    <FilterItemList
      claims={searchResults}
      getTargetLink={(shortCode: string): string => '/target'}
    />
  ));
