import {
  AdvancedFilterCategoryModel,
  FilterType,
  FilterOptionModel
} from '@osu-cass/sb-components';
import { CSEAdvancedFilterModels } from './';
import { CSEFilterOptions, CSEFilterParams } from '../../models/filter';

export function createFilters(
  options: CSEFilterOptions,
  params: CSEFilterParams
): CSEAdvancedFilterModels {
  return {
    gradeFilter: createGradeFilter(options, params),
    subjectFilter: createSubjectFilter(options, params),
    claimFilter: createClaimFilter(options, params),
    targetFilter: createTargetFilter(options, params)
  };
}

function createGradeFilter(
  options: CSEFilterOptions,
  params: CSEFilterParams
): AdvancedFilterCategoryModel {
  return {
    isMultiSelect: true,
    displayAllButton: false,
    disabled: false,
    label: 'Grade',
    code: FilterType.Grade,
    filterOptions: options.grades.map(g => ({
      key: g.code,
      label: g.label,
      isSelected: params.grades.indexOf(g.code) !== -1,
      filterType: FilterType.Grade
    }))
  };
}

function createSubjectFilter(
  options: CSEFilterOptions,
  params: CSEFilterParams
): AdvancedFilterCategoryModel {
  return {
    isMultiSelect: false,
    displayAllButton: true,
    disabled: false,
    label: 'Subject',
    code: FilterType.Subject,
    filterOptions: options.subjects.map(s => ({
      key: s.code,
      label: s.label,
      isSelected: params.subject === s.code,
      filterType: FilterType.Subject
    }))
  };
}

function createClaimFilter(
  options: CSEFilterOptions,
  params: CSEFilterParams
): AdvancedFilterCategoryModel {
  const selectedSub = find(options.subjects, s => s.code === params.subject);
  const visibleClaimCodes = selectedSub ? selectedSub.claimCodes : undefined;

  return {
    isMultiSelect: false,
    displayAllButton: true,
    disabled: !visibleClaimCodes,
    label: 'Claim',
    code: FilterType.Claim,
    filterOptions: (visibleClaimCodes ? options.claims : [])
      .filter(c => (visibleClaimCodes || []).indexOf(c.code) !== -1)
      .map(c => ({
        label: c.label,
        key: c.code,
        isSelected: params.claim === c.code,
        filterType: FilterType.Claim
      }))
  };
}

function createTargetFilter(
  options: CSEFilterOptions,
  params: CSEFilterParams
): AdvancedFilterCategoryModel {
  const selectedClaim = find(options.claims, c => c.code === params.claim);
  const visibleTargetCodes = selectedClaim ? selectedClaim.targetCodes : undefined;

  return {
    isMultiSelect: false,
    displayAllButton: true,
    disabled: !visibleTargetCodes,
    label: 'Target',
    code: FilterType.Target,
    filterOptions: (visibleTargetCodes ? options.targets : [])
      .filter(t => (visibleTargetCodes || []).indexOf(t.code) !== -1)
      .map(t => ({
        label: t.label,
        key: t.code,
        isSelected: params.target === t.code,
        filterType: FilterType.Target
      }))
  };
}

export function sanitizeParams(
  params: CSEFilterParams,
  filterOptions: CSEFilterOptions
): CSEFilterParams {
  // are all grades in grade filter options?
  const grades = params.grades.filter(
    gCode => find(filterOptions.grades, g => g.code === gCode) !== undefined
  );

  // is subject in subject filter options?
  const subjectOption = find(filterOptions.subjects, s => s.code === params.subject);
  const subject = subjectOption ? params.subject : undefined;

  let claim: string | undefined;
  let target: string | undefined;
  if (subjectOption) {
    claim =
      (subjectOption.claimCodes || []).indexOf(params.claim || '') !== -1
        ? params.claim
        : undefined;
    const claimOption = find(filterOptions.claims, c => c.code === claim);
    if (claimOption) {
      target =
        (claimOption.targetCodes || []).indexOf(params.target || '') !== -1
          ? params.target
          : undefined;
    }
  }

  return { grades, subject, claim, target };
}

export function paramsFromFilter(
  currentParams: CSEFilterParams,
  changeType: FilterType,
  change?: FilterOptionModel
): CSEFilterParams {
  const newParams = { ...currentParams };
  if (!change) {
    switch (changeType) {
      case FilterType.Grade:
        newParams.grades = [];
        break;
      case FilterType.Subject:
        newParams.subject = undefined;
        break;
      case FilterType.Claim:
        newParams.claim = undefined;
        break;
      case FilterType.Target:
        newParams.target = undefined;
        break;
      default:
    }

    return newParams;
  }

  // change.isSelected has previous state, therefore is true if it needs to be unselected
  // and falce if needs to be selected
  switch (changeType) {
    case FilterType.Grade:
      if (!change.isSelected && newParams.grades.indexOf(change.key) === -1) {
        newParams.grades = [...newParams.grades, change.key];
      } else if (change.isSelected && newParams.grades.indexOf(change.key) !== -1) {
        newParams.grades = newParams.grades.filter(g => g !== change.key);
      }
      break;
    case FilterType.Subject:
      newParams.subject = change.isSelected ? undefined : change.key;
      break;
    case FilterType.Claim:
      newParams.claim = change.isSelected ? undefined : change.key;
      break;
    case FilterType.Target:
      newParams.target = change.isSelected ? undefined : change.key;
      break;
    default:
  }

  return newParams;
}

function find<T>(arr: T[], matcher: (el: T) => boolean): T | undefined {
  for (const el of arr) {
    if (matcher(el)) {
      return el;
    }
  }

  return undefined;
}
