//goals is creating list elemnts until user cnaceles it
//do while loop
//accept text what th user eneterd the creta li eleen tan dappent it with the rest
//chen if true the prompt continue elese return
if (document.getElementById("task1")) {
  let container = document.getElementById("container");
  let text;
  callbackme();
}
function callbackme() {
  if ((text = prompt("enter the text you wnat to add "))) {
    let li = document.createElement("li");
    li.textContent = text;
    container.append(li);
    alert(`an Html ${li.nodeName} element created with ${li.textContent}`);
    setTimeout(() => {
      callbackme();
    }, 500);
  }
}

if (document.getElementById("hafiz")) {
  let abcd = document.createElement("p");
  abcd.textContent = "elememn created";
  document.body.append(abcd);
}
