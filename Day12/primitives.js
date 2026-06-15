//primitivs are object behaveros with buil it functions
//lieke to Uppercases

let str = "helow";
console.log(str.toUpperCase()); //acted as obect tehn ater compliaction it combacs to it's old or the object leaves teh string
console.log(str);
let arr = [1, 5, 6, 3, 4, 5, 3, 4, 5];
console.log(Math.min(...arr));
//Rounding
let numb = 123.223;
let result = Math.trunc(numb);
console.log(result);
//ceil floor round trunc toFixed isNaN isFinite
function rounding_up(decimal) {
  if (isNaN(decimal)) {
    return false;
  }
  return Math.ceil(decimal);
}
function rounding_down(decimal) {
  if (Number.isNaN(decimal)) {
    return Math.floor(decimal);
  }
  return false;
}
function minimizing(decimal, length) {
  if (isNaN(decimal)) {
    return false;
  }
  return decimal.toFixed(length);
}
function remove_decimals(decimal) {
  if (!Number(decimal)) {
    return false;
  }
  return Math.trunc(decimal);
}
let shot = remove_decimals(12.73632);
console.log(shot);
