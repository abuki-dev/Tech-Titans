//event_driven pro mean the code is driven and teh flow is determined bu user action or the trigrered evnet

//evnt created using emit("myevent") or tiggeres  and handeled by on("myevent",funtion)
// teh event reqires event module and teh emitter is acced from teh class emiiter

//let us creat event thta happnes after 3 secend and say hellow
// 1 add teh evnt module
// 2 create the object form teh module
// 3 draw weclome message funtion
// 4 attach the cretaed object the lister (on)
// 5 after 3 secodns emitthe event
const { log } = require("console");
let event_Module = require("events"); //1
let customevent = new event_Module(); //2

function welcome_user() {
  console.log("Wellcome abuki to the freecodecamp");
} //3
customevent.on("welcome", welcome_user);
setTimeout(() => {
  customevent.emit("welcome");
}, 3000);

//like what we saw  at the events we can ad more listners on one trigger event

//? the emmit can have teh arguments to pass to the listner
function rabbit(speak) {
  console.log("The rabbit says " + speak);
}
customevent.on("letTherabbitTalk", rabbit);
customevent.emit("letTherabbitTalk", "squek sqkeak");

//Firt ting is we have to regiwter an event emmiter then wecatrigger it
// eXample
customevent.on("registerig", () => {
  console.log("hellow world");
}); //here we regestered it but we ddint emmit it so this code wont be run untill emmited
//? we have to keppp teh equentse also firstignis we have to regiter tyen emmmt it
