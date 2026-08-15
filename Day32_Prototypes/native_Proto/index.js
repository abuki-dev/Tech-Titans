//prototy all built in objects use this property when called
let obj = new Object();
let object2 = {};
console.log(obj.__proto__ === Object.prototype); //true
console.log(object2.__proto__ === Object.prototype); //true
//both have the prototype of Object

//other builtin Proto types
//-Array
//we as we inheret otehr roprtye by using prototype we can inheret othe rmethods

let arr = [1, 2, 3, 4];
Array.prototype.concat = () => console.log("hellow");
console.log(arr.__proto__ === Array.prototype); //true we inhereted it form the array
arr.concat(); //this  shows hellow

