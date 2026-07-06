let value = document.getElementById("keyboard");
document.body.addEventListener("keyup", (event) => {
  let notallowed = ["CapsLock ", "Shift"];
  if (event.key == "Backspace") {
    value.value = value.value.slice(0, -1);
  } else if (notallowed.includes(event.key)) {
    return;
  } else {
    value.value += event.key;
  }
});
