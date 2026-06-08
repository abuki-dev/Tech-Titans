const pow = require("./MM");
const assert = require("assert");
describe("test one ", function () {
  it("individual test", () => {
    assert.equal(pow(2, 3), 8);
  });
  it("when no number dectcted", () => {
    assert.equal(pow(2, "jf"), "Both must be Numbers");
  });
  it("entering string ", () => {
    assert.equal(pow("ds", 3), "Both must be Numbers");
  });
});
