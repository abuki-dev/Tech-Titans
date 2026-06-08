const assert = require("assert");
const Exponnetiation = require("./Calculator");
describe("Exponennetial funtions testing", () => {
  before(function () {
    console.log("testing started");
  });
  after(function () {
    console.log("test have finished ");
  });
  it("3 in base 3", () => {
    assert.equal(Exponnetiation(3, 3), 27);
  });
  it("2 the power of 3 ", () => {
    assert.equal(Exponnetiation(2, 3), 8);
  });
});
describe("Acutomated tesing form 1-100", function () {
  function Acutomated(B, ex) {
    let result = B ** ex;
    it(`${B} the power of ${ex}`, function () {
      assert.equal(Exponnetiation(B, ex), result);
    });
  }
  for (let i = 0; i <= 100; i++) {
    Acutomated(i, 3);
  }
});
