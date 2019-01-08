import { FilterClient } from '.';
import { FilterType } from '@osu-cass/sb-components';
import { CSEFilterParams, CSEFilterOptions } from '../../models/filter';
import { foGradeSubject, foClaim, foTarget } from './__mocks__';

const fetchMockGenerator = (result: { [url: string]: object }) =>
  jest.fn().mockImplementation((req: string) => {
    const data = result[req];

    return new Promise(resolve => {
      resolve({
        ...data,
        ok: true,
        json: () => {
          return data;
        }
      });
    });
  });

describe('FilterClient.getFilterOptions', () => {
  let client: FilterClient;

  beforeEach(() => {
    client = new FilterClient();

    window.fetch = fetchMockGenerator({
      'http://localhost:3000/api/filter': foGradeSubject,
      'http://localhost:3000/api/filter?subject=s1&grades=g1,g2': foClaim,
      'http://localhost:3000/api/filter?subject=s2&grades=g1,g2&claimNumber=c1': foTarget
    });
  });

  it('no existing options', async () => {
    const params: CSEFilterParams = {
      grades: ['g1', 'g2']
    };
    const expected: CSEFilterOptions = {
      grades: foGradeSubject.grades,
      subjects: foGradeSubject.subject
    };

    const options = await client.getFilterOptions(params);
    expect(options).toEqual(expected);
  });

  it('existing options', async () => {
    const params: CSEFilterParams = {
      grades: ['g1', 'g2']
    };

    const existing: CSEFilterOptions = {
      grades: [...foGradeSubject.grades, { code: 'g3', label: 'three' }],
      subjects: [...foGradeSubject.grades, { code: 's3', label: 'science' }]
    };
    const options = await client.getFilterOptions(params, FilterType.Grade, existing);
    expect(options).toEqual(existing);
  });
});
