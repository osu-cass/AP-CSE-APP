import React from 'react';
import { storiesOf } from '@storybook/react';

import { Colors } from '../../constants/style';
import { RouterDecorator } from '../../__decorators__';
import { BreadcrumbLink, BreadcrumbLinkProps } from '.';
import { SubjectType } from '../Breadcrumbs/BreadcrumbModel';

const background = {
  backgroundImage: `linear-gradient(90deg, ${Colors.sbBlue}, ${Colors.sbBlueLighter})`
};

const subjectLinkMock: BreadcrumbLinkProps = {
  link: 'ela',
  value: SubjectType['English Language Arts'],
  label: 'Subject'
};

storiesOf('Breadcrumbs/Breadcrumb Link', module)
  .addDecorator(RouterDecorator)
  .add('Subject link', () => (
    <div style={background}>
      <ul>
        <BreadcrumbLink
          link={subjectLinkMock.link}
          value={subjectLinkMock.value}
          label={subjectLinkMock.label}
        />
      </ul>
    </div>
  ));
