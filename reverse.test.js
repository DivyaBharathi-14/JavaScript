const describe = require('./node_modules/testing-lib/test');
const reverse = require('./reverse');

describe("Reverse String for DIVYA").it('should be AYVID').expect(reverse("DIVYA")).toBe("AYVID");