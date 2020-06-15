const describe = require('./node_modules/testing-lib/test');
const reverse = require('./reverse');

describe("Reverse String for DIVYA should be AYVID").expect(reverse("DIVYA")).toBe("AYVID");

describe("Reverse String for DIVYA should be AYVID").expect(reverse("DIVYA")).toBeFalse("AYVIDBH");
