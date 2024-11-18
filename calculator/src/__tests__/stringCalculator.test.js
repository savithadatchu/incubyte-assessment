import { add } from '../utils/stringCalculator.js';

describe('String Calculator', () => {
  it('should return 0 if input is an empty string', () => {
    expect(add('')).toBe(0);
  });

  it('should return the number if input string is a single number', () => {
    expect(add('1')).toBe(1);
  });

  it('should handle two numbers with default delimiter', () => {
    expect(add('1,2')).toBe(3);
  });

  it('should handle multiple numbers with default delimiter', () => {
    expect(add('1,2,3')).toBe(6);
  });

  it('should handle multiple numbers with \n and default delimiter', () => {
    expect(add('1\n2,3')).toBe(6);
  });

});
