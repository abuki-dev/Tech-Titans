// Test.js
import * as chai from "./node_modules/chai/index.js";
const assert = chai.assert;
mocha.setup("bdd");
describe("sum function testting", function () {
  it("sum of 2 and 1", function () {
    assert.equal(2 + 1, 3);
  });
  it("jsdfjdg", function () {
    assert.equal(2 + 2, 4);
  });
});
mocha.run();
