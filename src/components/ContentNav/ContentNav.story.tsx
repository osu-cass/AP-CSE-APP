import React from 'react';
import { storiesOf } from '@storybook/react';
import centered from '@storybook/addon-centered';

import { ContentNav } from '.';
import { itemMock } from './__mocks__';

storiesOf('ContentNav', module)
  .addDecorator(centered)
  .add('Default', () => <ContentNav items={itemMock} />);
