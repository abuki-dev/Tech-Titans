let Users_info = [
  { name: "abubekr", age: 21 },
  { name: "ametereheman", age: 15 },
];
//teh gola is creating table from the array of ussers
//create funtion that acepts users data
//it creates table
//first it cretaes thead for the hedare then append it at teh table with the cells
//iterate for every user innfo
//cretae tr then cretae td for every values inside the object
//append the 2 rows at teh tr
// after that append this at the table cretaed

function cretaeTD() {
  return document.createElement("td");
}

function cretaeTR() {
  return document.createElement("tr");
}
function CreateTable(user_Data) {
  const Table = document.createElement("table");
  let tbody = document.createElement("tbody");
  let thead = document.createElement("thead");
  let tr = cretaeTR();

  let th = document.createElement("th");
  let anth = document.createElement("th");

  th.textContent = "Age";
  anth.textContent = "Name";

  tr.append(th);
  tr.append(anth);
  thead.append(tr);

  Table.append(thead);

  user_Data.forEach(({ name, age }) => {
    let row = cretaeTR();

    let col1 = cretaeTD();
    let col2 = cretaeTD();

    col1.textContent = age;
    col2.textContent = name;

    row.append(col1, col2);
    tbody.append(row);
  });
  Table.append(tbody);
  return Table;
}

let container = document.getElementById("table_container");
let t = CreateTable(Users_info);
container.append(t);
