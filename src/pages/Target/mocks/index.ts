import { ITarget } from '../../../models/target';
import { ItemProps } from '../../../components/ContentNav/Item';
import { TitleBarProps } from '../../../components/TitleBar';
import { BreadcrumbsProps } from '../../../components/Breadcrumbs';
import { IClaim } from '../../../models/claim';
import { ITargetParams } from '../../../clients/target';

export const mockTargetClient = {
  // tslint:disable-next-line:no-empty
  buildParams: (params: ITargetParams) => '',
  getTarget: async () => {
    return import('../../../../mock_api_data/E.G3.C1').then(
      data => (data.default as unknown) as IClaim
    );
  }
};

export const mockEmptyTargetClient = {
  // tslint:disable-next-line:no-empty
  buildParams: (params: ITargetParams) => '',
  getTarget: async () => Promise.reject(new Error('error'))
};

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
  grade: 'Grade 6',
  claim: 'C1',
  target: 'English Language Arts Specification: Grade 6 Claim 1 Target 1'
};

export const parsedTitleBarDataMock: TitleBarProps = {
  claimTitle: 'C1',
  claimDesc:
    'Students can read closely and analytically to comprehend a range of increasingly complex literary and informational texts.',
  downloadBtnProps: { url: 'test/url', filename: 'test-file-name' },
  targetTitle: 'English Language Arts Specification: Grade 6 Claim 1 Target 1',
  targetDesc: 'placeholder'
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

export const targetMock: ITarget = {
  title: '',
  shortCode: '',
  description: '',
  standards: [],
  DOK: [],
  interactionType: '',
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
