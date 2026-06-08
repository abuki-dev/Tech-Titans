function pow(base, exponent) {
  if (!+base || !+exponent) {
    return "Both must be Numbers";
  } else return base ** exponent;
}
module.exports = pow;
