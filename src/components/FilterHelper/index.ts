import {
  AdvancedFilterCategoryModel,
  FilterType,
  FilterOptionModel,
  SearchBaseModel
} from '@osu-cass/sb-components';

import { CSEAdvancedFilterModels } from '../FilterProps';
import { CSEFilterOptions, CSEFilterParams } from '../../models/filter';

/**
 * Create `AdvancedFilterCategoryModel`s from given options and params
 */
export function createFilters(
  options: CSEFilterOptions,
  params: CSEFilterParams
): CSEAdvancedFilterModels {
  return {
    gradeFilter: createGradeFilter(options.grades, params),
    subjectFilter: createSubjectFilter(options.subjects, params),
    claimFilter: options.claims ? createClaimFilter(options.claims, params) : undefined,
    targetFilter: options.targets ? createTargetFilter(options.targets, params) : undefined
  };
}

/**
 * Builds grade `AdvancedFilterCategoryModel` with display options customized for this app
 */
function createGradeFilter(
  allGrades: SearchBaseModel[],
  params: CSEFilterParams
): AdvancedFilterCategoryModel {
  return {
    isMultiSelect: true,
    displayAllButton: false,
    disabled: false,
    label: 'Grade',
    code: FilterType.Grade,
    filterOptions: allGrades.map(g => ({
      key: g.code,
      label: g.label,
      isSelected: params.grades.includes(g.code),
      filterType: FilterType.Grade
    }))
  };
}

/**
 * Builds subject `AdvancedFilterCategoryModel` with display options customized for this app
 */
function createSubjectFilter(
  allSubjects: SearchBaseModel[],
  params: CSEFilterParams
): AdvancedFilterCategoryModel {
  return {
    isMultiSelect: false,
    displayAllButton: false,
    disabled: false,
    label: 'Subject',
    code: FilterType.Subject,
    filterOptions: allSubjects.map(s => ({
      key: s.code,
      label: s.label,
      isSelected: params.subject === s.code,
      filterType: FilterType.Subject
    }))
  };
}

/**
 * Builds claim `AdvancedFilterCategoryModel` with display options customized for this app
 */
function createClaimFilter(
  allClaims: SearchBaseModel[],
  params: CSEFilterParams
): AdvancedFilterCategoryModel {
  return {
    isMultiSelect: false,
    displayAllButton: false,
    disabled: false,
    label: 'Claim',
    code: FilterType.Claim,
    filterOptions: allClaims.map(c => ({
      label: c.label,
      key: c.code,
      isSelected: params.claim === c.code,
      filterType: FilterType.Claim
    }))
  };
}

/**
 * Builds target `AdvancedFilterCategoryModel` with display options customized for this app
 */
function createTargetFilter(
  allTargets: SearchBaseModel[],
  params: CSEFilterParams
): AdvancedFilterCategoryModel {
  return {
    isMultiSelect: false,
    displayAllButton: false,
    disabled: false,
    label: 'Target',
    code: FilterType.Target,
    filterOptions: allTargets.map(t => ({
      label: t.label,
      key: t.code,
      isSelected: params.target === t.code,
      filterType: FilterType.Target
    }))
  };
}

/**
 * Remove any `params` that aren't in the `options` any more
 */
export function sanitizeParams(
  params: CSEFilterParams,
  options: CSEFilterOptions
): CSEFilterParams {
  // remove grades that arent in filter options
  const grades = params.grades.filter(
    gCode => options.grades.find(g => g.code === gCode) !== undefined
  );

  // remove subject if not in filter options
  const subjectOption = options.subjects.find(s => s.code === params.subject);
  const subject = subjectOption ? params.subject : undefined;
  const claim = ensureExists(options.claims, params.claim);
  const target = ensureExists(options.targets, params.target);
  const filter = params.filter;

  return { grades, subject, claim, target, filter };
}

/**
 * Ensure that `toFind` exists in `toSearch` array. If either are `undefined`, the result will be `undefined`
 */
function ensureExists(toSearch?: SearchBaseModel[], toFind?: string): string | undefined {
  let found: string | undefined;
  if (toSearch && toFind) {
    const option = toSearch.find(c => c.code === toFind);
    found = option ? toFind : undefined;
  }

  return found;
}

/**
 * Update `CSEFilterParams` based on the changes returned from the `DesktopFilter.onUpdate`
 * callback. Returns new `CSEFilterParams`.
 * @param currentParams The old params object
 * @param changeType What filter is being changed? Should only
 * @param change
 */
export function paramsFromFilter(
  currentParams: CSEFilterParams,
  changeType: FilterType,
  change?: FilterOptionModel
): CSEFilterParams {
  if (change) {
    if (change.isSelected) {
      return paramsFromFilterChangeSelected(currentParams, changeType, change);
    }

    return paramsFromFilterChangeNotSelected(currentParams, changeType, change);
  }

  return paramsFromFilterNoChange(currentParams, changeType);
}

/**
 * Handles specific case where the change is undefined, meaning that given
 * `FilterType` gets cleared
 */
function paramsFromFilterNoChange(
  currentParams: CSEFilterParams,
  changeType: FilterType
): CSEFilterParams {
  const newParams = { ...currentParams };

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

/**
 * Handles specific case where the changed filter is marked `isSelected`, meaning the new
 * `CSEFilterParams` state should have the given `FilterType` unselected.
 */
function paramsFromFilterChangeSelected(
  currentParams: CSEFilterParams,
  changeType: FilterType,
  change: FilterOptionModel
): CSEFilterParams {
  const newParams = { ...currentParams };
  // change.isSelected has previous state, therefore is true if it needs to be unselected
  // and false if needs to be selected
  switch (changeType) {
    case FilterType.Grade:
      if (newParams.grades.includes(change.key)) {
        // remove the given grade key from `CSEFilterParams.grades` if it exists
        newParams.grades = newParams.grades.filter(g => g !== change.key);
      }
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

/**
 * Handles specific case where the changed filter `isSelected` is marked `false`, meaning the new
 * `CSEFilterParams` state should have the given `FilterType` selected.
 */
function paramsFromFilterChangeNotSelected(
  currentParams: CSEFilterParams,
  changeType: FilterType,
  change: FilterOptionModel
): CSEFilterParams {
  const newParams = { ...currentParams };
  // change.isSelected has previous state, therefore is true if it needs to be unselected
  // and false if needs to be selected
  switch (changeType) {
    case FilterType.Grade:
      if (!newParams.grades.includes(change.key)) {
        // add the given grade key to `CSEFilterParams.grades` if it isn't there already
        newParams.grades = [...newParams.grades, change.key];
      }
      break;
    case FilterType.Subject:
      newParams.subject = change.key;
      break;
    case FilterType.Claim:
      newParams.claim = change.key;
      break;
    case FilterType.Target:
      newParams.target = change.key;
      break;
    default:
  }

  return newParams;
}

/**
 *
 */
export function paramsFromMobileFilter(
  currentParams: CSEFilterParams,
  change: string[],
  changeType: FilterType
): CSEFilterParams {
  const newParams = { ...currentParams };
  switch (changeType) {
    case FilterType.Grade:
      newParams.grades = change;
      break;
    case FilterType.Subject:
      newParams.subject = change.length > 0 ? change[0] : undefined;
      break;
    case FilterType.Claim:
      newParams.claim = change.length > 0 ? change[0] : undefined;
      break;
    case FilterType.Target:
      newParams.target = change.length > 0 ? change[0] : undefined;
      break;
    default:
  }

  return newParams;
}
