import React from 'react';
import { storiesOf } from '@storybook/react';
import centered from '@storybook/addon-centered';

import { ContentNav, Item, SubItem } from '.';

const subMock1: SubItem = { name: 'sdgasdfasdf' };
const subMock2: SubItem = { name: 'helasdfasdfsdasdglo' };
const mock: Item[] = [{ name: 'hello' }, { name: 'another', subItems: [subMock1, subMock2] }];

storiesOf('ContentNav component', module)
  .addDecorator(centered)
  .add('ContentNav', () => <ContentNav items={mock} />);
