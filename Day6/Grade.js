let Grade_Tester = (Grade) => {
  if (Grade <= 100) {
    if (Grade >= 90) return "A";
    if (Grade >= 80) return "B";
    if (Grade >= 70) return "C";
    if (Grade >= 60) return "D";
    return "F";
  } else return "Invalid Grade";
};
module.exports = Grade_Tester;
