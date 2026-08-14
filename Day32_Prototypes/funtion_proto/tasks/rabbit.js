///--Changing prototypes
function Rabbit() {}
Rabbit.prototype = {
  eats: true,
};

let rabbit = new Rabbit();
function alert(data) {
  console.log(data);
}

alert(rabbit.eats); // true
//Case 1

let robotRabbit = new Rabbit();
Rabbit.prototype = {
  jumps: false,
};
alert(robotRabbit.eats); //stil true it isassigned from teh rpotottpe only yeh funtion caned oy the rest

//Case 2
let brokenRabbit = new Rabbit();
Rabbit.prototype.jumps = true; //this tim echeged te prototoype because it ueses it or shared prototype is changed manualy
alert(brokenRabbit.jumps);

//case3
let diedrabit = new Rabbit();
delete diedrabit.jumps; //this fides from the object ir selfnot the prototype
alert(diedrabit.jumps); //True

//case 4
delete Rabbit.prototype.jumps;
console.log(diedrabit.jumps); //this time undefined we removed the prototype


//Overall changine the furntion rptototyoe after creating destn afffec th ecreated ones 
//but if we change and alter the memory addres delete or alter it it changes aoutomaticaly becaoue referenced
//and object.property first fineds itself instade of goint to prototype 