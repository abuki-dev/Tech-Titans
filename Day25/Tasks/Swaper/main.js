//add event lsitner to each buttons
//if cliked
//set teh grlobal varibale to increas by one after maping increas e
//if sets are now 2
//then swap them usin gteh previous method
const buttons = document.querySelectorAll("button");
let Global = 0;
let mymap = new Map();

buttons.forEach((element) => {
  element.addEventListener("click", () => {
    storethenswap(element);
  });
});

function storethenswap(element) {
  mymap.set(++Global, element);
  if (Global == 2) {
    readyforswap();
  }
}
function reventing() {}
function readyforswap() {
  //generating object then convert values  to array to swap them
  let mapArray = Object.values(Object.fromEntries(mymap));
  let clone1 = mapArray[0].cloneNode(true);
  let clone2 = mapArray[1].cloneNode(true);
  clone1.addEventListener("click", () => {
    storethenswap(clone1);
  });
  clone2.addEventListener("click", () => {
    storethenswap(clone2);
  });
  mapArray[0].replaceWith(clone2);
  mapArray[1].replaceWith(clone1);
  Global = 0;
  mymap.clear();
}
