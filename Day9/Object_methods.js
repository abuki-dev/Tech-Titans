//The key word This
//We know what Object is and tehy take an action usign funtion
//Exaple
//This keyword used as accesign method of tehobject isnide that object
let User = {
  name: "Abubekr",
  age: 15,
  SayHI: function SayHI() {
    console.log(`Hellow there I'm ${this.name} and new studnet`);
  },
};
//using this is beter taht euser.name is JS or we remove teh old object it woud cause an errrr
let Admin = User;
User = null;
Admin.SayHI();

//Short hand Emaple

let User_2 = {
  name: "Abubeker",
  Hellow() {
    console.log(`Hellow there I'm ${this.name} and new studnet`);
  },
};
User_2.Hellow();
//This evaluated at run time we must use object for that
function Runtimeivaluate() {
  console.log(`i'm ${this.age} Years old atudent`);
}
Admin.Tell_my_age = Runtimeivaluate;
Admin.Tell_my_age();
Admin["Tell_my_age"](); //This also works
