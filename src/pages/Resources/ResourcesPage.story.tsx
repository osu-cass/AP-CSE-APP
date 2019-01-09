import React from 'react';
import { storiesOf } from '@storybook/react';
import { RouterDecorator } from '../../__decorators__';
import centered from '@storybook/addon-centered';

import { ResourcesPage } from '.';

storiesOf('Resources Page', module)
  .addDecorator(RouterDecorator)
  .add('Render the Resources page', () => <ResourcesPage />);
