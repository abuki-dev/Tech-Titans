//astributes
//teh dom cretaes for evry tag of teh html fo rteh standard atributes eg=id value and so on
if (document.getElementById("root")) {
  //alert(user.getAttribute("property"))
  let radios = document.querySelectorAll("input");
  for (const element of radios) {
    element.addEventListener("click", () => {
      Chekit(radios);
    });
  }
  function Chekit(inputs) {
    for (let x of inputs) {
      if (x.checked) {
        x.parentElement.classList.add("selected");
      } else {
        x.parentElement.classList.remove("selected");
      }
    }
  }
}
