//
//innerHtml:the contents
//outerHtml
//textcontent
//data
const hide = document.getElementById("hide-btn");
const meform = document.getElementsByClassName("login-container")[0];
function hidebody() {
  if (meform.hidden) {
    hide.textContent = "Hide";
    meform.hidden = false;
  } else ((meform.hidden = true), (hide.textContent = "Show"));
}

hide.addEventListener("click", () => {
  hidebody();
});
