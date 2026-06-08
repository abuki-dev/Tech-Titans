//poe ai
const Adder = require("./aditions");
describe("Testign adition", function () {
  test("addition of 15 10 ", function () {
    expect(Adder(10, 15)).toBe("the sum of 10 and 15 is 150");
  });
});
const Grade = require("./Grade");
describe("Grade tester", function () {
  test("scored 75", function () {
    expect(Grade(75)).toBe("C");
  });
  test("scored 65", function () {
    expect(Grade(65)).toBe("D");
  });
  test("scored 70", function () {
    expect(Grade(70)).toBe("C");
  });
  test("undefined", function () {
    expect(Grade()).toBe("Invalid Grade");
  });
  test("disqualified", () => {
    expect(Grade(20)).toBe("F");
  });
});
const { Add, Sub, Mult, Div } = require("./calculator");
console.log("ADD is:", Add);
console.log("Sub is:", Sub);
console.log("Mult is:", Mult);
console.log("Div is:", Div);
describe("Testing our calculator", () => {
  test("test the Sum", () => {
    expect(Add(15, 20)).toBe(35);
  });
  test("testing the Substaction", () => {
    expect(Sub(15, 20)).toBe(-5);
  });
  test("testing the multilplication", () => {
    expect(Mult(15, 10)).toBe(150);
  });
  test("testing the Divisttion", () => {
    expect(Div(150, 10)).toBe(15);
  });
  test("test division by 0", () => {
    expect(Div(16, 0)).toBe("division by 0 Is not allowed");
  });
  test("test empty function", () => {
    expect(Div()).toBe("No number detected");
  });
  test("test 0", () => {
    expect(Add(12, 0)).toBeUndefined();
  });
});
//ax+bx+c
//sum=b,pro=ac;
