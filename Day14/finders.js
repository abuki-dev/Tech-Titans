//using aar.find(item idex array)

// findees then return true if exists
let Usres = [
  { id: 1, name: "abuki", age: 25, gender: "M" },
  { id: 41, name: "kira", age: 25, gender: "F" },
  { id: 24, name: "kira", age: 7, gender: "M" },
  { id: 32, name: "ahmed", age: 15, gender: "F" },
  { id: 4, name: "ali", age: 7, gender: "M" },
];
//find last finds starting from the last element
let result = Usres.find((usrer) => usrer.gender == "F");
// console.log(result);
let Students = [1, 3, 4, 5, 6, 7, 8, 7];
//findIdex starts from the first
//  findlastindex starts
let ros = Students.find((Array) => Array == 7);
// console.log(ros);

//filter map and
let Users_younger = Usres.filter((user) => user.age > 18); //slice uses whe age is above 18
// console.log(Users_younger);
//Map conectes with teh specified value
let Males = Usres.map((user) => user.gender);
// console.log(Males);
Usres.sort(compareNumeric);
// console.log(Usres);
function compareNumeric(a, b) {
  if (a.name > b.name) return 1;
  if (a.name == b.name) return 0;
  if (a.name < b.name) return -1;
}
//console.log("a" < "b");
//find returns one element
//findlast also returns one element
//findidex
//findlastindex
//map returns the aaray of values   withfull length
//fileter
//sort

let countries = ["Österreich", "Andorra", "Vietnam"];
console.log(countries.sort((a, b) => a.localeCompare(b)));
console.log(countries);

//Rverse
//it jest reverses the array and returns it to the actual array
let sorted = [1, 2, 3, 6, 7];
sorted.reverse();
//console.log(sorted);

//Split and join
//split this method is using tehcondition cretes the array of the strings And
// also it i tehmethod of the strings taht cerate array
let String = "abuki kira";
let RESO = String.split(" ");
console.log(RESO); //["abuki","kira"]
//Join method is teh aray matod that joins the arrays of each element
let Joined = RESO.join("#"); // joins teh arrays using the # as separator
console.log(Joined);

//Reduce reduceRight
// retuns single  value calculation based on the aray
let Reduced = sorted.reduce((mult, item) => mult * item, 1);
console.log(Reduced);
const Data = [
  {
    id: 1,
    name: "abubeker",
    age: 300,
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
    age: 400,
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
    age: 200,
    gender: "female",
    coureces: {
      cource1: 80,
      cource2: 90,
      cource3: 100,
    },
    status: "",
  },
];
let Totalvale = Data.reduce((total, item) => total + item.age, 0);
console.log(Totalvale);
let solved = Data.map((item) => (item.age = item.age * 2));
console.log(Data);
