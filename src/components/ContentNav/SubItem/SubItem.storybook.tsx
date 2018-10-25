import React from 'react';
import { storiesOf } from '@storybook/react';
import centered from '@storybook/addon-centered';

import { SubItem } from '.';

storiesOf('ContentNav/SubItem', module)
  .addDecorator(centered)
  .add('SubItem', () => <SubItem name={'Task Descriptions'} />)
  .add('SubItem Active', () => <SubItem name={'Task Descriptions'} active={true} />);
