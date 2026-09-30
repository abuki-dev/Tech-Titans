//event loop is js engine while workig and waiting tasks sleeping
let i = 0;
let start = Date.now();
function count() {
  for (let j = 0; j < 1e9; j++) {
    i++;
  }
  console.log("Done in ", (Date.now() - start) / 1000, " Seconds");
}
count();
