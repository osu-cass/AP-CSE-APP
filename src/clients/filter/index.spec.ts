import { FilterClient } from '.';
import { FilterType } from '@osu-cass/sb-components';
import { CSEFilterParams, CSEFilterOptions } from '../../models/filter';
import { foGradeSubject, foClaim, foTarget } from './__mocks__';

export const fetchMockGenerator = (result: { [url: string]: object }) =>
  jest.fn().mockImplementation(async (req: string) => {
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
      'http://localhost:3000/api/filter?subject=s1&grades=g1,g2&claimNumber=c1': foTarget
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

  it('keeps grade and subject when grade changed', async () => {
    const params: CSEFilterParams = {
      grades: ['g1', 'g2']
    };

    // ensures we don't reload grades or subjects when grade changes
    const existing: CSEFilterOptions = {
      grades: [...foGradeSubject.grades, { code: 'g3', label: 'three' }],
      subjects: [...foGradeSubject.subject, { code: 's3', label: 'science' }]
    };
    const options = await client.getFilterOptions(params, FilterType.Grade, existing);
    expect(options).toEqual(existing);
  });

  it('keeps grade and subject when subject changed', async () => {
    const params: CSEFilterParams = {
      grades: [],
      subject: 's1'
    };

    // ensures we don't reload grades or subjects when grade changes
    const existing: CSEFilterOptions = {
      grades: [...foGradeSubject.grades, { code: 'g3', label: 'three' }],
      subjects: [...foGradeSubject.subject, { code: 's3', label: 'science' }]
    };
    const options = await client.getFilterOptions(params, FilterType.Subject, existing);
    expect(options).toEqual(existing);
  });

  it('subject changed', async () => {
    const params: CSEFilterParams = {
      grades: ['g1', 'g2'],
      subject: 's1'
    };

    const existing: CSEFilterOptions = {
      grades: foGradeSubject.grades,
      subjects: foGradeSubject.subject,
      claims: [{ code: 'c3', label: 'three' }]
    };

    const expected: CSEFilterOptions = {
      grades: foGradeSubject.grades,
      subjects: foGradeSubject.subject,
      claims: foClaim.claimNumbers
    };
    const options = await client.getFilterOptions(params, FilterType.Subject, existing);
    expect(options).toEqual(expected);
  });

  it('claim changed', async () => {
    const params: CSEFilterParams = {
      grades: ['g1', 'g2'],
      subject: 's1',
      claim: 'c1'
    };

    const existing: CSEFilterOptions = {
      grades: foGradeSubject.grades,
      subjects: foGradeSubject.subject,
      claims: foClaim.claimNumbers
    };

    const expected: CSEFilterOptions = {
      grades: foGradeSubject.grades,
      subjects: foGradeSubject.subject,
      claims: foClaim.claimNumbers,
      targets: foTarget.targetShortCodes
    };
    const options = await client.getFilterOptions(params, FilterType.Claim, existing);
    expect(options).toEqual(expected);
  });
});
