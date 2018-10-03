import React from 'react';
import { storiesOf } from '@storybook/react';

import { BrowserRouter } from 'react-router-dom';
import { BreadcrumbLink, BreadcrumbLinkProps } from './BreadcrumbLink';
import { Breadcrumbs, BreadcrumbsProps } from './index';
import { ClaimType, GradeType, SubjectType } from './BreadcrumbModel';
import { Colors } from '../../constants';

const subjectLinkMock: BreadcrumbLinkProps = {
  link: 'ela',
  value: SubjectType['E'],
  label: 'Subject'
};

const emptyMock: BreadcrumbsProps = {};

const allDataMock: BreadcrumbsProps = {
  subject: SubjectType['E'],
  grade: GradeType['G8'],
  claim: ClaimType['C4'],
  target: 'Target 1'
};

const background = {
  backgroundImage: `linear-gradient(90deg, ${Colors.sbBlue}, ${Colors.sbBlueLighter})`
};

storiesOf('Breadcrumbs component', module)
  .addDecorator(story => <BrowserRouter>{story()}</BrowserRouter>)
  .add('Renders a breadcrumb with subject data', () => (
    <div style={background}>
      <ul>
        <BreadcrumbLink
          link={subjectLinkMock.link}
          value={subjectLinkMock.value}
          label={subjectLinkMock.label}
        />
      </ul>
    </div>
  ))
  .add('Renders Breadcrumbs without Data', () => (
    <div style={background}>
      <Breadcrumbs
        subject={emptyMock.subject}
        grade={emptyMock.grade}
        claim={emptyMock.claim}
        target={emptyMock.target}
      />
    </div>
  ))
  .add('Renders Breadcrumbs with all data', () => (
    <div style={background}>
      <Breadcrumbs
        subject={allDataMock.subject}
        grade={allDataMock.grade}
        claim={allDataMock.claim}
        target={allDataMock.target}
      />
    </div>
  ));
