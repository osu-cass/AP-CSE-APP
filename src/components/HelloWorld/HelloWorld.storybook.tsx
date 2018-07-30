import React from 'react';
import { storiesOf } from '@storybook/react';

import { HelloWorld } from './index';

storiesOf('HelloWorld component', module).add('Renders greeting', () => <HelloWorld />);
