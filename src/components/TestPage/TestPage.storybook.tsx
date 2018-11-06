import React from 'react';
import { storiesOf } from '@storybook/react';
import centered from '@storybook/addon-centered';
import { TestPage, TestPageProps } from '.';
import { MenuItems } from '../TestPage/index';
import { RouterDecorator } from '../../__decorators__/';

// cSpell:disable
const testPageMockProps: TestPageProps = {
  pageTitle: 'Learn About Test Development and Design',
  items: MenuItems
};
// cSpell:enable

storiesOf('TestPage component', module)
  .addDecorator(RouterDecorator)
  .add('TestPage', () => <TestPage {...testPageMockProps} />);
