import React from 'react';
import { storiesOf } from '@storybook/react';
import { RouterDecorator } from '../../__decorators__/';
import centered from '@storybook/addon-centered';
import { TestPage, TestPageProps } from '.';
import { MenuItems } from '../TestPage/index';

// cSpell:disable
const testPageMockProps: TestPageProps = {
  pageTitle: 'Learn About Test Development and Design',
  items: MenuItems
};
// cSpell:enable

storiesOf('TestPage component', module)
  .addDecorator(centered)
  .addDecorator(RouterDecorator)
  .add('TestPage', () => <TestPage {...testPageMockProps} />);
