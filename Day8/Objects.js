//contains primirive values means their value only songe atribute
//created using curly braces
let users = { Name: "abebe", Age: "20" };
//obects cerated
let NE_studet = new Object();

//accesed using .
console.log(users.Name); //outputs abebe
//ading avalue or new attribute
NE_studet.ID = "WOUR/3696/17";
console.log(NE_studet.ID);
delete users.Age; //deleteing the keys
console.log(users.Age); //outputs undefined
// adding multy or sapced keys
let UER = "NEW Key";
users.UER = "adeded";
console.log(users.UER);
//we can add also usign [] computed propeties
NE_studet["new key"] = "new keys value";
console.log(NE_studet["new key"]);
NE_studet[UER + "kiro"] = "king boob";
console.log(NE_studet["NEW Keykiro"]);

//Short hand creating users automaticaly
function Anuto_create(name, age) {
  return {
    name,
    age,
  };
}
let Makeusre = Anuto_create("abubekr", 36);
console.log(Makeusre);
//cheking the existence of keys
console.log("name" in Makeusre);
//Exitenece can be undefined if no vallueassingned
for (key in Makeusre) {
  console.log(Makeusre[key]);
}
