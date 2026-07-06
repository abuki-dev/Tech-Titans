let button = document.getElementById("prevent");

button.addEventListener("contextmenu", (event) => {
  event.stopImmediatePropagation();
  alert(this.event.target.tagName.toLowerCase());
});
