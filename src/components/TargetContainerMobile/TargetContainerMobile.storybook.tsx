import React from 'react';
import { storiesOf } from '@storybook/react';
import { mockData } from './__mocks__';
import { TargetContainerMobile } from '.';
import { MobileDecorator } from '../MobileDecorator';

storiesOf('Target Container (mobile)', module)
  .addDecorator(MobileDecorator)
  .add('SearchBar', () => <TargetContainerMobile {...mockData.target[0]} />);
