import React from 'react';
import { storiesOf } from '@storybook/react';

import { BrowserRouter } from 'react-router-dom';
import { BreadcrumbLink, BreadcrumbLinkProps } from '../BreadcrumbLink/BreadcrumbLink';
import { Breadcrumbs, BreadcrumbsProps } from './index';
import { ClaimType, GradeType, SubjectType } from './BreadcrumbModel';
import { Colors } from '../../constants/style';
import {
  BreadcrumbDropDownProps,
  BreadcrumbDropDown
} from '../BreadcrumbDropDown/BreadCrumbDropDown';

const subjectLinkMock: BreadcrumbLinkProps = {
  link: 'ela',
  value: SubjectType['English Language Arts'],
  label: 'Subject'
};

const emptyMock: BreadcrumbsProps = {};

const allDataMock: BreadcrumbsProps = {
  subject: SubjectType['English Language Arts'],
  grades: ['8'],
  claim: ClaimType['C4'],
  target: 'Target 1 and stuff and things this could be really long'
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
    <Breadcrumbs
      subject={emptyMock.subject}
      grades={emptyMock.grades}
      claim={emptyMock.claim}
      target={emptyMock.target}
    />
  ))
  .add('Renders Breadcrumbs with all data', () => (
    <Breadcrumbs
      subject={allDataMock.subject}
      grades={allDataMock.grades}
      claim={allDataMock.claim}
      target={allDataMock.target}
    />
  ));
