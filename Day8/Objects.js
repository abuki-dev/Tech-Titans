//contains primirive values means their value only single atribute or value
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
//Folder 2 coping
//teh diffrence is refencing and where primiteve cy tthe while valeu
let usernme = "@sometin";
let Usre2 = usernme; //2 independet variables created
Usre2 += "abuki";
console.log(Usre2);
console.log(usernme); //the old value not chaged
//OBJECTS differe thye passed ass reference
let Teachers = {
  depart: "Software Engineering",
  Total: 42,
};
let NEW_Teachers = Teachers; //oprations held at news affect theprginall

NEW_Teachers.Staffs = "Active workers";
console.log("Staffs" in Teachers); //outputs true
//Coparition by referecnce
console.log(Teachers === NEW_Teachers); //True both refer the same ting
let a = {};
let b = {};
a == b; //is not true
//Merging and clongign the solution
let Clone_Teachers = {};
for (keys in Teachers) {
  Clone_Teachers[keys] = Teachers[keys]; //clone succsuss like inserting individual data to new object
}
Clone_Teachers.depart = "Coputer scince";
console.log(Clone_Teachers.depart); //the new valuee
console.log(Teachers.depart); //the old value
//Another method to clone
//Object.assign(targetobjec,sources)sources are the the values taht are merged to it
let User = {
  name: "Jhon",
};
let Permission = { Canvievew: true };
Object.assign(User, Permission);
delete Permission.Canviev; //to show coping
console.log(User);
//Another method is
let clone_User = Object.assign({}, User);
clone_User.name = "abubekr";
console.log(User.name);
let Nested = {
  name: "usre_name",
  contact: {
    phone: "0984296485",
    email: "abubekra@Gmail.com",
  },
};
let Nested_test = Object.assign({}, Nested);
Nested_test.contact.email = "Affected by the new object ";
console.log(Nested.contact.email);
//TO aoid this we use structure clone
let Structured = structuredClone(Nested);
Structured.contact.email = "Abubekra04@Gmail.com";
console.log(Structured.contact.email); //The new
console.log(Nested.contact.email); //the old value that is not affected
//Garbage Collections
//JS store teh values that are accesible
let Global = {
  name: "Nejib",
  email: "Nejim@gmail.com",
};
let Copy_global = Global;
Global = null; //THE copy lost automayically but if we clone or megere structure clone its not affected

