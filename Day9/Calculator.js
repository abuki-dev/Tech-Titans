let Calculator = {
  num1: 0,
  num2: 0,
  sum() {
    this.Sum_Result = this.num1 + this.num2;
  },
  Multip() {
    this.Mult_Result = this.num1 * this.num2;
  },
  Display_Results() {
    console.log(
      `The Result of ${this.num1} + ${this.num2} =${this.Sum_Result}`,
    );
    console.log(
      `The Result of ${this.num1} X ${this.num2} =${this.Mult_Result}`,
    );
  },
};
function read() {
  this.num1 = 15;
  this.num2 = 40;
}
Calculator.read = read;
Calculator.read();
Calculator.Multip();
Calculator.sum();
Calculator.Display_Results();
