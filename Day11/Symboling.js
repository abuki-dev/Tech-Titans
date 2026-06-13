//we know that objects nameor properties are strings +symbols onlynumbers are ot suppproted
//Symbols allow us to crate properties with hidden properies
let id = Symbol("hidden id Propertie");
let User = {
  name: "seid",
  age: 33,
  [id]: 3696,
};

//assigned usign []
User.ID = 7474;
// for (key in User) {
//   console.log(User[key]);
// }
// console.log(User);
let NEW_ID = Symbol.for("Name");
let My_ID = Symbol.for("Name");
let localSymbol = Symbol("Name");
//console.log(localSymbol);
User[Symbol.toPrimitive] = function (hint) {
  return (hint = "string " ? `{name :"${this.name}"}` : this[ID]);
};

let ab = User[Symbol.toPrimitive]("");
console.log(ab);
User.toString = function () {
  return 12;
};
let Ac = User.toString();
console.log(User);
