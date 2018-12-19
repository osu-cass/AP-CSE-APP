import React from 'react';
import { storiesOf } from '@storybook/react';
import { RouterDecorator } from '../../__decorators__';
import centered from '@storybook/addon-centered';

import { ResourcesPage } from '.';

storiesOf('Apps Page', module)
  .addDecorator(RouterDecorator)
  .add('Render the Apps page', () => <ResourcesPage />);
