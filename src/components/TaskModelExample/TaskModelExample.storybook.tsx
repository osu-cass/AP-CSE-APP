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

const fractionExample: ExamplesProps = {
  examples: [
    {
      label: 'Example 1',
      content: '$\\frac{1}{2}$'
    }
  ]
};

const imageExample: ExamplesProps = {
  examples: [
    {
      label: 'Picture',
      content:
        '![](https://images.smarterbalanced.org/content/Documents/Item%20Specs/Math_Item_Specs/Claim1_mathematics_Gr3_specs/media_G3_Math_1F_NF/image007.jpg)'
    }
  ]
};

storiesOf('Task Model examples', module)
  .addDecorator(centered)
  .add('default', () => <Examples {...mockExampleProps} />)
  .add('renders formula', () => <Examples {...fractionExample} />)
  .add('renders a picture', () => <Examples {...imageExample} />);
