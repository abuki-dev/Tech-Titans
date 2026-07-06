//add event click to teh tree
//use deligation to cath teh element being clicked
//at teh eelement cliced find teh first child element then toggleatributehidded

let tree = document.getElementById("tree").parentElement;
for (const element of tree.querySelectorAll("li")) {
  let span = document.createElement("span");
  element.prepend(span);
  span.append(span.nextSibling);
}
tree.addEventListener("click", (event) => {
  hideChildrenes(event.target);
});
function hideChildrenes(parent) {
  if (parent.tagName == "SPAN") {
    let tohide = parent.parentElement.querySelector("ul");
    if (tohide) {
      tohide.toggleAttribute("hidden");
    }
    return;
  }
  return;
}

//teh above was my logic let us se enhanceut
//make the parent nodees bolder
