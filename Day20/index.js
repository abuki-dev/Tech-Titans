for (const element of document.body.children) {
    if (element.matches(".kira")) {
      console.log("i found abuki");
    }
    if (element.matches(`a[href$="hafiz"]`)) {
      console.log("i found hafiz");
    }
    if (element.textContent == "kira") {
      console.log("abuki");
    }
  console.log(element);
}
let lastchild = document.querySelector(".fourth");

console.log(lastchild.closest(".parent"));
console.log(lastchild.closest(".child"));
console.log(document.body.children);
let lists = document.getElementsByTagName("li");

for (let list of lists) {
  console.log(list);
}
