import { FilterOptionsClaims, FilterOptionsGradesSubjects, FilterOptionsTargets } from '..';

export const foGradeSubject: FilterOptionsGradesSubjects = {
  grades: [
    {
      label: 'one',
      code: 'g1'
    },
    {
      label: 'two',
      code: 'g2'
    }
  ],
  subject: [
    {
      label: 'mathematics',
      code: 's1'
    },
    {
      label: 'language-arts',
      code: 's2'
    }
  ]
};

export const foClaim: FilterOptionsClaims = {
  claimNumbers: [
    {
      label: 'one',
      code: 'c1'
    },
    {
      label: 'two',
      code: 'c2'
    }
  ]
};

export const foTarget: FilterOptionsTargets = {
  targetShortCodes: [
    {
      label: 'one',
      code: 't1'
    },
    {
      label: 'two',
      code: 't2'
    }
  ]
};
