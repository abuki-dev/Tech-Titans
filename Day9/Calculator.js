let Calculator = {
  num1: 0,
  num2: 0,
  read(X, Y) {
    this.num1 = X;
    this.num2 = Y;
  },
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
  Get_Sum_result() {
    return this.Sum_Result;
  },
  Get_Mult_Result() {
    return this.Mult_Result;
  },
};
module.exports = Calculator;
