let Add = (a, b) => {
  if (!Number(a) || !Number(b)) return;
  else return a + b;
};
let Sub = (a, b) => {
  if (!+a || !+b) return;
  else return a - b;
};
let Mult = (a, b) => {
  if (!+a || !+b) return;
  else return a * b;
};
let Div = (a, b) => {
  if (+a && +b) {
    return a / b;
  } else if (b == 0) {
    return "division by 0 Is not allowed";
  } else return "No number detected";
};

module.exports = { Add, Sub, Mult, Div };
