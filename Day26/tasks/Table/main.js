//add event listner to the table
//only target for TH tagnamae
//then pass the  data set of teh targeted TH
//generate afuntion that accepts the dataset
//  acceses the tabody  form the table
//the for the rows in the body gnereta arrays
//for ecah row in array
//  if adata sate is string sort as string
//   else if teh adta sat is nubere sort as number
// then appand eeach row at the  body

const myTable = document.getElementById("mytable");
myTable.addEventListener("click", (event) => {
  console.log(event.target.dataset.type);
  if (event.target.tagName == "TH") {
    sortmytable(event.target.dataset.type);
  }
});
function sortmytable(type) {
  let tableBody = myTable.querySelector("tbody");
  let arraytobesort = Array.from(tableBody.rows);

  if (type == "number") {
    arraytobesort.sort(
      (a, b) => a.cells[0].textContent - b.cells[0].textContent,
    );
  } else {
    arraytobesort.sort((a, b) =>
      a.cells[1].textContent > b.cells[1].textContent ? 1 : -1,
    );
  }

  tableBody.append(...arraytobesort);
}
