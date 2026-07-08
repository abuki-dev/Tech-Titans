let student = {
  name: "John",
  age: 30,
  isAdmin: true,
  courses: ["html", "css", "js"],
  spouse: null,
};

//for converting to the json
//use JsoN.strignfy
let myJson = JSON.stringify(student);
//console.log(myJson);

// funtions symbols and properties that are undefind are ignored

let sayMissed_Datas = {
  name: "this propertiy is defined",
  id: undefined, //this is not defined
  hellow() {
    console.log("hellow tehre i am ", this.name);
  }, // also this is ignored only the nam ewil be dispalyed
};
let mised_Json = JSON.stringify(sayMissed_Datas);
//console.log(mised_Json);

//the full sytax is
//let json = JSON.stringify(value[, replacer, space])
//values actual value replacer if we want ad only specfied keys space the space for the object

let far_apart = JSON.stringify(student, ["isAdmin", "courses"], 1);
//console.log(far_apart);

//using cutum to json
let noew = {
  name: "abuki",
  student,
};
//console.log(JSON.stringify(noew));

//for converting back to the object weuse parse

let myobject = JSON.parse(myJson);
console.log(myobject);
console.log(myJson === JSON.stringify(student));

let jsonWate = {
  name: "abuki",
  Date: new Date(),
};
console.log(jsonWate);
