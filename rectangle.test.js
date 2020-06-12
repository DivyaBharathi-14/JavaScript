const describe = require('./node_modules/testing-lib/test');
const rectangle = require('./rectangle');

describe("Area of rectangle when length and breadth is 3,1").it('should retrun 3').
    expect(rectangle(3,1)).toBe(3);