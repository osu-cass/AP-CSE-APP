import React from 'react';
import { storiesOf } from '@storybook/react';
import centered from '@storybook/addon-centered';
import { FilterItem } from '.';
import { filterItems } from '../SearchPage/__mocks__';
import { RouterDecorator } from '../../__decorators__';

storiesOf('Filter Item', module)
  .addDecorator(RouterDecorator)
  .addDecorator(centered)
  .add('default', () => <FilterItem {...filterItems[0]} />);
