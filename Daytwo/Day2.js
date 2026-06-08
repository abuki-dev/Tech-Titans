//Modals
//declrations
const Message = "Welcome to our page";
alert(Message);
let Username = prompt("pleas enter your name", "john");
confirm(`you have entered the name ${Username}`);

//converting strings
let user_age = 35;
let age_string = String(user_age);
console.log(` the new variable type is ${typeof age_string}`); //conveted to string
user_age = NaN;
age_string = String(user_age);
console.log(` the new variable type is ${typeof age_string}`);
user_age = undefined;
age_string = String(user_age);
console.log(` the new variable type is ${typeof age_string}`);
//converting numeric variables
let name = "12431";
let name_number = Number(name); //conversion succususs
console.log(`the new data type is ` + typeof name_number); //this also work using string methods
name = "    23423   ";
name_number = Number(name); //conversion succususs converted to number
console.log(`the new data type is ` + typeof name_number); //this also work
name = NaN;
name_number = Number(name); //conveted to number 0
console.log(`the new data type is` + typeof name_number); //this also work
name = "12" / "15"; //this automaticaly convertes to number teh operation is feasible
name = true;
name_number = Number(name); //converted to 1 if false converted to 0
//converting boleand
let to_boolean = "false";
console.log(Boolean(to_boolean)); //conversion sucussus become
to_boolean = " "; //this also true
to_boolean = NaN; //false;
to_boolean = undefined; //false
to_boolean = 435345; //true
to_boolean = 0; //false
to_boolean = "0"; //true
//the oprators best if we use tnem usng the js
//teh new  for us  is **

let Square_of_2 = 2 ** 2; //becames 4
Square_of_2 = 4 ** (1 / 2); //becames 2

//string concatenation using binary
let fnmae = "abubker";
let lastename = "ahmed";
let fullnmae = fnmae + " " + lastename; //this worked
fullnmae = "abubeker" + " " + "ahmed"; //this also worked
let updated_fname = fnmae + 1; //thsi will be abubeker1 js is easy unlike c++

//Numeric convertion  using urnary
//use sing plus operator if its nuberdo notign else conver to number this is the whole ting
let tonumber = "20";
+tonumber; //siply converted to the number 20
tonumber = true;
+tonumber; //becames 1 bolean true is 1

//numeric convertion usong binary
let first = "2";
let seccond = "4";
let coverted_result = first + seccond + 6; // becames 10 it applies + for both
//assingmen reurns value we know this
//imcrements and decrements( ++ ,--);
let age = 19;
age++; //bcamed 20
//we kbow thsi now let us chk out knoled about post and pre incrementiations
let oldage = 20;
let newage = oldage++; //new age stile 20
newage = ++oldage; //this time the new age becamed 21 we will aply this for teh decrementiations aslo simply understand teh  js flow ,js starts excuton every line

//comma here we use comma to separate svare statnets thats unsusual for us
let a = (1 + 2, 3 + 4); //the vale of the last one retuned to teh value of a
// mostly we dont use them
//copartions the string here is strict equality and normalr equality === ,==
alert("abebe" > "Abebe"); //js chkes every single leteters as we were akido
//diferrent types as commpared also use normal and strict here is the ting
alert(1 == "1"); //true bot situations can ocur ethr conveting tp number or string
alert(1 === "1"); //false strict must b esame data tyoe and same values
//whe we copare return a boolean value.
//strings are comared letter by leter

//Conditionals
//1 the if statement
// as we know chkes the opration isinde  teh braces then if tru ren other wise not ru
if (contioon) {
  // is code runes if teh contionion true
}

// the js new  if condion ? single
condition ? console.log("i'm true") : console.log("i'm false");

//multipple ?
condition1
  ? console.log("contion one true")
  : condition2
    ? console.log("contion 2 ture")
    : "noting true like teh kast else ";
(
  //aslo we can use
  comditon_expected_tobe_true
)
  ? "true"
  : "false";

//Logical opertions co confution we know tehm well
//|| (OR) assuptions
//or finds the first true value
if (a || b || c) {
  //runs if one of them is true
}

//&& (AND) and finds or rus wen everytign is true it becamed true
if (a && b && c) {
  //runs only whe everytig is true
}
//! (not )
//returns teh inversed value of the te output or teh conditoon

//Nullish colascading ??

// we us them when tehd eclarad value is both null and undefined

// we asssing it a new value

let Undefined_variable;
console.log(Undefined_variable ?? "default value to be rturned ");

//loops
//while loop
// we use them we wen repeat the expresstions agan adn agan until some contion is not flase
while (coditon) {
  //this blok runs and evry time it chkes teh contion the excute agan if true
}
//Do-whuile
//this is also while loop but exutes the code first tehe ckes teh contion at teh bottom
do {
  //excute tehn came back agan
} while (condition);

//for loop
//this aslo one of the best iteration types we use
for (start; contioon; steps) {
  //teh block of code taht runs
} //we can ignor rhe steps if included in side teh blok
//break and continue
for (let index = 0; condition0; index++) {
  if (condition1) break; //stopes if we meet tehcondition we wanted
}

//switches are liek teeh if contion noting new justthe sytax are diffrent
switch (key) {
  case condition1:
    //code for value 1
    break;
  case condition2:
    break;
  case condition3:
    break;
  //if the rest are nos suitable we mak eteh defaukt statment
  default:
    break;
}
