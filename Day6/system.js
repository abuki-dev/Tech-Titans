let Grade_tester = () => {
  let Score = prompt("Enter your Score");
  if (Score) {
    Score = Number(Score);
    if (Score > 100) {
      alert("Score Cannot be above 100");
    } else {
      switch (true) { 
        case Score >= 90:
          alert("A+");
          break;
        case Score >= 80:
          alert("A");
          break;
        case Score >= 70:
          alert("B");
          break;
        case Score >= 60:
          alert("C");
          break;
        case Score >= 50:
          alert("D");
          break;
        case Score < 50:
          alert("F");
          break;
        default:
          alert("invalid  input");
      }
    }
  } else {
    alert("empty is not allowed");
  }
};
Grade_tester();
