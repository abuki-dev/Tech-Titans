let john = { name: "John", age: 25 };
let pete = { name: "Pete", age: 30 };
let mary = { name: "Mary", age: 29 };

let users = [john, pete, mary];
// let mapped_user = users.map(mergenames, users);
// function mergenames(users) {
//   return { fullname: `${users.name} ${users.surname}`, id: users.id };
// }
// //console.log(mapped_user);
// let filtered_users = users.filter(find3, users);
// function find3(array) {
//   return array.id == 3;
// }

// //console.log(filtered_users);
// users.sort(sortter, users);
// function sortter(a, b) {
//   if (a.id > b.id) return 1;
//   if (a.id == b.id) return 0;
//   if (a.id < b.id) return -1;
// }
// //console.log(users);
// let namesonly = users.map((item) => item.surname).sort();
// console.log(namesonly);

// //
// let Calculator = {
//   calculate(str) {
//     let arr = str.split("");
//     switch (arr[1]) {
//       case "+":
//         return +arr[0] + +arr[2];
//     }
//   },
// };
// let p = Calculator.calculate("7+6");
// console.log(p);Number(arr[0])

let items = [
  { id: "john", name: "John Smith", age: 20 },
  { id: "ann", name: "Ann Smith", age: 24 },
  { id: "pete", name: "Pete Peterson", age: 31 },
];
//users
//return user.id:{user}
function Groupbyd(user) {
  return user.reduce((currunt, item) => {
    currunt[item.id] = item;
    return currunt;
  }, {});
}

let userbyid = Groupbyd(items);
console.log(userbyid);
