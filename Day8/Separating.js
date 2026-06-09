let MIXED = {
  Name: "Abubeker",
  age: 30,
  Suername: "Ahmed",
  slalerey: 100,
  somestring: "Some data",
  somenumebr: 300,
};
let Numbers = {};
let Srtings = {};
function Separator(Midex_data) {
  for (keys in Midex_data) {
    if (typeof Midex_data[keys] === "string") {
      Srtings[keys] = Midex_data[keys];
    } else if (typeof Midex_data[keys] === "number") {
      Numbers[keys] = Midex_data[keys];
    }
  }
}
Separator(MIXED);

console.log(Numbers);
console.log(Srtings);
