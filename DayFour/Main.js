//Function make our code re ysabel sevealtimes
//deckarations
function showmesssage() {
  console.log("hellow world");
}
// fun with parametteres
function Name_of_fun(parm, param, ...params) {}
//1 varaiables are used onlyiside it
//pawhatever prameters can be no unlike c++ no datat types
function Wellcome(from, message) {
  console.log(from + ` Says ` + message);
}
Wellcome("the teachers message");
//if we pass onlyone variablke teh oter getts undefined so we can alterntly use ?? or assin git value
function Hlloew(message) {
  message = message ?? "no message ";
  message = message || "no message ";
  // we cna aslo do
  if (message === undefined) {
    message = "NO MESSAGE";
  }
  console.log(message);
}
Hlloew();
//returning after calling returns someting as value
function sum(x, y) {
  return x + y;
}
let Adder = sum(1, 2);
console.log(Adder); //1+2
/// returinng terms if we ant returnmultipe tin we must warp tehm inn one ()
function Dosomeitn() {
  return (
    13 + 12,
    console.log("hellow"),
    console.log("wait aminut who are you ")
  );
}
Dosomeitn();
//naming funtion staring forard
//adn function==comments means short and simple

//expressions
function Ask(q, sayYES, no) {
  if (confirm(q)) sayYES();
  else no();
}
function dispay_agreed() {
  alert("hey user abubeker you agreed teh agrenment");
}
function displat_disaged() {
  alert("disagrenmnent");
}

