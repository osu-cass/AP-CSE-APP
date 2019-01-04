import React from 'react';
import { storiesOf } from '@storybook/react';
import centered from '@storybook/addon-centered';

import { FilterContainer } from '.';

storiesOf('Filter/Container', module)
  .addDecorator(centered)
  .add('default', () => <FilterContainer expanded={false}>Filter goes here</FilterContainer>)
  .add('expanded', () => <FilterContainer expanded>Filter goes here</FilterContainer>);
