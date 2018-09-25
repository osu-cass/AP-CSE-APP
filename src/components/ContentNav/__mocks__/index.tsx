import { SubItemProps } from '../SubItem';
import { ItemProps } from '../Item';

export const subItemMock: SubItemProps[] = [
  {
    active: false,
    name: 'Task Descriptions'
  },
  {
    active: false,
    name: 'Target Evidence Statement'
  },
  {
    active: false,
    name: 'Appropriate Stems'
  }
];
export const itemMock: ItemProps[] = [
  {
    name: 'Clarifications'
  },
  {
    name: 'Standards'
  },
  {
    name: 'Stimuli/Text Complexity'
  },
  {
    name: 'Accessibility Concerns'
  },
  {
    name: 'Evidence Required'
  },
  {
    name: 'Task Model 1',
    subItems: [
      {
        name: 'Task Descriptions'
      },
      {
        name: 'Target Evidence Statement'
      },
      {
        name: 'Appropriate Stems'
      }
    ]
  },
  {
    name: 'Scoring Rules'
  }
];
