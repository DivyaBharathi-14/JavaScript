const describe = require('./node_modules/testing-lib/test');
const multiply = require('./multiplyWithPI');

describe('multiply 1 with PI').it('should be 3.141592653589793')
    .expect(multiply(1)).toBe(3.141592653589793);
