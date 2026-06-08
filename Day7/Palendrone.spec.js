const Palindrone_Tester = require("./Palendrome");
// describe("Palendrone Tester", () => {
//   test("Testing MOM", () => {
//     expect(Palindrone_Tester("MOM")).toBe(true);
//   });
// });
//Using Mocha
const assert = require("assert");
describe("Testing Using Mcha", () => {
  before(() => {
    console.log("testing is started");
  });
  after(() => {
    console.log("testing have finished ");
  });
  it("trying MOMaMOM", () => {
    assert.equal(Palindrone_Tester("MOMMOM"), true);
  });
});
