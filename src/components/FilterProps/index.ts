import {CSEFilterOptions, CSEFilterParams} from '../../models//filter';
import {AdvancedFilterCategoryModel} from '@osu-cass/sb-components';


export interface FilterProps {
    options: CSEFilterOptions;
    params: CSEFilterParams;
    onUpdate: (filter: CSEFilterParams) => void;
}

  export interface CSEAdvancedFilterModels {
    gradeFilter: AdvancedFilterCategoryModel;
    subjectFilter: AdvancedFilterCategoryModel;
    claimFilter?: AdvancedFilterCategoryModel;
    targetFilter?: AdvancedFilterCategoryModel;
}
