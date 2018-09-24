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
  .add('Indented body', () => (
    <Accordion title="This is the title" indentBody>
      This body is indented
    </Accordion>
  ))
  .add('Styled title', () => (
    <div>
      <Accordion title="This is the title" titleClass="accordion-red-title">
        This is the body
      </Accordion>
      <style jsx global>{`
        .accordion-red-title {
          color: red;
        }
      `}</style>
    </div>
  ))
  .add('Styled container', () => (
    <div>
      <Accordion title="This is the title" containerClass="accordion-border">
        This is the body
      </Accordion>
      <style jsx global>{`
        .accordion-border {
          border: 1px solid gray;
          border-radius: 10px;
          padding: 10px;
        }
      `}</style>
    </div>
  ))
  .add('JSX in body', () => (
    <Accordion title="This is the title">
      <p>This is the body, with fancy html</p>
      <h3>And headers</h3>
      <p>And multiple paragraphs!</p>
    </Accordion>
  ));
