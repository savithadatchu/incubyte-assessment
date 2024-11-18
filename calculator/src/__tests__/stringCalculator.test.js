import { add } from '../utils/stringCalculator.js';

describe('String Calculator', () => {
  it('should return 0 if input is an empty string', () => {
    expect(add('')).toBe(0);
  });
});
