//Modules
//modules is abuilt in method provided by Node.js  allows us to :
// 1: reuse block of code
// 2: make the code manageable
// 3: reduce complexity
//here is the step you write a block of code functions variables or any other ting that u wanna use again
//Expost usign module.exports or export= {variable} // exported as object
//now let us import it and use it  using require(".path to the object exported") astor it at a variable
let variabletoexport = "This variable is exported ";
//let us export it
module.exports = variabletoexport;
//this variable is exposrted
// console.log(module);
//here it imported or we have to write this code into anoer file circular calling is not allowed
// let object = require("./modules.js");
// console.log(object);

//Key tings on export
//1 its an objet proviede by Nodde.js
//2 recomennded exporting everying as object
//eg module.exports = {variabletoexport}; so we can import is using destructuring if not we hav eto be care full that it will get overwriten and teh varibal ewe exported lost and cnnnotbe used
