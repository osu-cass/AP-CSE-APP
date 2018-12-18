import React from 'react';
import { storiesOf } from '@storybook/react';
import centered from '@storybook/addon-centered';

import { ToggleBtn, ToggleBtnProps } from '.';

const toggleProps: ToggleBtnProps = {
  toggled: false,
  filter: () => {
    return;
  },
  unFilter: () => {
    return;
  }
};
storiesOf('Toggle Button', module)
  .addDecorator(centered)
  .add('Performance Toggle', () => <ToggleBtn {...toggleProps} />);
