//-- DOMContent Loaded
//everyting loaded and do  is ready but external resources may not be applied
//if styles applied befor teh script tag it must wait until loaded since every tag mut me applied
document.addEventListener("DOMContentLoaded", sayhellow);
function sayhellow() {
  console.log("Evryting is ready and the document loaded succsfully");
  console.log(getComputedStyle(document.body).marginTop);
}
// sometoes there is wait for tehpasswrd auto filling

//--load or onload
// awaits every resourece to be succussus fully loaded
window.addEventListener("load", () => {
  console.log("load fully loaded ");
});

document.addEventListener("unload", () => {
  alert("areyou rely want to quait");
});
