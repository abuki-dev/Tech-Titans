//first get tehcontainer
//then add clik event to it
//find teh target elemnt then togggle atribute
//we used deligations or bubuling
let Container = document.querySelector(".container");
Container.addEventListener("click", (event) => {
  let targetd = event.target;
  targetd.toggleAttribute("hidden");
  console.log(targetd);
});
