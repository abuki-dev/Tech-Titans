function update_foreach(student) {
  student.forEach((element) => {
    if (element.score >= 50) {
      student.status = "Passed";
      student.isGraduated = true;
    } else {
      student.status = "Failed";
    }
  });
}
//
let studentReport = {
  name: "Abuki",
  score: 88,
};

// Testing the code
// Should output "A"
studentReport.getGrade = function () {
  if (this.score >= 85) {
    return "A";
  } else if (this.score >= 50) {
    return "B";
  } else if (this.score < 50) {
    return "F";
  } else return "NG";
};
console.log(studentReport.getGrade());

//genertestudens report
//generate average then uapdate gerade
//also add
//count pass failed Ng

let softwareClass = [
  { name: "Abuki", scores: [80, 90, 70] }, // Avg: 80 (Pass)
  { name: "Alex", scores: [40, 20, 45] }, // Avg: 45 (Fail)
  { name: "Yusuf", scores: [20, 20, 20] }, // Avg: 70 (Pass)
];
function genareaverage(Array) {
  return Array.reduce((sum, item) => sum + item, 0) / Array.length;
}
function setGrade(Average) {
  if (Average >= 80) return "A";
  else if (Average >= 70) return "B";
  else if (Average >= 50) return "D";
  else if (Average < 50) return "F";
  else return "NG";
}
function setStatus(grade) {
  if (["A", "B", "D"].includes(grade)) {
    return "Pass";
  }
  if (grade == "F") return "Fail";
  else return "NG";
}

function analyzeClass(Students) {
  const Report = {
    totalStudents: 0,
    passedCount: 0,
    failedCount: 0,
    dropdCount: 0,
    classAverage: 0,
    student_of_theyear: "",
  };
  let higestscore = -1;
  Students.forEach((element) => {
    let average = genareaverage(element.scores);
    let grade = setGrade(average);
    let status = setStatus(grade);
    element.average = average;
    element.grade = grade;
    element.status = status;
    Report.totalStudents += 1;
    if (status == "Pass") Report.passedCount += 1;
    else if (status == "Fail") Report.failedCount += 1;
    else Report.dropdCount += 1;
    if (average > higestscore) {
      higestscore = average;
      Report.student_of_theyear = element.name;
    }
  });
  let Arrofaverage = Students.map((stud) => stud.average);
  Report.classAverage = genareaverage(Arrofaverage).toFixed(2);
  return Report;
}
function generate_Rank(Students) {
  Students.sort((a, b) => a.average - b.average);
  Students.map((item, index) => (item.Rank = index + 1));
}
let AB = analyzeClass(softwareClass);
generate_Rank(softwareClass);
console.log(softwareClass);
