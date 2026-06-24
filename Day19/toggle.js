const bun = document.getElementById("color");
bun.addEventListener("click", () => {
  chngeTheme();
});
function chngeTheme() {
  if (bun.innerText == "Dark Mode") {
    if (confirm("dark mode will be enabled")) {
      document.body.style.background = "black";
      bun.innerText = "Light Mode";
      bun.style.background = "white";
      bun.style.color = "black";
    }
  } else {
    if (confirm("do want light mode enabled")) {
      document.body.style.background = "white";
      bun.innerText = "Dark Mode";
      bun.style.background = "black";
      bun.style.color = "white";
    }
  }
}
let ab = bun.nextElementSibling.lastElementChild.firstElementChild.style.color="red";
console.log(ab);
