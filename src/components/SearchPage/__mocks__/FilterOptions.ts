import {
  FilterOptionsGradesSubjects,
  FilterOptionsClaims,
  FilterOptionsTargets
} from '../../../clients/search';

export const noParams: FilterOptionsGradesSubjects = {
  subject: [
    {
      code: 'English Language Arts',
      label: 'English Language Arts'
    },
    {
      code: 'Math',
      label: 'Math'
    }
  ],
  grades: [
    {
      code: '3',
      label: '3'
    },
    {
      code: '4',
      label: '4'
    },
    {
      code: '5',
      label: '5'
    },
    {
      code: '6',
      label: '6'
    },
    {
      code: '7',
      label: '7'
    },
    {
      code: '8',
      label: '8'
    },
    {
      code: '9',
      label: '9'
    },
    {
      code: '10',
      label: '10'
    },
    {
      code: '11',
      label: '11'
    },
    {
      code: '12',
      label: '12'
    }
  ]
};

export const subjectGrades: FilterOptionsClaims = {
  claimNumbers: [
    {
      code: 'Informational Writing',
      label: 'Informational Writing'
    },
    {
      code: 'C1',
      label: 'C1'
    },
    {
      code: 'Narrative Writing',
      label: 'Narrative Writing'
    },
    {
      code: 'Opinion Writing',
      label: 'Opinion Writing'
    },
    {
      code: 'C2',
      label: 'C2'
    },
    {
      code: 'C3',
      label: 'C3'
    },
    {
      code: 'C4',
      label: 'C4'
    }
  ]
};

export const subjectGradeClaims: FilterOptionsTargets = {
  targetShortCodes: [
    {
      code: 'E.G3.C1RL.T7',
      label: 'E.G3.C1RL.T7'
    },
    {
      code: 'E.G3.C1RL.T3',
      label: 'E.G3.C1RL.T3'
    },
    {
      code: 'E.G3.C1RI.T11',
      label: 'E.G3.C1RI.T11'
    }
  ]
};
