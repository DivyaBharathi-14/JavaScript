const describe = require('./node_modules/testing-lib/test');
const cylinder = require('./cylinder');

describe('Area of cylinder - when radius and height is 10,2 and should be 753.9822368615503')
    .expect(cylinder(10,2)).toBe(753.9822368615503);

describe('Area of cylinder - when radius and height is 10,2 and should be 753.9822368615503')
    .expect(cylinder(10,2)).toBe(753);