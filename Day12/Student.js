//1 geneating student database base on js
//2 report generated thrugn template
//3 failed students or not passed annoumced
//4 hing scoers
const Students = [
  {
    id: 1,
    name: "abubeker",
    age: 17,
    gender: "male",
    coureces: {
      cource1: 85,
      cource2: 100,
      cource3: 100,
    },
    status: "",
  },
  {
    id: 1,
    name: "kedir",
    age: 17,
    gender: "male",
    coureces: {
      cource1: 95,
      cource2: 30,
      cource3: 20,
    },
    status: "",
  },
  {
    id: 1,
    name: "hayat",
    age: 17,
    gender: "female",
    coureces: {
      cource1: 80,
      cource2: 90,
      cource3: 100,
    },
    status: "",
  },
];

let report = {
  enroled_students: {
    female_students: 0,
    male_students: 0,
    total: this.female_students + this.male_students,
  },
  gradings: {
    A: 0,
    B: 0,
    C: 0,
    D: 0,
    F: 0,
  },
  status: {
    Passed: 0,
    incomplate: 0,
    failed: 0,
  },
};
function get_average(object_with_cources) {
  let sum = 0;
  let cources = 0;
  for (key in object_with_cources) {
    sum += object_with_cources[key];
    cources++;
  }
  return sum / cources;
}
function get_grade(student_average) {
  if (student_average >= 90) return "A+";
  else if (student_average >= 80) return "B";
  else if (student_average >= 70) return "C";
  else if (student_average >= 60) return "D";
  else if (student_average >= 50) return "F";
  else return "NG";
}
function get_status(student_average) {
  if (student_average >= 70) return "Pass poromoted";
  else if (student_average >= 60) return "Warrning";
  else if (student_average >= 50) return "Fail";
  else return "NG";
}
function generate_yearlyreport(students_data) {
  students_data.forEach((student) => {
    if (!(student.gender in report.enroled_students)) {
      report.enroled_students[student.gender] = 0;
    }
    report.enroled_students[student.gender] += 1;
  });
}
// function generate_sectionreport(students_data, report_object) {
//   for (let index = 0; index < students_data.length; index++) {
//     let data = students_data[index];
//    const report_object= {};
//     report_object.studet_id=data.id

//   }
// }
let section_report = [];
function update_students_data(array_students, report_object) {
  for (let index = 0; index < array_students.length; index++) {
    const element = array_students[index];

    let average = get_average(element.coureces).toFixed(2);

    let grade = get_grade(average);

    let status = get_status(average);

    element.average = average;

    element.grade = grade;

    element.status = status;
    let currunet_data = {
      id: element.id,
      name: element.name,
      average: element.average,
      grade: element.grade,
      status: element.status,
      rank: "",
    };

    report_object.push(currunet_data);
  }
}
function sort_for_rank(students_data) {
  for (let index = 0; index < students_data.length - 1; index++) {
    let grater_averad = index;
    for (let j = index + 1; j < students_data.length; j++) {
      if (students_data[j].average > students_data[grater_averad].average) {
        grater_averad = j;
      }
    }
    swap(students_data, index, grater_averad);
  }
  for (let y = 0; y < students_data.length; y++) {
    if (students_data[y].grade == "NG") students_data[y].rank = "-";
    else students_data[y].rank = y + 1;
  }
}
function swap(arr, i, j) {
  let old = arr[i];
  arr[i] = arr[j];
  arr[j] = old;
}
update_students_data(Students, section_report);
sort_for_rank(section_report);
console.log(section_report);
