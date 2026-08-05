let elemet = document.getElementsByTagName("INPUT").email;
elemet.addEventListener("blur", (event) => {
  event.preventDefault();
  if (!elemet.value.includes("@")) {
    elemet.classList.add("blur");
  } else {
    console.log("reoved");
  }
});
