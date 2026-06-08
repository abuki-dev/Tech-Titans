let Exponnetiation = (Base, Exponent) => {
  if (typeof Base === "number" && typeof Exponent === "number") {
    return Base ** Exponent;
  } else return "Invalid input ";
};
module.exports = Exponnetiation;
//2**3
