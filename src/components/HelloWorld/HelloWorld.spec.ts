import { name } from 'faker';
import { capitalize } from './index';

describe('HelloWorld uppercase function', () => {
  it('Uppercases a phrase', () => {
    const testName = name.findName();
    const upperCased = capitalize(testName);
    expect(upperCased).toBe(testName.toUpperCase());
  });
});
