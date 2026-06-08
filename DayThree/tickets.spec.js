const Tickets = require("./Tckets");
describe("tring to validate tickats ", function () {
  test("undefined testing", function () {
    expect(Tickets()).toBeUndefined();
  });
  test("using age 5", function () {
    expect(Tickets(5)).toBe("it is tuesday so you get 5$");
  });
});
