import React from 'react';
import { storiesOf } from '@storybook/react';
import centered from '@storybook/addon-centered';

import { ContentNav } from '.';
import { Item, ItemProps } from './Item';
import { SubItem, SubItemProps } from './SubItem';

const subMock1: SubItemProps = { name: 'sdgasdfasdf' };
const subMock2: SubItemProps = { name: 'helasd' };
const mock: ItemProps[] = [
  {
    name: 'Clarifications'
  },
  {
    name: 'Standards'
  },
  {
    name: 'Stimuli/Text Complexity'
  },
  {
    name: 'Accessibility Concerns'
  },
  {
    name: 'Evidence Required'
  },
  {
    name: 'Task Model 1',
    subItems: [
      {
        name: 'Task Descriptions'
      },
      {
        name: 'Target Evidence Statement'
      },
      {
        name: 'Appropriate Stems'
      }
    ]
  },
  {
    name: 'Scoring Rules'
  }
];

storiesOf('ContentNav', module)
  .addDecorator(centered)
  .add('Default', () => <ContentNav items={mock} />);
