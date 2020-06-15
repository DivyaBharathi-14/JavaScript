const describe = require('./node_modules/testing-lib/test');
const square = require('./square');

describe("Area of square when side is 5 and should retrun 25").
    expect(square(5)).toBe(25);

describe("Area of square when side is 5 and should retrun 25").
    expect(square(5)).toBeFalse();