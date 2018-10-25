import { CSEFilterOptions } from '../../../models/filter';

const filterOptionsAll: CSEFilterOptions = {
  grades: [
    {
      code: 'elem',
      label: 'Elementary'
    },
    {
      code: 'ms',
      label: 'Middle School'
    },
    {
      code: 'hs',
      label: 'High School'
    }
  ],
  subjects: [
    {
      code: 'math',
      label: 'Math'
    },
    {
      code: 'eng',
      label: 'English'
    }
  ],
  claims: [
    {
      code: 'm1',
      label: 'Problem Solving'
    },
    {
      code: 'm2',
      label: 'Other math stuff'
    },
    {
      code: 'e1',
      label: 'Writing'
    },
    {
      code: 'e2',
      label: 'Reading'
    }
  ],
  targets: [
    {
      code: 'mc',
      label: 'Multiple Choice'
    },
    {
      code: 'sr',
      label: 'Short Response'
    },
    {
      code: 'es',
      label: 'Essay'
    },
    {
      code: 'pf',
      label: 'Proof'
    }
  ]
};

export const filterOptionsGS = {
  ...filterOptionsAll,
  claims: undefined,
  targets: undefined
};

// tslint:disable:no-non-null-assertion
export const filterOptionsGSC = {
  ...filterOptionsAll,
  claims: filterOptionsAll.claims!.filter(c => ['m1', 'm2'].includes(c.code)),
  targets: undefined
};

export const filterOptionsGSCT = {
  ...filterOptionsAll,
  claims: filterOptionsAll.claims!.filter(c => ['m1', 'm2'].includes(c.code)),
  targets: filterOptionsAll.targets!.filter(c => ['sr', 'pf'].includes(c.code))
};
// tslint:enable:no-non-null-assertion
