//create funtion uing recuce to group items in 1 object
//initilize then if elemnet not exit creta elese push the item
const mallItems = [
  { name: "Laptop", type: "electronics" },
  { name: "Chair", type: "furniture" },
  { name: "Phone", type: "electronics" },
  { name: "Table", type: "furniture" },
  { name: "Headphones", type: "electronics" },
  { name: "cabel", type: "electronics" },
  { name: "airpos", type: "electronics" },
];
function groubyitem(products) {
  //intiialize empty object
  let grouped = products.reduce((group, item) => {
    //chek weteher teh currunt type created in teh object or not
    if (!(item.type in group)) {
      group[item.type] = [];
    }
    // push the currunt name to the catagory at teh report then
    group[item.type].push(item.name);
    //after that fir teh next callback return the currrnt sate
    return group;
  }, {});
  return grouped;
}
console.log(new Array(groubyitem(mallItems)));
