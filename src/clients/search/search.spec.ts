import { SearchClient } from '.';
import { fetchMockGenerator } from '../filter/index.spec';
import { searchResults } from '../../components/SearchPage/__mocks__/SearchResults';
import { CSEFilterParams, CSESearchQuery } from '../../models/filter';

const mocks = {
  empty: {
    data: 0
  },
  search: {
    data: 1
  },
  grade: {
    data: 2
  },
  grades: {
    data: 3
  },
  subject: {
    data: 4
  },
  claim: {
    data: 5
  },
  target: {
    data: 6
  },
  all: {
    data: 7
  }
};

describe('SearchClient.search', () => {
  let client: SearchClient;

  beforeEach(() => {
    client = new SearchClient();
    window.fetch = fetchMockGenerator({
      'http://localhost:3000/api/search/?': mocks.empty,
      'http://localhost:3000/api/search/?query=hi&': mocks.search,
      'http://localhost:3000/api/search/?&grades=1': mocks.grade,
      'http://localhost:3000/api/search/?&grades=1,2': mocks.grades,
      'http://localhost:3000/api/search/?subject=math': mocks.subject,
      'http://localhost:3000/api/search/?&claimNumber=1': mocks.claim,
      'http://localhost:3000/api/search/?&targetShortCode=1': mocks.target,
      'http://localhost:3000/api/search/?query=hi&subject=math&grades=1,2&claimNumber=1&targetShortCode=1':
        mocks.all
    });
  });

  it('empty query', async () => {
    const query: CSESearchQuery = {};
    const result = await client.search(query);

    expect(result).toEqual(mocks.empty);
  });

  it('search query', async () => {
    const query: CSESearchQuery = { search: 'hi' };
    const result = await client.search(query);

    expect(result).toEqual(mocks.search);
  });

  it('grade query', async () => {
    const query: CSESearchQuery = { grades: ['1'] };
    const result = await client.search(query);

    expect(result).toEqual(mocks.grade);
  });

  it('multiple grades query', async () => {
    const query: CSESearchQuery = { grades: ['1', '2'] };
    const result = await client.search(query);

    expect(result).toEqual(mocks.grades);
  });

  it('subject query', async () => {
    const query: CSESearchQuery = { subject: 'math' };
    const result = await client.search(query);

    expect(result).toEqual(mocks.subject);
  });

  it('claim query', async () => {
    const query: CSESearchQuery = { claim: '1' };
    const result = await client.search(query);

    expect(result).toEqual(mocks.claim);
  });

  it('target query', async () => {
    const query: CSESearchQuery = { target: '1' };
    const result = await client.search(query);

    expect(result).toEqual(mocks.target);
  });

  it('all params query', async () => {
    const query: CSESearchQuery = {
      search: 'hi',
      grades: ['1', '2'],
      subject: 'math',
      claim: '1',
      target: '1'
    };
    const result = await client.search(query);

    expect(result).toEqual(mocks.all);
  });
});
