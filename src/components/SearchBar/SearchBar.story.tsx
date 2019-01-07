import React from 'react';
import { storiesOf } from '@storybook/react';
import centered from '@storybook/addon-centered';

import { SearchBar } from '.';

storiesOf('SearchBar component', module)
  .addDecorator(centered)
  .add('default', () => (
    <SearchBar
      onSearch={s => {
        alert(`Search: ${s}`);
      }}
    />
  ))
  .add('with initial search', () => (
    <SearchBar
      onSearch={s => {
        alert(`Search: ${s}`);
      }}
      initialText="initial text"
    />
  ));
