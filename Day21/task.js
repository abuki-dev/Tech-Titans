let user = { name: "John", years: 30 };
let { name, years, isAdmin = false } = user;
//console.log(name);
//console.log(years);
//console.log(isAdmin);

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
//console.log(topSaley(array));
const rectangle = {
  width: 50,
  height: 100,
  color: "Blue",
};
function getArea({ height, width }) {
  return height + width;
}
console.log("Area is :", getArea(rectangle));

//
let book = {
  title: "the Great gatsby",
  page: 218,
};
let { title: Booktitle, author = "unkown" } = book;
console.log(Booktitle);
console.log(author);

let student = {
  name: "John",
  address: {
    city: "London",
    country: "UK",
  },
};
let {
  address: { city, country },
} = student;
console.log(city, country);
