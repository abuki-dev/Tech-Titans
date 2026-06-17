//accepting avalue of string
//split teh wehen u get -
//Join then agan withot any spacecs
//display the result
function split_join(word) {
  word = word.split("-").join("");
  return word;
}
let Statement = "-Abubeker-Ahmed-Ali";
Statement = split_join(Statement);
console.log(Statement.toUpperCase());
const Tobereduced = [-1, -2, -3, 4, 5, 6, 7, 8, -9, 0];

//Task Two
//Create afuntion
//accepts 2 vales
//if currun elemnt is gereter of below the higer border return ttue

//accepts an array and 2 numbers
//if currunt elemnt is  betwenn the 2 elements return it
let john = { name: "John", age: 25 };
let pete = { name: "Pete", age: 30 };
let mary = { name: "Mary", age: 28 };

let users = [john, pete, mary];

let names = users.map((item) => item.name + item.age);

console.log(names.forEach((Element) => console.log(Element))); // John, Pete, Mary
function Sorter(a, b) {
  if (a > b) return 1;
  if (a == b) return 0;
  if (a < b) return -1;
}
Tobereduced.sort(Sorter);
console.log(Tobereduced);
let orginal = ["HTML", "JavaScript", "CSS"];
function copysorted(arr) {
  let far = arr.concat([]);
  return far.sort();
}
let sorted = copysorted(orginal);
console.log(orginal);
console.log(sorted);
