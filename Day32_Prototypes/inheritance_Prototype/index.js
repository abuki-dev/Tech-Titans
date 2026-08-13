//-Prototype
// hidden property of a js objects ether null or refer to another js object

//we use special name to it
let animal = {
  eats: true,
  breathes: true,
  talks: false,
  saymeting() {
    console.log(this.sound);
  },
};
let rabit = {
  jumps: true,
  sound: "Rqueek Rqueek",
};
rabit.__proto__ = animal;

let chiken = {
  flyes: true,
  __proto__: animal,
  sound: "Kuak kuak kauk",
};
chiken.saymeting(); //kuak akuak kauak
chiken.saymeting = () =>
  console.log("you know me im hacker i converted my own method ");
chiken.saymeting(); //haker mode

//--.this and prototypes
//whrever the this funtionis located allways it accses the object before the dot

let user = {
  name: "Abubeker",
  surrname: "Ahmed",
  fullname() {
    return `${this.name} ${this.surrname}`;
  },
  fullname(value) {
    [this.name, this.surrname] = value.split(" ");
  },
};
user.fullname = "Khalid Ahmed";
console.log(user.fullname);
//-

//- Object.keys() ignores teh properties of the prortotype
//-but forin loop acces everyting
//--also Objethaswonproprties() only acess the objetc not inhered