const { afterEach } = require("mocha");
const pow = require("./Power_fun");
const assert = require("assert");
describe("test one ", function () {
  before(() => {
    console.log("testing start");
  });
  after(() => {
    console.log("testing ended");
  });

  it("individual test", () => {
    assert.equal(pow(2, 3), 8);
  });
  it("when no number dectcted", () => {
    assert.equal(pow(2, "jf"), "Both must be Numbers");
  });
  it("entering string ", () => {
    assert.equal(pow("ds", 3), "Both must be Numbers");
  });
  function TestALL(x, y) {
    let result = x ** y;
    it(`testing ${x} the power of ${y}`, function () {
      assert.equal(pow(x, y), result);
    });
  }
  for (let i = 1; i <= 100; i++) {
    TestALL(i, 3);
  }
});
