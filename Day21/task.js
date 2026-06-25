let user = { name: "John", years: 30 };
let { name, years, isAdmin = false } = user;
console.log(name);
console.log(years);
console.log(isAdmin);

let salaries = {
  John: 100,
  Pete: 300,
  Mary: 300,
};
let array = Object.entries(salaries);

function topSaley(saleofusre) {
  let max = -1;
  let employe = "n";
  for (let [name, salery] of saleofusre) {
    if (salery > max) {
      max = salery;
      employe = name;
    }
  }
  return employe;
}
console.log(topSaley(array));
