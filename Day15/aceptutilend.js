//accepting form the user until canceled or entered invalid input
//creatign function
//asking the user anumber
//if currunt is  number break or cannvele the operation and display sum

// function Accept_until() {
//   let sum = 0;
//   do {
//     let input = prompt("peas enter number", 0);
//     if (input == "0" || input == null || typeof input == "string") break;
//     input = Number(input);
//     sum += input;
//   } while (true);
//   return sum;
// }
// let result = Accept_until();
// alert(`the sum is ${result}`);
// function readNumber() {
//   while (true) {
//     let num = prompt("enter the number:");

//     if (num === null || num === "") {
//       return null;
//     }
//     if (!isNaN(num)) {
//       console.log(num);
//       return Number(num);
//     } else {
//       console.log("incorrect");
//     }
//   }
// }

// readNumber();

// function readNumber() {
//   let number;
//   do {
//     number = prompt("Enter a number please?", 0);
//     if (number === null || num === "") return null;
//   } while (!isFinite(num));

//   return +number;
// }

// alert(`Read: ${readNumber()}`);

// function readNumber() {
//     while (true) {
//         let num = prompt('enter the number:');

//         if (num === null || num === "") {
//             return null;
//         }

//         if (!isNaN(num)) {
//              alert(num);
//             return Number(num);
//         }
//         else{
//         alert('incorrect');
//         }
//     }
// }

//  readNumber();

let students = [
  {
    name: "Abuki",
    score: 22, // Use this to check the logic
    isGraduated: false, // Toggle this if they pass
  },
  {
    name: "Abuki",
    score: 76, // Use this to check the logic
    isGraduated: false, // Toggle this if they pass
  },
  {
    name: "Abuki",
    score: 30, // Use this to check the logic
    isGraduated: false, // Toggle this if they pass
  },
  {
    name: "Abuki",
    score: 40, // Use this to check the logic
    isGraduated: false, // Toggle this if they pass
  },
  {
    name: "Abuki",
    score: 76, // Use this to check the logic
    isGraduated: false, // Toggle this if they pass
  },
];
//using map
//accept cussut user
//chek if tthe suer scored aboce 50
//if above status passed togle graduate true
//elese faild status fauled

function update_Students(student) {
  if (student.score >= 50) {
    student.status = "Passed";
    student.isGraduated = true;
  } else {
    student.status = "Failed";
  }
}

students.map(update_Students, students);
console.log(students);
