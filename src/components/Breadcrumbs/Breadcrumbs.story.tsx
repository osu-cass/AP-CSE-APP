import React from 'react';
import { storiesOf } from '@storybook/react';

import { BrowserRouter } from 'react-router-dom';
import { Breadcrumbs, BreadcrumbsProps } from './index';
import { ClaimType, SubjectType } from './BreadcrumbModel';
import { foTarget } from '../../clients/filter/__mocks__';

const allDataMock: BreadcrumbsProps = {
  subject: SubjectType['English Language Arts'],
  grades: ['8'],
  claim: ClaimType['C4'],
  target: 'Target 1 and stuff and things this could be really long',
  targetList: foTarget.targetShortCodes,
  targetShortCode: 't1'
};

storiesOf('Breadcrumbs', module)
  .addDecorator(story => <BrowserRouter>{story()}</BrowserRouter>)
  .add('Default', () => <Breadcrumbs />)
  .add('Subject, grade, and claim', () => <Breadcrumbs {...allDataMock} />);
