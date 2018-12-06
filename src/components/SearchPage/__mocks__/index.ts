import { SearchPageProps } from '..';
import { filterOptionsGS, filterOptionsGSC, filterOptionsGSCT } from '../../Filter/__mocks__';
import { FilterItemProps } from '../../FilterItem';
import { IClaim } from '../../../models/claim';
import ELAG3ClaimMock from '../../../../mock_api_data/E.G3.C1';
import { CSESearchQuery, CSEFilterOptions, CSEFilterParams } from '../../../models/filter';
import { FilterType } from '@osu-cass/sb-components';
import { ISearchClient } from '../../../clients/search';
import { searchResults } from './SearchResults';
import { IFilterClient } from '../../../clients/filter';
import { subjectGrades, subjectGradeClaims, noParams } from './FilterOptions';
import { History, createMemoryHistory, MemoryHistoryBuildOptions } from 'history';

export const filterItems: FilterItemProps[] = [
  {
    subject: 'Lorem',
    grade: ['Ipsum'],
    claim: 'Dolor',
    targetName: 'Donec aliquet, risus sed auctor sagittis',
    targetBodyText:
      'Curabitur gravida pretium metus, in malesuada nunc fringilla quis. Phasellus tincidunt, ligula ut commodo varius, mi nunc luctus mauris, sed dapibus dui mauris ac tortor. Praesent tincidunt id leo et feugiat. Etiam ut risus libero. Nullam tincidunt suscipit sem ac vestibulum. Donec at tortor ac metus pharetra blandit ut a diam. Nullam id tortor eu ligula malesuada feugiat. Etiam quis erat pharetra, eleifend risus sit amet, tempus nunc. Nunc commodo tincidunt nunc, viverra accumsan urna suscipit ut. Sed a porttitor quam. Morbi gravida dignissim nulla, at commodo felis ultrices quis.',
    targetLink: ''
  },
  {
    subject: 'Integer',
    grade: ['Elementum'],
    claim: 'Acru',
    targetName: 'Vitae suscipit lacus commodo sed',
    targetBodyText:
      'Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec tempus tellus ut tempus luctus. Nullam nec nunc mi. Duis volutpat ultricies aliquet. Aliquam commodo efficitur odio, ut vehicula quam aliquet sed. Ut at ligula sit amet arcu varius rhoncus. Curabitur accumsan sit amet magna eget efficitur. Pellentesque eleifend ipsum sed nibh pellentesque finibus. Donec ut mauris luctus, congue ante ac, cursus libero. Curabitur dolor ligula, aliquam vel ex eu, ornare tincidunt turpis. Quisque id ornare felis. Phasellus quis molestie ante. In eleifend posuere orci sagittis scelerisque.',
    targetLink: ''
  },
  {
    subject: 'Duis',
    grade: ['Pretium'],
    claim: 'Nisl',
    targetName: 'Quis libero cursus',
    targetBodyText:
      'Sed ut orci eget orci imperdiet bibendum. Aliquam rhoncus, justo a ullamcorper elementum, urna dolor commodo ligula, efficitur sollicitudin arcu tellus nec tellus. Aenean pharetra, urna et imperdiet auctor, velit tellus iaculis eros, nec laoreet elit dui quis mauris. Quisque dictum ligula eget gravida porttitor. Aliquam rhoncus turpis id pharetra congue. Pellentesque non tristique diam. Nam feugiat euismod nibh in lobortis. Morbi facilisis diam est, ac pharetra est pellentesque vitae. Aliquam erat volutpat.',
    targetLink: ''
  }
];

const queryParamsValid: CSESearchQuery = {
  subject: 'ELA'
};

const filterOptionsMockBase: CSEFilterOptions = {
  grades: noParams.grades,
  subjects: noParams.subject
};

const filterOptionsMockClaims: CSEFilterOptions = {
  ...filterOptionsMockBase,
  claims: subjectGrades.claimNumbers
};

const filterOptionsMockTargets: CSEFilterOptions = {
  ...filterOptionsMockClaims,
  targets: subjectGradeClaims.targetShortCodes
};

const history: History = { ...createMemoryHistory(), action: 'PUSH' };

/**
 * Client class that cxommunicates with the cse api
 * @class {MockSearchClient}
 */
export class MockSearchClient implements ISearchClient {
  private endpoint: string;

  constructor() {
    this.endpoint = '';
  }

  // mock function where if nothing is passed no rresults are passed back to mock error.
  public async search(params: CSESearchQuery): Promise<IClaim[] | Error> {
    let result: IClaim[] | Error;
    if (!params.subject) {
      result = Error('Could not load');
    } else {
      result = searchResults;
    }

    return result;
  }
}

/**
 * Client class that cxommunicates with the cse api
 * @class {MockFilterClient}
 */
export class MockFilterClient implements IFilterClient {
  async getFilterOptions(
    params: CSEFilterParams,
    change?: FilterType,
    options?: CSEFilterOptions
  ): Promise<CSEFilterOptions | Error> {
    let result: CSEFilterOptions | Error;
    if (!params.subject) {
      result = Error("It Didn't work");
    }

    result = filterOptionsMockBase;
    if (params.subject && params.grades && params.claim) {
      result = filterOptionsMockTargets;
    } else if (params.subject && params.grades && !params.claim) {
      result = filterOptionsMockClaims;
    }

    return result;
  }
}

export const searchPageMockPropsError: SearchPageProps = {
  history,
  filterClient: new MockFilterClient(),
  paramsFromUrl: { grades: [] },
  searchClient: new MockSearchClient()
};

export const searchPageMockProps: SearchPageProps = {
  history,
  filterClient: new MockFilterClient(),
  paramsFromUrl: { subject: 'ELA', grades: ['5', '6'] },
  searchClient: new MockSearchClient()
};
