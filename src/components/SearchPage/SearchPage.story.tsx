import React from 'react';
import { storiesOf } from '@storybook/react';

import { SearchPage } from '.';
import { RouterDecorator } from '../../__decorators__';
import { searchPageMockProps, searchPageMockPropsError } from './__mocks__';

storiesOf('Search Page', module)
  .addDecorator(RouterDecorator)
  .add('default', () => <SearchPage {...searchPageMockProps} />)
  .add('error', () => <SearchPage {...searchPageMockPropsError} />);
