import React from 'react';
import { storiesOf } from '@storybook/react';
import { mockData } from './__mocks__';
import { TargetContainerMobile } from '.';
import { MobileDecorator } from '../MobileDecorator';

const story = storiesOf('Target Container (mobile)', module).addDecorator(MobileDecorator);

mockData.target.forEach((t, i) =>
  story.add(`Target ${i + 1}`, () => <TargetContainerMobile {...t} />)
);
