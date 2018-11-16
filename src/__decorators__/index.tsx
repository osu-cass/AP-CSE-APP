import React from 'react';
import { StoryDecorator } from '@storybook/react';
import { MemoryRouter } from 'react-router';

export const RouterDecorator: StoryDecorator = storyFn => (
  <MemoryRouter initialEntries={['/']}>{storyFn()}</MemoryRouter>
);

export const FullPageDecorator: StoryDecorator = storyFn => (
  <React.Fragment>
    {storyFn()}
    <style jsx global>{`
      html,
      body {
        padding: 0;
        margin: 0;
      }
    `}</style>
  </React.Fragment>
);
