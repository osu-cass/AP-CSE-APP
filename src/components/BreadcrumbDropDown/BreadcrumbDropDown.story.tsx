import React from 'react';
import { storiesOf } from '@storybook/react';
import { BrowserRouter } from 'react-router-dom';

import { Colors } from '../../constants/style';
import { BreadcrumbDropDownProps, BreadcrumbDropDown } from '.';

const background = {
  backgroundImage: `linear-gradient(90deg, ${Colors.sbBlue}, ${Colors.sbBlueLighter})`
};

const breadcrumbDropDownProps: BreadcrumbDropDownProps = {
  currentTarget: {
    label: 'Current Target',
    code: 'a.b.c.ct'
  },
  targets: [
    {
      label: 'My Target',
      code: 'a.b.c.e'
    },
    {
      label: 'Target Two',
      code: 'a.b.c.t2'
    },
    {
      label: 'Target Three',
      code: 'a.b.c.t3'
    }
  ]
};

storiesOf('Breadcrumbs/Drop Down', module)
  .addDecorator(story => <BrowserRouter>{story()}</BrowserRouter>)
  .add('Without targets', () => (
    <div style={background}>
      <BreadcrumbDropDown targets={[]} currentTarget={breadcrumbDropDownProps.currentTarget} />
    </div>
  ))
  .add('With targets', () => (
    <div style={background}>
      <BreadcrumbDropDown
        targets={breadcrumbDropDownProps.targets}
        currentTarget={breadcrumbDropDownProps.currentTarget}
      />
    </div>
  ));
