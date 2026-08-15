// generating buit in funtion using prototype
//add new funtion taht will run after some interval

//fIrest get the prototyoe of the funtion
//add method called Deffer
//settiout after som einterval do f call

function f() {
  console.log("abuki");
}
Function.prototype.defer = (ms) => {
  setTimeout(this, ms);
};

f.defer(2000);

//task 2
function summer(a, b) {
  return a + b;
}
summer.defer(1000)(12, 4);
