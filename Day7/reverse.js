let Reverser = (Word) => {
  if (!Word || +Word) {
    return "No word detected";
  } else {
    let end = Word.length;
    let Result = "";
    for (let i = end - 1; i >= 0; i--) {
      Result = Result + Word[i];
    }
    return Result;
  }
};
module.exports = Reverser;
