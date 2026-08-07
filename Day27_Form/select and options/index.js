//select has 3 fatures optio s value & selectedIndex
let slectelement = document.forms.myform.departments;
slectelement.addEventListener("click", (event) => {
  event.preventDefault();
  let index = event.target.selectedIndex;
  console.log(slectelement[index].dataset.level);
    console.log(slectelement[index].innerText);
});

// //let us find optio with Value IT
// //form arry form te select option hen find element whose value is IT
// let sw = Array.from(slectelement).find((option) => option.value == "SW");
// sw.value = "Software engineering";
// console.log(sw);

// //creating option elemeny
// let newoption = new Option("NewProperty", "newDepartnment", true, true);
// newoption.setAttribute("name", "unknown");
// slectelement.append(newoption);
// console.log(slectelement.options.unknown);
let Childrens = {
  ametu: "Entrace",
  abuki: "Software",
  fatumet: "Kg",
  neju: "ministry",
  emran: "garade 1",
  mahir: "not started",
  zeya: "Remideal",
};
//iterat for every key the create element options with key as as text and value as value
//immideately append the at the sletect element
for (const key in Childrens) {
  if (!Object.hasOwn(Childrens, key)) continue;
  const element = Childrens[key];
  let option = new Option(key, element);
  option.dataset.level = element;
  slectelement.append(option);
}
