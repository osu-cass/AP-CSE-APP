import React from 'react';
import { storiesOf } from '@storybook/react';
import centered from '@storybook/addon-centered';

import { BrowserRouter } from 'react-router-dom';
import { Breadcrumb } from './Breadcrumb';
import { BreadcrumbGroup } from './BreadcrumbGroup';
import { BreadcrumbModel, Category, ClaimType, GradeType, SubjectType } from './BreadcrumbModel';

const emptyMock: BreadcrumbModel[] = [];

const subjectMock: BreadcrumbModel = {
  category: Category.Subject,
  value: SubjectType.ELA,
  link: '#'
};
const gradeMock: BreadcrumbModel = {
  category: Category.Grade,
  value: GradeType.Eight,
  link: '#'
};
const claimMock: BreadcrumbModel = {
  category: Category.Claim,
  value: ClaimType.Four,
  link: '#'
};
const targetMock: BreadcrumbModel = {
  category: Category.Target,
  value: 'Target 1',
  link: '#'
};

const orderedMock: BreadcrumbModel[] = [subjectMock, gradeMock, claimMock, targetMock];

const unorderedMock: BreadcrumbModel[] = [targetMock, claimMock, gradeMock, subjectMock];

const background = {
  backgroundImage: 'linear-gradient(90deg, #006298, #66a1c1)'
};

storiesOf('BreadcrumbGroup component', module)
  .addDecorator(story => <BrowserRouter>{story()}</BrowserRouter>)
  .add('Renders a breadcrumb with subject data', () => (
    <div style={background}>
      <Breadcrumb breadcrumbModel={subjectMock} />
    </div>
  ))
  .add('Renders BreadcrumbGroup without Data', () => (
    <div style={background}>
      <BreadcrumbGroup breadcrumbsModel={emptyMock} />
    </div>
  ))
  .add('Renders BreadcrumbGroup with ordered data', () => (
    <div style={background}>
      <BreadcrumbGroup breadcrumbsModel={orderedMock} />
    </div>
  ))
  .add('Renders BreadcrumbGroup with unordered data', () => (
    <div style={background}>
      <BreadcrumbGroup breadcrumbsModel={unorderedMock} />
    </div>
  ));
