// let arr = [];
// arr.push("abulki");
// console.log(arr);
// arr.pop();
// arr.unshift(8, 9, 10);
// console.log(arr);
// arr = arr.splice(2);
// console.log(arr);
let styles = ["jass", "Blues"];
styles.push("rock-n-roll");
console.log(styles);
function find_mid(array) {
  //3 0,1,2,4
  if (array.length % 2 == 1) return Math.floor(array.length / 2);
}
let mid = find_mid(styles);
styles[mid] = "classic";
styles.shift();
styles.unshift("Rap", "Reggae");
console.log(styles);
styles.unshift(function () {
  console.log(this);
});
styles[0]();
