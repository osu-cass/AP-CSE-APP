import { Target } from '../../../components/MainContent';
import { ItemProps } from '../../../components/ContentNav/Item';
import { TitleBarProps } from '../../../components/TitleBar';
import { BreadcrumbsProps } from '../../../components/Breadcrumbs';

export const parsedRegularItemMock: ItemProps[] = [{ name: 'Evidence Required', subItems: [] }];

export const parsedItemWithSubsMock: ItemProps[] = [
  {
    name: 'Task Model 1',
    subItems: [
      {
        name: 'Task Model 1-Task Description'
      },
      {
        name: 'Task Model 1-Target Evidence Statements'
      },
      {
        name: 'Task Model 1-Appropriate Stems'
      },
      {
        name: 'Task Model 1-Scoring Rules'
      }
    ]
  },
  {
    name: 'Task Model 2',
    subItems: [
      {
        name: 'Task Model 2-Task Description'
      },
      {
        name: 'Task Model 2-Target Evidence Statements'
      },
      {
        name: 'Task Model 2-Appropriate Stems'
      },
      {
        name: 'Task Model 2-Scoring Rules'
      }
    ]
  },
  {
    name: 'Task Model 3',
    subItems: [
      {
        name: 'Task Model 3-Task Description'
      },
      {
        name: 'Task Model 3-Target Evidence Statements'
      },
      {
        name: 'Task Model 3-Appropriate Stems'
      },
      {
        name: 'Task Model 3-Scoring Rules'
      }
    ]
  }
];

export const parsedNavPropsMock: ItemProps[] = [
  {
    name: 'Clarification',
    subItems: []
  },
  {
    name: 'Standards',
    subItems: []
  },
  {
    name: 'Stimuli/Text Complexity',
    subItems: []
  },
  {
    name: 'Accessibility Concerns',
    subItems: []
  },
  {
    name: 'Evidence Required',
    subItems: []
  },
  {
    name: 'Task Model 1',
    subItems: [
      {
        name: 'Task Model 1-Task Description'
      },
      {
        name: 'Task Model 1-Target Evidence Statements'
      },
      {
        name: 'Task Model 1-Appropriate Stems'
      },
      {
        name: 'Task Model 1-Scoring Rules'
      }
    ]
  },
  {
    name: 'Task Model 2',
    subItems: [
      {
        name: 'Task Model 2-Task Description'
      },
      {
        name: 'Task Model 2-Target Evidence Statements'
      },
      {
        name: 'Task Model 2-Appropriate Stems'
      },
      {
        name: 'Task Model 2-Scoring Rules'
      }
    ]
  },
  {
    name: 'Task Model 3',
    subItems: [
      {
        name: 'Task Model 3-Task Description'
      },
      {
        name: 'Task Model 3-Target Evidence Statements'
      },
      {
        name: 'Task Model 3-Appropriate Stems'
      },
      {
        name: 'Task Model 3-Scoring Rules'
      }
    ]
  },
  {
    name: 'Depth of Knowledge',
    subItems: []
  }
];

export const parsedBreadCrumbDataMock: BreadcrumbsProps = {
  subject: 'English Language Arts',
  grade: 'Grade 3',
  claim: 'Literary Texts',
  target: 'Placeholder Title'
};

export const parsedTitleBarDataMock: TitleBarProps = {
  claimTitle: 'Literary Texts',
  claimDesc:
    'Students can read closely and analytically to comprehend a range of increasingly complex literary and informational texts.',
  downloadBtnProps: { url: 'test/url', filename: 'test-file-name' },
  targetTitle: 'Placeholder Title',
  targetDesc:
    'Given an inference or conclusion, use explicit details and implicit information from the text to support the inference or conclusion provided.'
};

export const parsedSubItemMock: ItemProps = {
  name: 'Task Model 1',
  subItems: [
    {
      name: 'Task Model 1-Task Description'
    },
    {
      name: 'Task Model 1-Target Evidence Statements'
    },
    {
      name: 'Task Model 1-Appropriate Stems'
    },
    {
      name: 'Task Model 1-Scoring Rules'
    }
  ]
};

export const targetMock: Target = {
  title: '',
  shortCode: '',
  description: '',
  standards: [],
  DOK: [],
  targetType: '',
  clarification: '',
  heading: '',
  evidence: [],
  vocab: '',
  tools: '',
  stimInfo: '',
  devNotes: '',
  complexity: '',
  dualText: '',
  accessibility: '',
  stem: [],
  taskModels: [],
  rubrics: []
};
