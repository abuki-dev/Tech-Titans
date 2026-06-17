//Reduce
const Tobereduced = [-1, -2, -3, 4, 5, 6, 7, 8, -9, 0];
let ur = Tobereduced.map(
  (item, indx, arrsy) => (arrsy[indx] = arrsy[indx] * 2),
);
console.log(Tobereduced);
//sumusing thisarg
function sum(x) {
  if (x > 0) return true;
  else return false;
}
let Totalsum = Tobereduced.filter(sum, Tobereduced);
console.log(Totalsum);
