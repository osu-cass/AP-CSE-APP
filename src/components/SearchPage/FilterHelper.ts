import {
  SubjectModel,
  SearchBaseModel,
  AdvancedFilterCategoryModel,
  FilterType
} from '@osu-cass/sb-components';
import { CSEAdvancedFilterModels } from './Filter';

/**
 * We're using this instead of ClaimModel from sb-components because
 * ClaimModel has targetCodes of type number[] | undefined
 *
 * @interface CSEClaimModel
 * @extends {SearchBaseModel}
 */
export interface CSEClaimModel extends SearchBaseModel {
  targetCodes?: string[];
}

export interface CSEFilterOptions {
  grades: SearchBaseModel[];
  subjects: SubjectModel[];
  claims: CSEClaimModel[];
  targets: SearchBaseModel[];
}

export interface CSEFilterModel {
  grades: string[];
  subject?: string;
  claim?: string;
  target?: string;
}

export function createFilters(filterOptions: CSEFilterOptions): CSEAdvancedFilterModels {
  const gradeFilter: AdvancedFilterCategoryModel = {
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

  const subjectFilter: AdvancedFilterCategoryModel = {
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

  const claimFilter: AdvancedFilterCategoryModel = {
    isMultiSelect: false,
    displayAllButton: true,
    disabled: false,
    label: 'Claim',
    code: FilterType.Claim,
    filterOptions: []
  };

  const targetFilter: AdvancedFilterCategoryModel = {
    isMultiSelect: false,
    displayAllButton: true,
    disabled: false,
    label: 'Target',
    code: FilterType.Target,
    filterOptions: []
  };

  return { gradeFilter, subjectFilter, claimFilter, targetFilter };
}

export function updateFilters(
  currentFilters: CSEAdvancedFilterModels,
  filterOptions: CSEFilterOptions,
  appliedFilters: CSEFilterModel
): CSEAdvancedFilterModels {
  // update grades
  currentFilters.gradeFilter.filterOptions.forEach(
    fo => (fo.isSelected = appliedFilters.grades.indexOf(fo.key) !== -1)
  );

  // update subjects
  currentFilters.subjectFilter.filterOptions.forEach(
    fo => (fo.isSelected = appliedFilters.subject === fo.key)
  );

  // update claims
  const selectedSub = find(filterOptions.subjects, s => s.code === appliedFilters.subject);
  const visibleClaimCodes = selectedSub ? selectedSub.claimCodes : undefined;
  if (visibleClaimCodes) {
    currentFilters.claimFilter.disabled = false;
    currentFilters.claimFilter.filterOptions = filterOptions.claims
      .filter(c => visibleClaimCodes.indexOf(c.code) !== -1)
      .map(c => ({
        label: c.label,
        key: c.code,
        isSelected: appliedFilters.claim === c.code,
        filterType: FilterType.Claim
      }));

    // update targets
    const selectedClaim = find(filterOptions.claims, c => c.code === appliedFilters.claim);
    const visibleTargetCodes = selectedClaim ? selectedClaim.targetCodes : undefined;
    if (visibleTargetCodes) {
      currentFilters.targetFilter.disabled = false;
      currentFilters.targetFilter.filterOptions = filterOptions.targets
        .filter(t => visibleTargetCodes.indexOf(t.code) !== -1)
        .map(t => ({
          label: t.label,
          key: t.code,
          isSelected: appliedFilters.target === t.code
        }));
    } else {
      currentFilters.targetFilter.disabled = true;
    }
  } else {
    currentFilters.claimFilter.disabled = true;
  }

  return currentFilters;
}

export function sanitizeFilter(
  filter: CSEFilterModel,
  filterOptions: CSEFilterOptions
): CSEFilterModel {
  // are all grades in grade filter options?
  const grades = filter.grades.filter(
    gCode => find(filterOptions.grades, g => g.code === gCode) !== undefined
  );

  // is subject in subject filter options?
  const subjectOption = find(filterOptions.subjects, s => s.code === filter.subject)
  const subject = subjectOption
    ? filter.subject
    : undefined;

  let claim: string;
  let target: string;
  if (subject) {
    claim = find(claim)
  }
  return {grades, subject, claim, target};
}

function find<T>(arr: T[], matcher: (el: T) => boolean): T | undefined {
  for (const el of arr) {
    if (matcher(el)) {
      return el;
    }
  }

  return undefined;
}
