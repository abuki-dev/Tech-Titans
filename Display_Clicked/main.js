//teh goal is to display kesys pres on the Boody usingn InnerHtml
//for the body add event listner on keyup
//the dynamicaly cretae element if not exit
//else make the value inside of span the crated h1 to value of the key presed

let body = document.body;
body.addEventListener("keydown", (event) => {
  createVlue_andkey(event);
});

function createVlue_andkey(key) {
  let h1 = document.querySelector("h1");
  let p = document.querySelector("p");
  let conatiner = document.getElementById("container");
  if (!h1) {
    h1 = document.createElement("h1");
    let span = document.createElement("span");
    console.log(h1);
    p = document.createElement("p");
    let key_span = document.createElement("span");

    h1.textContent = "You clicked :";
    p.textContent = "Value :";

    span.classList.toggle("brown");
    key_span.classList.toggle("brown");

    h1.append(span);
    p.append(key_span);

    conatiner.append(h1);
    conatiner.append(p);
  }
  let key_span = h1.querySelector("span");
  let value_span = p.querySelector("span");

  key_span.textContent = key.code;
  value_span.textContent = key.key;
}
