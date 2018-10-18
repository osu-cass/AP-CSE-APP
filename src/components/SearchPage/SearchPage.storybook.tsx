import React from 'react';
import { storiesOf } from '@storybook/react';
import { SearchPage } from '.';
import { searchPageMockProps } from './__mocks__';
import { RouterDecorator } from '../../__decorators__';

storiesOf('SearchPage component', module)
  .addDecorator(RouterDecorator)
  .add('SearchPage', () => <SearchPage {...searchPageMockProps} />);
