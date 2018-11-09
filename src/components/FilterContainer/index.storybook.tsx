import React from 'react';
import { storiesOf } from '@storybook/react';
import centered from '@storybook/addon-centered';
import { FilterContianer } from '.';

storiesOf('FilterContianer', module)
  .addDecorator(centered)
  .add('default', () => <FilterContianer>Filter goes here</FilterContianer>)
  .add('expanded', () => <FilterContianer expanded>Filter goes here</FilterContianer>);
