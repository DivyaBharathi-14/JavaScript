const describe = require('./node_modules/testing-lib/test');
const factorial = require('./factorial');

describe('factorial of 5').it('should be 120')
    .expect(factorial(5)).toBe(120);
