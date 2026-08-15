//- seter and geters of teh protottypefor an object
//? Getter =:)Object.getPrototypeOf(Object) --to get teh rpotototyp of the object
//? Setter Object.setPrototypeOf(Object,proto)// This method sets teh Object proto to proto or null
//? Object.create(object)//Creat new objetc using te prototype pfteh object

//Examples
let animal = {
  eats: true,
  thinks: false,
};
let aliens = {
  eats: "Unknown",
  berath: "Unknown",
  thinks: true,
};
let Rabbit = Object.create(animal); //now we created rabbit and sets the protototype
console.log(Rabbit.eats); //true
Object.setPrototypeOf(Rabbit, aliens);
console.log(Rabbit.eats); //Unknown
console.log(Object.getPrototypeOf(Rabbit) === aliens); //Trueg
