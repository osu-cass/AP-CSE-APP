import React from 'react';
import { storiesOf } from '@storybook/react';
import centered from '@storybook/addon-centered';
import { SearchPage } from '.';
import { searchPageMockProps } from './__mocks__';

storiesOf('SearchPage component', module)
  .addDecorator(centered)
  .add('SearchPage', () => <SearchPage {...searchPageMockProps} />);
