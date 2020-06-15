const describe = require('./node_modules/testing-lib/test');
const compare = require('./comparison');

describe('comparing 10 and 12 and should return Num1 is smaller').
    expect(compare(10, 12)).toBe("Num1 is smaller");
