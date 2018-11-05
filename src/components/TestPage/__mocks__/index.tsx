import React from 'react';
import { ItemProps } from '../../ContentNav/Item/index';

export const itemMock: ItemProps[] = [
  {
    name: 'Overview',
    subItems: []
  },
  {
    name: 'Test Blueprints',
    subItems: []
  },
  {
    name: 'Item Specifications',
    subItems: [
      {
        name: 'Item Specifications Overview'
      },
      {
        name: 'Accessibility for Items'
      },
      {
        name: 'Additional Item Specification Resources'
      },
      {
        name: 'Full Item Specifications'
      }
    ]
  },
  {
    name: 'Content Specifications',
    subItems: []
  }
];
