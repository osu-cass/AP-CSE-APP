import { CSEFilterOptions } from '../FilterHelper';

export const filterOptions: CSEFilterOptions = {
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
      label: 'Math',
      claimCodes: ['m1', 'm2']
    },
    {
      code: 'eng',
      label: 'English',
      claimCodes: ['e1', 'e2']
    }
  ],
  claims: [
    {
      code: 'm1',
      label: 'Problem Solving',
      targetCodes: ['sr', 'pf']
    },
    {
      code: 'm2',
      label: 'Other math stuff',
      targetCodes: ['mc']
    },
    {
      code: 'e1',
      label: 'Writing',
      targetCodes: ['sr', 'es']
    },
    {
      code: 'e2',
      label: 'Reading',
      targetCodes: ['sr']
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
