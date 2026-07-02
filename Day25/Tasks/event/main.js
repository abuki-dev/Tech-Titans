const buttons = document.querySelectorAll("button");
function hideverbuttons() {
  buttons.forEach((element) => {
    if (element.value == "display") {
      if (element.textContent.includes("Hide")) {
        element.textContent = "Display Everyting";
      } else element.textContent = "Hide";
    } else {
      element.toggleAttribute("hidden");
    }
  });
}
display.addEventListener("click", hideverbuttons);
hover.addEventListener("mouseout", tellmyname);
function tellmyname(event) {
  alert(`i am ` + event.type);
}
hoverhide.addEventListener("mouseover", hideslef);
function hideslef() {
  this.hidden = true;
}
function deleteselef() {
  this.remove();
}
remove.addEventListener("click", deleteselef);
