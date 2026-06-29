if (document.getElementById("alert")) {
  let Div = document.createElement("div");
  let textNode = document.createTextNode("Here I am");
  Div.className = "alert";
  Div.innerHTML =
    "<strong>Hi there!</strong> You've read an important message.";
  document.body.append(Div);
}
if (document.getElementById("ol")) {
  let mylist = document.getElementById("mylist");
  let mynode = document.createElement("li");
  let text = document.createTextNode("perpended");
  mynode.textContent = text.textContent;
  mylist.prepend(mynode);
  createelement(mylist);

  let ols = document.querySelectorAll("li");

  ols.forEach((elemnt) => {
    elemnt.addEventListener("click", () => {
      elemnt.parentNode.prepend(elemnt);
    });
  });
}
function createelement(parents) {
  let elemnt = document.createElement("div");
  elemnt.innerHTML =
    "<p>Wellcome to the orderlits Clik lists to move tehm to teh first</P>";
  elemnt.className = "alert";
  let cloned = elemnt.cloneNode("true");
  parents.before(elemnt);
  cloned.textContent = "im cloned dont force me to do ny ting";
  parents.after(cloned);
  let x=document.createTextNode("abuki")
  document.append(x);
}
