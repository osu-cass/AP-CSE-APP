import React from 'react';
import { storiesOf } from '@storybook/react';

import { OrderedList, UnorderedList } from '.';

const listItems: React.ReactNode[] = [
  <div>Item</div>,
  <div>Item</div>,
  <div>Item</div>,
  <div>Item</div>,
  <div>Item</div>
];

storiesOf('TargetDetails/Lists', module)
  .add('OrderedList', () => <OrderedList elements={listItems} />)
  .add('UnorderedList', () => <UnorderedList elements={listItems} />);
