import { SubItemProps } from '../SubItem';
import { ItemProps } from '../Item';

export const subMock1: SubItemProps = { name: 'sdgasdfasdf' };
export const subMock2: SubItemProps = { name: 'helasd' };
export const subMocks3: SubItemProps = [
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
export const mock: ItemProps[] = [
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
