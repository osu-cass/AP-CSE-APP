import React from 'react';
import { storiesOf } from '@storybook/react';
import centered from '@storybook/addon-centered';

import { FilterItemList } from '.';
import { RouterDecorator } from '../../__decorators__';
import { searchResults } from '../SearchPage/__mocks__/SearchResults';

storiesOf('Filter Item List', module)
  .addDecorator(centered)
  .addDecorator(RouterDecorator)
  .add('default', () => (
    <FilterItemList
      claims={searchResults}
      getTargetLink={(shortCode: string): string => '/target'}
    />
  ));
