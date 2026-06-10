const Leader = require("./Chaining");
const assert = require("assert");
describe("Tesing tehchain", () => {
  it("test step up", () => {
    Leader.Step_up().Step_up();
    assert.equal(Leader.Get_steps(), 2);
  });
});
