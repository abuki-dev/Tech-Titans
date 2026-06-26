const classData = [
  { name: "Abuki", status: "passed", score: 95 },
  { name: "Alex", status: "passed", score: 88 },
  { name: "Yonas", status: "failed", score: 45 },
  { name: "Chala", status: "passed", score: 91 },
  { name: "Marta", status: "failed", score: 58 },
];
//creta funtion to do---->
//The returned object must have exactly four properties:
//passedCount: The total number of students who passed.
//failedCount: The total number of students who failed.
//highestScore: The single highest score found in the class.
//allStudentNames: An array containing just the names (strings) of all students.
//forst creat funtion to aceept the currunt array
//create use reduce if curru t sudent staus is passed passcoutn++
//else filedcount ++
//then push name to the total studnents array
// if score>higetsscore assing vurrunt score as higer score
function generateClassReport(students) {
  return students.reduce(
    (report, { name, status, score }) => {
      if (score > report.highestScore) report.highestScore = score;
      status == "passed" ? report.passedCount++ : report.failedCount++;
      report.allStudentNames.push(name);
      return report;
    },
    {
      passedCount: 0,
      failedCount: 0,
      highestScore: 0,
      allStudentNames: [],
    },
  );
}
console.log(generateClassReport(classData));
