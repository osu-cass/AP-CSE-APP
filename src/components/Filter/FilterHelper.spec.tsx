import { createFilters, sanitizeParams, paramsFromFilter } from './FilterHelper';
import { filterOptions } from './__mocks__';
import {
  FilterType,
  AdvancedFilterCategoryModel,
  FilterOptionModel
} from '@osu-cass/sb-components';

describe('FilterHelper.createFilters for grade', () => {
  let expectation: AdvancedFilterCategoryModel;
  beforeEach(() => {
    expectation = {
      isMultiSelect: true,
      displayAllButton: false,
      disabled: false,
      label: 'Grade',
      code: FilterType.Grade,
      filterOptions: filterOptions.grades.map(g => ({
        key: g.code,
        label: g.label,
        isSelected: false,
        filterType: FilterType.Grade
      }))
    };
  });

  it('grade no params', () => {
    const params = { grades: [] };
    const result = createFilters(filterOptions, params);

    expect(result.gradeFilter).toEqual(expectation);
  });

  it('grade single selected', () => {
    const params = { grades: ['ms'] };
    const result = createFilters(filterOptions, params);

    const expectation: AdvancedFilterCategoryModel = {
      isMultiSelect: true,
      displayAllButton: false,
      disabled: false,
      label: 'Grade',
      code: FilterType.Grade,
      filterOptions: filterOptions.grades.map(g => ({
        key: g.code,
        label: g.label,
        isSelected: g.code === 'ms',
        filterType: FilterType.Grade
      }))
    };
    expect(result.gradeFilter).toEqual(expectation);
  });

  it('grade multiple selected', () => {
    const params = { grades: ['ms', 'hs'] };
    const result = createFilters(filterOptions, params);

    const expectation: AdvancedFilterCategoryModel = {
      isMultiSelect: true,
      displayAllButton: false,
      disabled: false,
      label: 'Grade',
      code: FilterType.Grade,
      filterOptions: filterOptions.grades.map(g => ({
        key: g.code,
        label: g.label,
        isSelected: g.code === 'ms' || g.code === 'hs',
        filterType: FilterType.Grade
      }))
    };
    expect(result.gradeFilter).toEqual(expectation);
  });

  it('subject none selected', () => {
    const params = { grades: [] };
    const result = createFilters(filterOptions, params);

    const expectation: AdvancedFilterCategoryModel = {
      isMultiSelect: false,
      displayAllButton: true,
      disabled: false,
      label: 'Subject',
      code: FilterType.Subject,
      filterOptions: filterOptions.subjects.map(s => ({
        key: s.code,
        label: s.label,
        isSelected: false,
        filterType: FilterType.Subject
      }))
    };
    expect(result.subjectFilter).toEqual(expectation);
  });

  it('subject math selected', () => {
    const params = { grades: [], subject: 'math' };
    const result = createFilters(filterOptions, params);

    const expectation: AdvancedFilterCategoryModel = {
      isMultiSelect: false,
      displayAllButton: true,
      disabled: false,
      label: 'Subject',
      code: FilterType.Subject,
      filterOptions: filterOptions.subjects.map(s => ({
        key: s.code,
        label: s.label,
        isSelected: s.code === 'math',
        filterType: FilterType.Subject
      }))
    };
    expect(result.subjectFilter).toEqual(expectation);
  });

  it('claim none selected', () => {
    const params = { grades: [], subject: 'math' };
    const result = createFilters(filterOptions, params);

    const expectation: AdvancedFilterCategoryModel = {
      isMultiSelect: false,
      displayAllButton: true,
      disabled: false,
      label: 'Claim',
      code: FilterType.Claim,
      filterOptions: [
        {
          key: 'm1',
          label: 'Problem Solving',
          isSelected: false,
          filterType: FilterType.Claim
        },
        {
          key: 'm2',
          label: 'Other math stuff',
          isSelected: false,
          filterType: FilterType.Claim
        }
      ]
    };
    expect(result.claimFilter).toEqual(expectation);
  });

  it('claim m1 selected', () => {
    const params = { grades: [], subject: 'math', claim: 'm1' };
    const result = createFilters(filterOptions, params);

    const expectation: AdvancedFilterCategoryModel = {
      isMultiSelect: false,
      displayAllButton: true,
      disabled: false,
      label: 'Claim',
      code: FilterType.Claim,
      filterOptions: [
        {
          key: 'm1',
          label: 'Problem Solving',
          isSelected: true,
          filterType: FilterType.Claim
        },
        {
          key: 'm2',
          label: 'Other math stuff',
          isSelected: false,
          filterType: FilterType.Claim
        }
      ]
    };
    expect(result.claimFilter).toEqual(expectation);
  });

  it('target none selected', () => {
    const params = { grades: [], subject: 'math', claim: 'm1' };
    const result = createFilters(filterOptions, params);

    const expectation: AdvancedFilterCategoryModel = {
      isMultiSelect: false,
      displayAllButton: true,
      disabled: false,
      label: 'Target',
      code: FilterType.Target,
      filterOptions: [
        {
          key: 'sr',
          label: 'Short Response',
          isSelected: false,
          filterType: FilterType.Target
        },
        {
          key: 'pf',
          label: 'Proof',
          isSelected: false,
          filterType: FilterType.Target
        }
      ]
    };
    expect(result.targetFilter).toEqual(expectation);
  });

  it('target pf selected', () => {
    const params = { grades: [], subject: 'math', claim: 'm1', target: 'pf' };
    const result = createFilters(filterOptions, params);

    const expectation: AdvancedFilterCategoryModel = {
      isMultiSelect: false,
      displayAllButton: true,
      disabled: false,
      label: 'Target',
      code: FilterType.Target,
      filterOptions: [
        {
          key: 'sr',
          label: 'Short Response',
          isSelected: false,
          filterType: FilterType.Target
        },
        {
          key: 'pf',
          label: 'Proof',
          isSelected: true,
          filterType: FilterType.Target
        }
      ]
    };
    expect(result.targetFilter).toEqual(expectation);
  });

  it('disables claim for no subject', () => {
    const params = { grades: [] };
    const result = createFilters(filterOptions, params);

    expect(result.claimFilter.disabled).toEqual(true);
  });

  it('disables target for no subject', () => {
    const params = { grades: [] };
    const result = createFilters(filterOptions, params);

    expect(result.targetFilter.disabled).toEqual(true);
  });

  it('disables target for no claim', () => {
    const params = { grades: [], subject: 'math' };
    const result = createFilters(filterOptions, params);

    expect(result.targetFilter.disabled).toEqual(true);
  });
});

describe('FilterHelper.sanitizeParams', () => {
  it('does nothing with empty params', () => {
    const params = { grades: [] };
    const result = sanitizeParams(params, filterOptions);

    expect(result).toEqual(params);
  });

  it('does nothing on correct case', () => {
    const params = { grades: ['ms', 'hs'], subject: 'math', claim: 'm1', target: 'pf' };
    const result = sanitizeParams(params, filterOptions);

    expect(result).toEqual(params);
  });

  it('removes invalid claim', () => {
    const params = { grades: ['ms', 'hs'], subject: 'math', claim: 'invalid' };
    const result = sanitizeParams(params, filterOptions);

    const expected = { grades: ['ms', 'hs'], subject: 'math' };
    expect(result).toEqual(expected);
  });

  it('removes invalid target', () => {
    const params = { grades: ['ms', 'hs'], subject: 'math', claim: 'm1', target: 'invalid' };
    const result = sanitizeParams(params, filterOptions);

    const expected = { grades: ['ms', 'hs'], subject: 'math', claim: 'm1' };
    expect(result).toEqual(expected);
  });

  it('removes claim when no subject', () => {
    const params = { grades: ['ms', 'hs'], claim: 'm1' };
    const result = sanitizeParams(params, filterOptions);

    const expected = { grades: ['ms', 'hs'] };
    expect(result).toEqual(expected);
  });

  it('removes target when no subject', () => {
    const params = { grades: ['ms', 'hs'], target: 'pf' };
    const result = sanitizeParams(params, filterOptions);

    const expected = { grades: ['ms', 'hs'] };
    expect(result).toEqual(expected);
  });

  it('removes target when no claim', () => {
    const params = { grades: ['ms', 'hs'], subject: 'math', target: 'pf' };
    const result = sanitizeParams(params, filterOptions);

    const expected = { grades: ['ms', 'hs'], subject: 'math' };
    expect(result).toEqual(expected);
  });
});

describe('FilterHelper.paramsFromFilter', () => {
  it('no change, type grade', () => {
    const params = { grades: ['ms', 'hs'], subject: 'math', claim: 'm1', target: 'pf' };
    const result = paramsFromFilter(params, FilterType.Grade, undefined);

    const expected = { grades: [], subject: 'math', claim: 'm1', target: 'pf' };
    expect(result).toEqual(expected);
  });

  it('no change, type subject', () => {
    const params = { grades: ['ms', 'hs'], subject: 'math', claim: 'm1', target: 'pf' };
    const result = paramsFromFilter(params, FilterType.Subject, undefined);

    const expected = { grades: ['ms', 'hs'], claim: 'm1', target: 'pf' };
    expect(result).toEqual(expected);
  });

  it('no change, type claim', () => {
    const params = { grades: ['ms', 'hs'], subject: 'math', claim: 'm1', target: 'pf' };
    const result = paramsFromFilter(params, FilterType.Claim, undefined);

    const expected = { grades: ['ms', 'hs'], subject: 'math', target: 'pf' };
    expect(result).toEqual(expected);
  });

  it('no change, type target', () => {
    const params = { grades: ['ms', 'hs'], subject: 'math', claim: 'm1', target: 'pf' };
    const result = paramsFromFilter(params, FilterType.Target, undefined);

    const expected = { grades: ['ms', 'hs'], subject: 'math', claim: 'm1' };
    expect(result).toEqual(expected);
  });

  it('grade added', () => {
    const params = { grades: ['ms', 'hs'], subject: 'math', claim: 'm1', target: 'pf' };
    const change = {
      label: 'Elementary',
      key: 'elem',
      isSelected: false,
      filterType: FilterType.Grade
    };
    const result = paramsFromFilter(params, FilterType.Grade, change);

    const expected = { grades: ['ms', 'hs', 'elem'], subject: 'math', claim: 'm1', target: 'pf' };
    expect(result).toEqual(expected);
  });

  it('grade removed', () => {
    const params = { grades: ['ms', 'hs', 'elem'], subject: 'math', claim: 'm1', target: 'pf' };
    const change = {
      label: 'Elementary',
      key: 'elem',
      isSelected: true,
      filterType: FilterType.Grade
    };
    const result = paramsFromFilter(params, FilterType.Grade, change);

    const expected = { grades: ['ms', 'hs'], subject: 'math', claim: 'm1', target: 'pf' };
    expect(result).toEqual(expected);
  });

  it('grade added, already there', () => {
    const params = { grades: ['ms', 'hs', 'elem'], subject: 'math', claim: 'm1', target: 'pf' };
    const change = {
      label: 'Elementary',
      key: 'elem',
      isSelected: false,
      filterType: FilterType.Grade
    };
    const result = paramsFromFilter(params, FilterType.Grade, change);

    const expected = { grades: ['ms', 'hs', 'elem'], subject: 'math', claim: 'm1', target: 'pf' };
    expect(result).toEqual(expected);
  });

  it('grade removed, already gone', () => {
    const params = { grades: ['ms', 'hs'], subject: 'math', claim: 'm1', target: 'pf' };
    const change = {
      label: 'Elementary',
      key: 'elem',
      isSelected: true,
      filterType: FilterType.Grade
    };
    const result = paramsFromFilter(params, FilterType.Grade, change);

    const expected = { grades: ['ms', 'hs'], subject: 'math', claim: 'm1', target: 'pf' };
    expect(result).toEqual(expected);
  });

  it('subject selected', () => {
    const params = { grades: ['ms', 'hs'], subject: undefined, claim: 'm1', target: 'pf' };
    const change = {
      label: 'Math',
      key: 'math',
      isSelected: false,
      filterType: FilterType.Subject
    };
    const result = paramsFromFilter(params, FilterType.Subject, change);

    const expected = { grades: ['ms', 'hs'], subject: 'math', claim: 'm1', target: 'pf' };
    expect(result).toEqual(expected);
  });

  it('subject deselected', () => {
    const params = { grades: ['ms', 'hs'], subject: 'math', claim: 'm1', target: 'pf' };
    const change = {
      label: 'Math',
      key: 'math',
      isSelected: true,
      filterType: FilterType.Subject
    };
    const result = paramsFromFilter(params, FilterType.Subject, change);

    const expected = { grades: ['ms', 'hs'], subject: undefined, claim: 'm1', target: 'pf' };
    expect(result).toEqual(expected);
  });

  it('claim selected', () => {
    const params = { grades: ['ms', 'hs'], subject: 'math' };
    const change = {
      label: 'Problem Solving',
      key: 'm1',
      isSelected: false,
      filterType: FilterType.Claim
    };
    const result = paramsFromFilter(params, FilterType.Claim, change);

    const expected = { grades: ['ms', 'hs'], subject: 'math', claim: 'm1' };
    expect(result).toEqual(expected);
  });

  it('claim deselected', () => {
    const params = { grades: ['ms', 'hs'], subject: 'math', claim: 'm1' };
    const change = {
      label: 'Problem Solving',
      key: 'm1',
      isSelected: true,
      filterType: FilterType.Claim
    };
    const result = paramsFromFilter(params, FilterType.Claim, change);

    const expected = { grades: ['ms', 'hs'], subject: 'math' };
    expect(result).toEqual(expected);
  });

  it('target selected', () => {
    const params = { grades: ['ms', 'hs'], subject: 'math', claim: 'm1' };
    const change = {
      label: 'Proof',
      key: 'pf',
      isSelected: false,
      filterType: FilterType.Target
    };
    const result = paramsFromFilter(params, FilterType.Target, change);

    const expected = { grades: ['ms', 'hs'], subject: 'math', claim: 'm1', target: 'pf' };
    expect(result).toEqual(expected);
  });

  it('target deselected', () => {
    const params = { grades: ['ms', 'hs'], subject: 'math', claim: 'm1', target: 'pf' };
    const change = {
      label: 'Proof',
      key: 'pf',
      isSelected: true,
      filterType: FilterType.Target
    };
    const result = paramsFromFilter(params, FilterType.Target, change);

    const expected = { grades: ['ms', 'hs'], subject: 'math', claim: 'm1' };
    expect(result).toEqual(expected);
  });
});
