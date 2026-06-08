//1
let Admin = prompt("pelea enter username", "");
if (Admin === "Admin") {
  let password = prompt("enter your password", "");
  if (password === "Master") {
    alert("welcome master");
  } else if (password === null || password === "") {
    alert("Cancell");
  } else {
    alert("Wrong password");
  }
} else if (Admin === null || Admin === "") {
  alert("Cancelled");
} else {
  alert("i dont know you");
}
