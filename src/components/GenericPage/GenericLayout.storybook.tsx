import React from 'react';
import { storiesOf } from '@storybook/react';
import { PageWidthEnforcer } from './PageWidthEnforcer';
import { genericLayout } from './GenericLayout';
import { Title } from './Title';
import { RouterDecorator } from '../../__decorators__';

const TestComponent: React.SFC<{ test: string }> = ({ test }) => <div>{test}</div>;
const GenericLayoutPage = genericLayout(<div>Placeholder title component</div>, TestComponent);

storiesOf('Generic Layout', module)
  .addDecorator(RouterDecorator)
  .add('default', () => <GenericLayoutPage test="Placeholder page content" />);
