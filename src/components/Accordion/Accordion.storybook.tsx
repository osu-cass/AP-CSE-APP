import React from 'react';
import { storiesOf } from '@storybook/react';
import centered from '@storybook/addon-centered';
import { Accordion } from '.';

storiesOf('Accordion', module)
  .addDecorator(centered)
  .add('Base case', () => <Accordion title="This is the title">This is the body</Accordion>)
  .add('Expanded', () => (
    <Accordion title="This is the title" expanded>
      This is the body
    </Accordion>
  ))
  .add('Styled title', () => (
    <Accordion title="This is the title" titleStyle={{ color: 'red' }}>
      This is the body
    </Accordion>
  ))
  .add('JSX in body', () => (
    <Accordion title="This is the title">
      <p>This is the body, with fancy html</p>
      <h3>And headers</h3>
      <p>And multiple paragraphs!</p>
    </Accordion>
  ));
