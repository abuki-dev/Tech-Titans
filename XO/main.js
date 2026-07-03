let boxes = document.querySelectorAll(".box");
function Chekit(inputs) {
  for (let x of inputs) {
    if (x.checked) {
      x.parentElement.classList.add("turn2");
    } else {
      x.parentElement.classList.remove("turn2");
    }
  }
}

//alert(user.getAttribute("property"))
let radios = document.querySelectorAll("input");
for (const element of radios) {
  element.addEventListener("click", () => {
    console.log(element);
    Chekit(radios);
  });
}
//array of clolors also parsed as turn 1 and 2
//storing global varibale for swapimg the color of the turns
//onload generate auto turn for the game random mats then store the class or color at teh global variable
//for each box addd event listner if cliked set the global variable class to anoter turn

const COLORS = ["turn1", "turn2"];
let globalcgager = COLORS[1];
// function turnchekr() {
//   let choic = Math.floor(Math.random());
//   globalcgager = COLORS[choic];
// }
function changecolor(currunt, color) {
  currunt.classList.add(globalcgager);
}
boxes.forEach((box) => {
  box.addEventListener("click", () => {
    swapcolor(box);
    box.removeEventListener("click");
  });
});
function swapcolor(box) {
  if (globalcgager == COLORS[0]) {
    globalcgager = COLORS[1];
  } else {
    globalcgager = COLORS[0];
  }
  changecolor(box, globalcgager);
}
