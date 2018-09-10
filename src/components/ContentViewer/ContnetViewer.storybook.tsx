import React from 'react';
import { storiesOf } from '@storybook/react';
import centered from '@storybook/addon-centered';

import { ContentViewer } from '.';

storiesOf('ContentViewer', module)
  .addDecorator(centered)
  .add('Renders ElA G3 PT', () => <ContentViewer name="some content" />);
