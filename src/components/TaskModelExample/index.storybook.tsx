import React from 'react';
import { storiesOf } from '@storybook/react';
import centered from '@storybook/addon-centered';
import { ExamplesProps, Examples } from '.';

const mockExampleProps: ExamplesProps = {
  examples: [
    {
      label: 'Example 1',
      content: 'stuff and things and stuff'
    },
    {
      label: 'Example 2',
      content: 'stuff and things and stuff'
    },
    {
      label: 'Example 3',
      content: 'stuff and things and stuff'
    }
  ]
};

storiesOf('Task Model examples', module)
  .addDecorator(centered)
  .add('default', () => <Examples {...mockExampleProps} />);
