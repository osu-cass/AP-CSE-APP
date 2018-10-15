import {
  SubjectModel,
  SearchBaseModel,
  AdvancedFilterCategoryModel,
  FilterType,
  FilterOptionModel
} from '@osu-cass/sb-components';
import { CSEAdvancedFilterModels } from './';

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

export interface CSEFilterParams {
  grades: string[];
  subject?: string;
  claim?: string;
  target?: string;
}

export function createFilters(
  filterOptions: CSEFilterOptions,
  appliedParams: CSEFilterParams
): CSEAdvancedFilterModels {
  const gradeFilter: AdvancedFilterCategoryModel = {
    isMultiSelect: true,
    displayAllButton: false,
    disabled: false,
    label: 'Grade',
    code: FilterType.Grade,
    filterOptions: filterOptions.grades.map(g => ({
      key: g.code,
      label: g.label,
      isSelected: appliedParams.grades.indexOf(g.code) !== -1,
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
      isSelected: appliedParams.subject === s.code,
      filterType: FilterType.Subject
    }))
  };

  const selectedSub = find(filterOptions.subjects, s => s.code === appliedParams.subject);
  const visibleClaimCodes = selectedSub ? selectedSub.claimCodes : undefined;
  const claimFilter: AdvancedFilterCategoryModel = {
    isMultiSelect: false,
    displayAllButton: true,
    disabled: !visibleClaimCodes,
    label: 'Claim',
    code: FilterType.Claim,
    filterOptions: (visibleClaimCodes ? filterOptions.claims : [])
      .filter(c => (visibleClaimCodes || []).indexOf(c.code) !== -1)
      .map(c => ({
        label: c.label,
        key: c.code,
        isSelected: appliedParams.claim === c.code,
        filterType: FilterType.Claim
      }))
  };

  const selectedClaim = find(filterOptions.claims, c => c.code === appliedParams.claim);
  const visibleTargetCodes = selectedClaim ? selectedClaim.targetCodes : undefined;
  const targetFilter: AdvancedFilterCategoryModel = {
    isMultiSelect: false,
    displayAllButton: true,
    disabled: !visibleTargetCodes,
    label: 'Target',
    code: FilterType.Target,
    filterOptions: (visibleTargetCodes ? filterOptions.targets : [])
      .filter(t => (visibleTargetCodes || []).indexOf(t.code) !== -1)
      .map(t => ({
        label: t.label,
        key: t.code,
        isSelected: appliedParams.target === t.code,
        filterType: FilterType.Target
      }))
  };

  return { gradeFilter, subjectFilter, claimFilter, targetFilter };
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
