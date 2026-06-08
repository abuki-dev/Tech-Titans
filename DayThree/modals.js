// alert("welcome to our page");
// const ENTER = document.getElementById("enter");
// function askusername() {
//   let Name = prompt("pleas enter your namae here", "Anonymes");
//   Show_confirmation(Name);
// }
// function Show_confirmation(Name) {
//   let Confirm = confirm(
//     `Welcome User ${Name} Pleass click OK to confirm your Name`,
//   );
//   Confirm === true ? Display_Name(Name) : askusername();
// }
// function Display_Name(Name) {
//   let User = document.getElementById("user");
//   User.value = Name;
// }
// ENTER.addEventListener("click", () => {
//   askusername();
// });
//login only the admin other wise deny acces
let Asking_Account = prompt(
  "Wellcome This is Tech Titans Pleas Enter Username",
);
function Cancelled_message() {
  alert("Operation Cancelled");
}
function Show_welcome() {
  alert("welcome Master");
}
function Check_the_Admin(Accoutnt) {
  switch (Accoutnt) {
    case `Admin`:
      Two_step_verfication();
      break;
    case ``:
      Cancelled_message();
      break;
    default:
      alert(`Hey ${Accoutnt} I don't Know you`);
  }
}
if (Asking_Account) {
  // we acepted value now let us chek if the entered value  is "Admin"
  Check_the_Admin(Asking_Account);
} else {
  Cancelled_message();
}
function Two_step_verfication() {
  let Passsword = prompt("Pleass Enter Account Password");
  if (Passsword) {
    switch (Passsword) {
      case "0000":
        Show_welcome();
        break;
      default:
        alert(`Incorrect password try agan later`);
    }
  } else {
    Cancelled_message();
  }
}
