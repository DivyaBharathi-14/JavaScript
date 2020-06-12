const describe = require('./node_modules/testing-lib/test');
const circle = require('./circle');

describe('Area of circle - when radius is 5').it('should be 78.53981633974483')
    .expect(circle(5)).toBe(78.53981633974483);
