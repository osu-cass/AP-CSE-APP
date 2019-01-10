import { SearchClient } from '.';
import { fetchMockGenerator } from '../filter/index.spec';

describe('SearchClient.search', () => {
  let client: SearchClient;

  beforeEach(() => {
    client = new SearchClient();
    window.fetch = fetchMockGenerator({
      'http://localhost:3000/api/filter': []
    });
  });

  it('test 1', () => {
    expect.assertions(0);
    // todo after search refactor
  });
});
