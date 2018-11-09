import React from 'react';
import { storiesOf } from '@storybook/react';
import centered from '@storybook/addon-centered';
import { FilterItem, FilterItemProps } from '.';

const filterItemMockProps: FilterItemProps = {
  subject: 'enim',
  grade: 'ad',
  claim: 'minim',
  targetName: 'Lorem ipsum',
  targetBodyText:
    'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.',
  targetLink: ''
};

storiesOf('FilterItem component', module)
  .addDecorator(centered)
  .add('FilterItem', () => <FilterItem {...filterItemMockProps} />);
