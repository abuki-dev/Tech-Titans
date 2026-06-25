//
let symb = Symbol("usres");
let Users = {
  name: "abuki",
  age: 22,
  [symb]: 88,
};
function count(objects) {
  return Object.keys(objects).reduce((sum, item) => sum + 1, 0);
}
console.log(count(Users));
