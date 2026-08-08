let elemet = document.getElementsByTagName("INPUT").email;
elemet.addEventListener("blur", (event) => {
  event.preventDefault();
  if (!elemet.value.includes("@")) {
    elemet.classList.add("blur");
    elemet.focus();
  } else {
    elemet.classList.remove("blur");
  }
});

