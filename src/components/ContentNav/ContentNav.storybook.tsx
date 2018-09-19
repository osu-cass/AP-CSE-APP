import React from 'react';
import { storiesOf } from '@storybook/react';
import centered from '@storybook/addon-centered';

import { ContentNav, Item, SubItem } from '.';

const subMock1: SubItem = { name: 'sdgasdfasdf' };
const subMock2: SubItem = { name: 'helasd' };
const mock: Item[] = [{ name: 'hello', subItems: [subMock1, subMock2] }, { name: 'another' }];

storiesOf('ContentNav component', module)
  .addDecorator(centered)
  .add('ContentNav', () => <ContentNav items={mock} />);
