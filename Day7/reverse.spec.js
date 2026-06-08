const assert = require("assert");
const Reverser = require("./reverse");
describe(" REVERSEER TEST", function () {
  it("REVERSING NAME", function () {
    assert.equal(Reverser("NAME"), "EMAN");
  });
  it("Reversing Tech Titans", () => {
    assert.equal(Reverser("Tech Titans"), "snatiT hceT");
  });
});
