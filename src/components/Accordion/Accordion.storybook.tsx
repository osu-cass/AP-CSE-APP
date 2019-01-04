import React from 'react';
import { storiesOf } from '@storybook/react';

import { Accordion } from '.';

storiesOf('Accordion', module)
  .add('default', () => <Accordion title={<h2>Title</h2>}>Content</Accordion>)
  .add('expanded', () => (
    <Accordion title="Title" expanded>
      Content
    </Accordion>
  ));
