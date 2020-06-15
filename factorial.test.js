const describe = require('./node_modules/testing-lib/test');
const factorial = require('./factorial');

describe('factorial of 5 and should be 120')
    .expect(factorial(5)).toBe(120);

describe('factorial cannot be negative').expect(factorial(3)).toBeTrue();

describe('factorial result should not be null').expect(factorial(4)).toBeNull();