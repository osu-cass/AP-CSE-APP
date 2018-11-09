import React from 'react';
import { storiesOf } from '@storybook/react';
import centered from '@storybook/addon-centered';
import { FilterItemList } from '.';
import { filterItems } from '../SearchPage/__mocks__';
import { RouterDecorator } from '../../__decorators__';

storiesOf('FilterItemList component', module)
  .addDecorator(centered)
  .addDecorator(RouterDecorator)
  .add('FilterItemList', () => <FilterItemList allItems={filterItems} />);
