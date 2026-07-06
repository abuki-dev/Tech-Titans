//add event lsitner to the container to inheret or to use deligations and bubbling
//if cliked put currunt element to the map using event.target
//evry click update the global variable
//then swap them usin gteh previous method
let buttons_map = new Map();
let ancestorr = document.getElementById("container");

ancestorr.addEventListener("click", (event) => {
  storethenswap(event.target);
});

function storethenswap(element) {
  buttons_map.set(element.value, element);
  if (buttons_map.size == 2) {
    readyforswap();
  }
}
function readyforswap() {
  //generating object then convert values  to array to swap them
  let mapArray = Object.values(Object.fromEntries(buttons_map));
  let clone2 = mapArray[1].cloneNode(true);
  //instade of creting both element swap values while storing teh other cloned
  mapArray[1].value = mapArray[0].value;
  mapArray[1].textContent = mapArray[0].textContent;
  mapArray[0].replaceWith(clone2);
  buttons_map.clear();
  chekOrdered();
}

function chekOrdered() {
  const buttons = document.querySelectorAll("button");
  let foundfalse = Object.values(buttons).map(
    ({ value }, index) => index + 1 == value,
  );
  console.log(foundfalse);
  if (!foundfalse.includes(false)) {
    alert("sucussufuly ordered ");
    setTimeout(() => {
      trunciatelists();
    }, 200);
  }
}

//the goal is to auto trunciationg the buttons list
//on load generate array of numberes from 1 to 10
//while the array is not empty
//generate random numbur from 0 to arraylength-1
//then cretae element button using teh randomindex
// assing value and textconntet to the value i the nedexed value
//then remove the currunt element from array
//append the currunt button to the container then
//repeat until end
function trunciatelists() {
  let values = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  ancestorr.innerHTML = "";
  while (values.length != 0) {
    let index = Math.floor(Math.random() * values.length);
    let currunt_button = document.createElement("button");
    currunt_button.value = values[index];
    currunt_button.textContent = values[index];
    values.splice(index, 1);
    ancestorr.append(currunt_button);
  }
}
