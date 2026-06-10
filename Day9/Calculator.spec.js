const assert = require("assert");
const Calculator = require("./Calculator");
describe("Calculator object Testing", () => {
  it("Multipling 3 and 15", () => {
    Calculator.read(3, 15);
    Calculator.sum();
    assert.equal(Calculator.Get_Sum_result(), 18);
  });
});
