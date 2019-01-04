import React from 'react';
import { storiesOf } from '@storybook/react';

import { BrowserRouter } from 'react-router-dom';
import { Breadcrumbs, BreadcrumbsProps } from './index';
import { ClaimType, SubjectType } from './BreadcrumbModel';

const emptyMock: BreadcrumbsProps = {};

const allDataMock: BreadcrumbsProps = {
  subject: SubjectType['English Language Arts'],
  grades: ['8'],
  claim: ClaimType['C4'],
  target: 'Target 1 and stuff and things this could be really long'
};

storiesOf('Breadcrumbs', module)
  .addDecorator(story => <BrowserRouter>{story()}</BrowserRouter>)
  .add('Default', () => (
    <Breadcrumbs
      subject={emptyMock.subject}
      grades={emptyMock.grades}
      claim={emptyMock.claim}
      target={emptyMock.target}
    />
  ))
  .add('Subject, grade, and claim', () => (
    <Breadcrumbs
      subject={allDataMock.subject}
      grades={allDataMock.grades}
      claim={allDataMock.claim}
      target={allDataMock.target}
    />
  ));
