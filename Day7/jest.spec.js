const Reverser = require("./reverse");
describe("jest testing Revrser", () => {
  test("Reversing Abubeker", () => {
    expect(Reverser("Abubeker")).toBe("rekebubA");
  });
  test("tying Empty input", () => {
    expect(Reverser()).toBe("No word detected");
  });
});
