let howmainyitems = prompt("how many items you wanna store");
+howmainyitems;
let LIST_of_items = {};
function insertitems() {
  for (let i = 0; i < howmainyitems; i++) {
    let name = prompt("pleas enter item name");
    let value = prompt("enter data inside");
    LIST_of_items[name] = value;
  }
}
insertitems();
console.log(LIST_of_items);
