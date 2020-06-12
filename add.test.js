const describe = require('./node_modules/testing-lib/test');
const add = require('./add');

describe('Adding 1,10,1,1:').it('should be 3').expect(add([1,0,1,1])).toBe(3);