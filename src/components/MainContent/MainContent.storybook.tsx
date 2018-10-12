import React from 'react';
import { storiesOf } from '@storybook/react';
import centered from '@storybook/addon-centered';

import { Colors } from '../../constants';
import { MainContent } from './index';
import { targetMock } from './__mocks__/target';
import { targetLayout } from '../../pages/Target';

const style = {
  maxWidth: '800px',
  minHeight: '500px',
  border: `1px solid ${Colors.sbGray}`,
  backgroundColor: 'white'
};

storiesOf('MainContent component', module)
  .addDecorator(centered)
  .add('Renders a main content with target data', () => (
    <div style={style}>
      <MainContent target={targetMock} names={targetLayout} />
    </div>
  ));
