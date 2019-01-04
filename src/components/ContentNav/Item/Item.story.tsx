import React from 'react';
import { storiesOf } from '@storybook/react';
import centered from '@storybook/addon-centered';

import { Item } from '.';
import { SubItem } from '../SubItem';
import { subItemMock } from '../__mocks__';

storiesOf('ContentNav/Item/Active', module)
  .addDecorator(centered)
  .add('Active', () => <Item name={'Task Model 1'} active={true} subItems={[]} />)
  .add('Expandable', () => (
    <Item name={'Test Name'} active={true} expanded={false} subItems={subItemMock}>
      <SubItem name={'Task Descriptions'} key={`${name}-${'Task Descriptions'}`} />
    </Item>
  ))
  .add('Expanded', () => (
    <Item name={'Test Name'} active={true} expanded={true} subItems={subItemMock}>
      <SubItem name={'Task Descriptions'} key={`${name}-${'Task Descriptions'}`} />
      <SubItem name={'Target Evidence Statement'} key={`${name}-${'Target Evidence Statement'}`} />
    </Item>
  ))
  .add('Expanded with active SubItem', () => (
    <Item name={'Task Model 1'} active={true} expanded={true} subItems={subItemMock}>
      <SubItem name={'Task Descriptions'} key={`${name}-${'Task Descriptions'}`} />
      <SubItem
        name={'Target Evidence Statement'}
        active={true}
        key={`${name}-${'Target Evidence Statement'}`}
      />
    </Item>
  ));

storiesOf('ContentNav/Item/Inactive', module)
  .addDecorator(centered)
  .add('Default', () => <Item name={'Task Model 1'} subItems={[]} />)
  .add('Expandable', () => (
    <Item name={'Test Name'} expanded={false} subItems={subItemMock}>
      <SubItem name={'Task Descriptions'} key={`${name}-${'Task Descriptions'}`} />
    </Item>
  ))
  .add('Expanded', () => (
    <Item name={'Test Name'} expanded={true} subItems={subItemMock}>
      <SubItem name={'Task Descriptions'} key={`${name}-${'Task Descriptions'}`} />
    </Item>
  ));
