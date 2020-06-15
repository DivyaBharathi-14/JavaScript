const describe = require('./node_modules/testing-lib/test');
const sub = require('./PositiveResult');

describe('Always Expecting positive Result and should be >0')
    .expect(sub(5, 10)).toBe(5);

describe('Always Expecting positive Result and should be >0')
    .expect(sub(100, 200)).toBeTrue();