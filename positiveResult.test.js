const describe = require('./node_modules/testing-lib/test');
const sub = require('./PositiveResult');

describe('Always Expecting positive Result').it('should be >0')
    .expect(sub(5, 10)).toBe(5);