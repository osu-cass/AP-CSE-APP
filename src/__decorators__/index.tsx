import React from 'react';
import { StoryDecorator } from '@storybook/react';
import { MemoryRouter } from 'react-router';

export const RouterDecorator: StoryDecorator = storyFn => (
  <MemoryRouter initialEntries={['/']}>{storyFn()}</MemoryRouter>
);
