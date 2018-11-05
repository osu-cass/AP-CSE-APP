import React from 'react';
import { storiesOf } from '@storybook/react';
import centered from '@storybook/addon-centered';
import { TestPage, TestPageProps } from '.';
import { itemMock } from './__mocks__/index';

const OverviewContent: JSX.Element = (
  <div>
    <h2>Overview</h2>
    <p>
      Along with creating an innovative assessment, Smarter Balanced is committed to an
      unprecedented level of transparency, so that anyone who is interested can see exactly how the
      test is made.
    </p>
    <p>
      On this page we provide the following materials used in the process of developing the Smarter
      Balanced assessment system.
    </p>
    <ul>
      <li>Summative Test Blueprints</li>
      <li>Interim Assessment Overview and Blueprints</li>
      <li>Item Specifications, Accessibility, and Guidelines</li>
      <li>Content Specifications</li>
    </ul>
  </div>
);

const BlueprintContent: JSX.Element = (
  <div>
    <h2>Test Blueprints</h2>
  </div>
);

const ItemContent: JSX.Element = (
  <div>
    <h2>Item Specifications</h2>
  </div>
);

const ContentContent: JSX.Element = (
  <div>
    <h2>Content Specifications</h2>
  </div>
);

// cSpell:disable
const testPageMockProps: TestPageProps = {
  pageTitle: 'Learn About Test Development and Design',
  items: itemMock,
  pageContent: OverviewContent
};
// cSpell:enable

storiesOf('TestPage component', module)
  .addDecorator(centered)
  .add('TestPage', () => <TestPage {...testPageMockProps} />);
