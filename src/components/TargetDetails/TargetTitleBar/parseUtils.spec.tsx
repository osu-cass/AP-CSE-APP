import { parseExamples } from '../parseUtils';

const mockExamples = [
  'Primary Target 2A (Content Domain NBT), Secondary Target 1E (CCSS 3.NBT.A), Tertiary Target 2C',
  'Example Item 2A.2a (Grade 3)',
  'Examples',
  'Sabina has a jar full of dimes. A pack of cards costs 76 cents. How many dimes would she need to buy the cards if she uses no other coins?\r\n\r\nEnter your answer in the response box.',
  '(1 point) The student enters the correct number of dimes (8).',
  'This item requires the student to interpret the value of a collection of dimes as a multiple of ten, and so draws on the skill set identified in Claim 2C.',
  'NA'
];

describe('ParseUtils', () => {
  it('handles string vs string array parsing', () => {
    const array = parseExamples(mockExamples);
    const single = parseExamples(
      'Sabina has a jar full of dimes. A pack of cards costs 76 cents. How many dimes would she need to buy the cards if she uses no other coins?\r\n\r\nEnter your answer in the response box.'
    );
    if (array && single) {
      expect(array.length).toBe(9);
      expect(single.length).toBe(3);
    }
    expect(parseExamples('')).toBe(undefined);
  });
});
