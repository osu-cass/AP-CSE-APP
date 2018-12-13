import { createFilters, sanitizeParams, paramsFromFilter } from '.';
import { filterOptionsGS, filterOptionsGSC, filterOptionsGSCT } from './__mocks__';
import {
  FilterType,
  AdvancedFilterCategoryModel,
  FilterOptionModel
} from '@osu-cass/sb-components';
import { CSEFilterParams } from '../../models/filter';

// tslint:disable:no-non-null-assertion

describe('FilterHelper.createFilters', () => {
  describe('grade', () => {
    let expectation: AdvancedFilterCategoryModel;
    beforeEach(() => {
      expectation = {
        isMultiSelect: true,
        displayAllButton: false,
        disabled: false,
        label: 'Grade',
        code: FilterType.Grade,
        filterOptions: filterOptionsGSCT.grades.map(g => ({
          key: g.code,
          label: g.label,
          isSelected: false,
          filterType: FilterType.Grade
        }))
      };
    });

    it('no params', () => {
      const params = { grades: [] };
      const result = createFilters(filterOptionsGSCT, params);

      expect(result.gradeFilter).toEqual(expectation);
    });

    it('single selected', () => {
      const params = { grades: ['ms'] };
      const result = createFilters(filterOptionsGSCT, params);

      expectation.filterOptions.find(f => f.key === 'ms')!.isSelected = true;
      expect(result.gradeFilter).toEqual(expectation);
    });

    it('multiple selected', () => {
      const params = { grades: ['ms', 'hs'] };
      const result = createFilters(filterOptionsGSCT, params);

      expectation.filterOptions.find(f => f.key === 'ms')!.isSelected = true;
      expectation.filterOptions.find(f => f.key === 'hs')!.isSelected = true;

      expect(result.gradeFilter).toEqual(expectation);
    });
  });

  describe('subject', () => {
    let expectation: AdvancedFilterCategoryModel;
    beforeEach(() => {
      expectation = {
        isMultiSelect: false,
        displayAllButton: false,
        disabled: false,
        label: 'Subject',
        code: FilterType.Subject,
        filterOptions: filterOptionsGSCT.subjects.map(s => ({
          key: s.code,
          label: s.label,
          isSelected: false,
          filterType: FilterType.Subject
        }))
      };
    });

    it('none selected', () => {
      const params = { grades: [] };
      const result = createFilters(filterOptionsGSCT, params);

      expect(result.subjectFilter).toEqual(expectation);
    });

    it('math selected', () => {
      const params = { grades: [], subject: 'math' };
      const result = createFilters(filterOptionsGSCT, params);

      expectation.filterOptions.find(f => f.key === 'math')!.isSelected = true;
      expect(result.subjectFilter).toEqual(expectation);
    });
  });

  describe('claim', () => {
    let expectation: AdvancedFilterCategoryModel;
    beforeEach(() => {
      expectation = {
        isMultiSelect: false,
        displayAllButton: false,
        disabled: false,
        label: 'Claim',
        code: FilterType.Claim,
        filterOptions: filterOptionsGSCT.claims.map(c => ({
          key: c.code,
          label: c.label,
          isSelected: false,
          filterType: FilterType.Claim
        }))
      };
    });

    it('none selected', () => {
      const params = { grades: [], subject: 'math' };
      const result = createFilters(filterOptionsGSCT, params);

      expect(result.claimFilter).toEqual(expectation);
    });

    it('m1 selected', () => {
      const params = { grades: [], subject: 'math', claim: 'm1' };
      const result = createFilters(filterOptionsGSCT, params);

      expectation.filterOptions.find(f => f.key === 'm1')!.isSelected = true;
      expect(result.claimFilter).toEqual(expectation);
    });
  });

  describe('target', () => {
    let expectation: AdvancedFilterCategoryModel;
    beforeEach(() => {
      expectation = {
        isMultiSelect: false,
        displayAllButton: false,
        disabled: false,
        label: 'Target',
        code: FilterType.Target,
        filterOptions: filterOptionsGSCT.targets.map(t => ({
          key: t.code,
          label: t.label,
          isSelected: false,
          filterType: FilterType.Target
        }))
      };
    });

    it('none selected', () => {
      const params = { grades: [], subject: 'math', claim: 'm1' };
      const result = createFilters(filterOptionsGSCT, params);

      expect(result.targetFilter).toEqual(expectation);
    });

    it('target pf selected', () => {
      const params = { grades: [], subject: 'math', claim: 'm1', target: 'pf' };
      const result = createFilters(filterOptionsGSCT, params);

      expectation.filterOptions.find(f => f.key === 'pf')!.isSelected = true;
      expect(result.targetFilter).toEqual(expectation);
    });
  });
});

describe('FilterHelper.sanitizeParams', () => {
  let params: CSEFilterParams;
  beforeEach(() => {
    params = { grades: ['ms', 'hs'], subject: 'math', claim: 'm1', target: 'pf' };
  });

  it('does nothing with empty params', () => {
    const params = { grades: [] };
    const result = sanitizeParams(params, filterOptionsGS);

    expect(result).toEqual(params);
  });

  it('does nothing on correct case', () => {
    const result = sanitizeParams(params, filterOptionsGSCT);

    expect(result).toEqual(params);
  });

  it('removes invalid claim', () => {
    params.claim = 'invalid';
    params.target = undefined;
    const result = sanitizeParams(params, filterOptionsGSC);

    const expected = { grades: ['ms', 'hs'], subject: 'math' };
    expect(result).toEqual(expected);
  });

  it('removes invalid target', () => {
    params.target = 'invalid';
    const result = sanitizeParams(params, filterOptionsGSCT);

    const expected = { grades: ['ms', 'hs'], subject: 'math', claim: 'm1' };
    expect(result).toEqual(expected);
  });

  it('removes claim when no subject', () => {
    params.subject = undefined;
    params.target = undefined;
    const result = sanitizeParams(params, filterOptionsGS);

    const expected = { grades: ['ms', 'hs'] };
    expect(result).toEqual(expected);
  });

  it('removes target when no subject', () => {
    params.subject = undefined;
    params.claim = undefined;
    const result = sanitizeParams(params, filterOptionsGS);

    const expected = { grades: ['ms', 'hs'] };
    expect(result).toEqual(expected);
  });

  it('removes target when no claim', () => {
    params.claim = undefined;
    const result = sanitizeParams(params, filterOptionsGS);

    const expected = { grades: ['ms', 'hs'], subject: 'math' };
    expect(result).toEqual(expected);
  });
});

describe('FilterHelper.paramsFromFilterNoChange', () => {
  const defaultParams = { grades: ['ms', 'hs'], subject: 'math', claim: 'm1', target: 'pf' };

  it('no change, type grade', () => {
    const result = paramsFromFilter(defaultParams, FilterType.Grade, undefined);

    const expected = { grades: [], subject: 'math', claim: 'm1', target: 'pf' };
    expect(result).toEqual(expected);
  });

  it('no change, type subject', () => {
    const result = paramsFromFilter(defaultParams, FilterType.Subject, undefined);

    const expected = { grades: ['ms', 'hs'], claim: 'm1', target: 'pf' };
    expect(result).toEqual(expected);
  });

  it('no change, type claim', () => {
    const result = paramsFromFilter(defaultParams, FilterType.Claim, undefined);

    const expected = { grades: ['ms', 'hs'], subject: 'math', target: 'pf' };
    expect(result).toEqual(expected);
  });

  it('no change, type target', () => {
    const result = paramsFromFilter(defaultParams, FilterType.Target, undefined);

    const expected = { grades: ['ms', 'hs'], subject: 'math', claim: 'm1' };
    expect(result).toEqual(expected);
  });
});

describe('FilterHelper.paramsFromFilterChange', () => {
  describe('grade', () => {
    it('grade added', () => {
      const params = { grades: ['ms', 'hs'], subject: 'math', claim: 'm1', target: 'pf' };
      const change = { label: '', key: 'elem', isSelected: false, filterType: FilterType.Grade };
      const result = paramsFromFilter(params, FilterType.Grade, change);

      const expected = { grades: ['ms', 'hs', 'elem'], subject: 'math', claim: 'm1', target: 'pf' };
      expect(result).toEqual(expected);
    });

    it('grade removed', () => {
      const params = { grades: ['ms', 'hs', 'elem'], subject: 'math', claim: 'm1', target: 'pf' };
      const change = { label: '', key: 'elem', isSelected: true, filterType: FilterType.Grade };
      const result = paramsFromFilter(params, FilterType.Grade, change);

      const expected = { grades: ['ms', 'hs'], subject: 'math', claim: 'm1', target: 'pf' };
      expect(result).toEqual(expected);
    });

    it('grade added, already there', () => {
      const params = { grades: ['ms', 'hs', 'elem'], subject: 'math', claim: 'm1', target: 'pf' };
      const change = { label: '', key: 'elem', isSelected: false, filterType: FilterType.Grade };
      const result = paramsFromFilter(params, FilterType.Grade, change);

      const expected = { grades: ['ms', 'hs', 'elem'], subject: 'math', claim: 'm1', target: 'pf' };
      expect(result).toEqual(expected);
    });

    it('grade removed, already gone', () => {
      const params = { grades: ['ms', 'hs'], subject: 'math', claim: 'm1', target: 'pf' };
      const change = { label: '', key: 'elem', isSelected: true, filterType: FilterType.Grade };
      const result = paramsFromFilter(params, FilterType.Grade, change);

      const expected = { grades: ['ms', 'hs'], subject: 'math', claim: 'm1', target: 'pf' };
      expect(result).toEqual(expected);
    });
  });

  describe('subject', () => {
    it('subject selected', () => {
      const params = { grades: ['ms', 'hs'], subject: undefined, claim: 'm1', target: 'pf' };
      const change = { label: '', key: 'math', isSelected: false, filterType: FilterType.Subject };
      const result = paramsFromFilter(params, FilterType.Subject, change);

      const expected = { grades: ['ms', 'hs'], subject: 'math', claim: 'm1', target: 'pf' };
      expect(result).toEqual(expected);
    });

    it('subject deselected', () => {
      const params = { grades: ['ms', 'hs'], subject: 'math', claim: 'm1', target: 'pf' };
      const change = {
        label: '',
        key: 'math',
        isSelected: true,
        filterType: FilterType.Subject
      };
      const result = paramsFromFilter(params, FilterType.Subject, change);

      const expected = { grades: ['ms', 'hs'], subject: undefined, claim: 'm1', target: 'pf' };
      expect(result).toEqual(expected);
    });
  });

  describe('claim', () => {
    it('claim selected', () => {
      const params = { grades: ['ms', 'hs'], subject: 'math' };
      const change = { label: '', key: 'm1', isSelected: false, filterType: FilterType.Claim };
      const result = paramsFromFilter(params, FilterType.Claim, change);

      const expected = { grades: ['ms', 'hs'], subject: 'math', claim: 'm1' };
      expect(result).toEqual(expected);
    });

    it('claim deselected', () => {
      const params = { grades: ['ms', 'hs'], subject: 'math', claim: 'm1' };
      const change = { label: '', key: 'm1', isSelected: true, filterType: FilterType.Claim };
      const result = paramsFromFilter(params, FilterType.Claim, change);

      const expected = { grades: ['ms', 'hs'], subject: 'math' };
      expect(result).toEqual(expected);
    });
  });

  describe('target', () => {
    it('target selected', () => {
      const params = { grades: ['ms', 'hs'], subject: 'math', claim: 'm1' };
      const change = { label: '', key: 'pf', isSelected: false, filterType: FilterType.Target };
      const result = paramsFromFilter(params, FilterType.Target, change);

      const expected = { grades: ['ms', 'hs'], subject: 'math', claim: 'm1', target: 'pf' };
      expect(result).toEqual(expected);
    });

    it('target deselected', () => {
      const params = { grades: ['ms', 'hs'], subject: 'math', claim: 'm1', target: 'pf' };
      const change = { label: '', key: 'pf', isSelected: true, filterType: FilterType.Target };
      const result = paramsFromFilter(params, FilterType.Target, change);

      const expected = { grades: ['ms', 'hs'], subject: 'math', claim: 'm1' };
      expect(result).toEqual(expected);
    });
  });
});

// tslint:enable:no-non-null-assertion
