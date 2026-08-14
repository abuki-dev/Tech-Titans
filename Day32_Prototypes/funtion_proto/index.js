//F.prototype
// we make teh funtion to teh object or we aasign aprototype to teh funtion wehnever we call it it behaves like the object or it inhereted the prtotype

let animal = {
  eats: true,
};

function Rabbit(name) {
  this.name = name;
}
Rabbit.prototype = animal;
let whiteR = new Rabbit("white rabit");
console.log(whiteR.eats);

let abuki = {};
abuki = new Rabbit("trans human");
console.log(abuki);

//When using new F witout prototye default is ist self

function defaultF() {}
//bye f=deafult its protype is ot self
console.log(defaultF.prototype.constructor);
