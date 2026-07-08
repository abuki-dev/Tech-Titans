let students = [
  {
    name: "ameterehman",
    age: 18,
    garde: 12,
    sex: "femlae",
    section: "D",
    Batch: "2014",
  },
  {
    name: "nejat",
    age: 12,
    garde: 4,
    sex: "femlae",
    section: "E",
    Batch: "2010",
  },
  {
    name: "fatumetu",
    age: 5,
    garde: 2,
    sex: "femlae",
    section: "B",
    Batch: "2018",
  },
  {
    name: "ahmed",
    age: 45,
    garde: 12,
    sex: "MALE",
    section: "C",
    Batch: "2017",
  },
  {
    name: "abubeker",
    age: 20,
    garde: 12,
    sex: "Male",
    section: "A",
    Batch: "2018",
  },
];

//generating automatic table from users data
//creat efuntion for cetating gad from teh table keys
//use user0 as templatefor geting  the keys
// for each key genrate TH first
// is teh crurunt value is conertable to numbr set attrbute nember
//  else set atribute string
//return teh theda
//creat fucntion for adding cell of teh datas
// itereate on the entier array of the students
//fpr each user
//create row for currunt user
//then creat cell for each data
//insert aproprate data at innertext / textcontent/InnerHtml
//iterte until end
//return the Tbody
//
//
const Container = document.getElementById("table_container");
let table = document.createElement("table");
let numberofhead = 0;
table.append(createHeadof_Table(students[0]));
table.append(createcells_Data(students));
Container.append(table);

function createHeadof_Table(UsersData) {
  let Head = document.createElement("thead");
  let row = document.createElement("tr");

  for (const key in UsersData) {
    numberofhead++;
    let th = document.createElement("th");

    th.textContent = [key].at(0).toUpperCase();

    if (+UsersData[key]) th.setAttribute("data-type", "number");
    else th.setAttribute("data-type", "string");

    row.append(th);
  }

  Head.append(row);

  return Head;
}

function createcells_Data(UsersData) {
  let tbody = document.createElement("tbody");

  UsersData.forEach((student) => {
    let currunt_Row = tbody.insertRow();

    tbody.append(insertDatas(currunt_Row, student));
  });

  return tbody;
}

function insertDatas(Row, User) {
  let celnumber = 0;
  for (const key in User) {
    let Cell = Row.insertCell();
    Cell.textContent = User[key];
    celnumber++;
  }
  while (celnumber < numberofhead) {
    let emptycell = Row.insertCell();
    emptycell.textContent = "-";
    celnumber++;
  }

  return Row;
}

//now after we finised then above let us add the sortiong logic for each column
//add event listner to the table
//if teh curtunt teh cliked is not th return
//else pass the targets index
//select the tbody teh form array from it
//
//then if the textContet is age Grade averafe sort use sort the arry of the rows  as number
//elese sort as strings
//the at the tbody append the sortedrows

table.addEventListener("click", (event) => {
  //if the target is not TH Return
  if (event.target.tagName != "TH") return;

  let th = event.target;
  let data = th.dataset.type;

  th_basedSort(th.cellIndex, data);
});
function th_basedSort(index, data) {
  //select rows teh form array ro make sortable

  let allRows = table.querySelector("tbody");
  let arrwayofrows = Array.from(allRows.rows);

  if (data == "string") {
    arrwayofrows.sort((a, b) =>
      a.cells[index].innerHTML > b.cells[index].innerHTML ? 1 : -1,
    );
  } else {
    arrwayofrows.sort(
      (a, b) => a.cells[index].innerHTML - b.cells[index].innerHTML,
    );
  }
  allRows.append(...arrwayofrows);
}
