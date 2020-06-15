const describe = require('./node_modules/testing-lib/test');
const circle = require('./circle');

describe('Area of circle - when radius is 5 and should be 78.53981633974483')
    .expect(circle(5)).toBe(78.53981633974483);

describe("Area of cirdle should be positive").expect(circle(8)).toBeTrue();

describe("Area of circle is null").expect(circle(4)).toBeNull();

