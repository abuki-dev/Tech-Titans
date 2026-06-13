// //Constriuctors
// //Excuted using new adn aslo They named function By Cpital starting

// function NewUser(Name) {
//   //Automayoically create this object
//   this.Name = Name;
//   this.Age = 44;

//   // return this thia ia also auto
// }
// let user = new NewUser("Jhon");
// console.log(user);

// //new.target Chesk if we add tehnew construtor

// function User_create(Id, Name) {
//   if (!new.target) {
//     return new User_create(Id, Name);
//   }
//   this.Name = Name;
//   this.Id = Id;
// }
// let MY_user = User_create(6272, "Abuki");
// console.log(MY_user);

// //Returnign from Constructors
// //If retunrs objet then teh object retuned
// //else This returnd as usual

// function TheyEST_Retyrn() {
//   this.retuned = "nORMAL RETURN";
//   return;
// }
// function The_Retunobj() {
//   this.retuned = true;
//   return {
//     Object: "OBJECT RETURN",
//   };
// }
// function Primitv() {
//   this.retuned = "Primotive return";
//   return 7;
// }
// let NO_rmalreteurn = new TheyEST_Retyrn();
// let Return_object = new The_Retunobj();
// let Return_primitv = new Primitv();
// console.log(NO_rmalreteurn);
// console.log(Return_object);
// console.log(Return_primitv);

//Methos or functions using constructur
function Create_With_Greet(Name) {
  this.Name = Name;
  this.Greet = function () {
    console.log(`Hellow My name is ${this.Name}`);
    return 1;
  };
}
let Hellow = new Create_With_Greet("Guest User");

console.log(Hellow?.Greet());
