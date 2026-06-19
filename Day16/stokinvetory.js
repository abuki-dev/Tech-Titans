//resok arrays aregenerated whe therold is low
//chekif the currunt stok if it less of thetsold
//if true push currun titems name to restocklists
//add currunt costs to totalResokck
//chek if teh catgeory exist in lsis of stock names if no creat enew
//else push currun item to category
//catagory add teh cuurunt by the items nedded items
const inventory = [
  {
    item: "Apples",
    category: "Fruit",
    stock: 150,
    minThreshold: 50,
    costPerUnit: 0.5,
  },
  {
    item: "Milk",
    category: "Dairy",
    stock: 12,
    minThreshold: 20,
    costPerUnit: 1.5,
  },
  {
    item: "Bread",
    category: "Bakery",
    stock: 8,
    minThreshold: 15,
    costPerUnit: 1.2,
  },
  {
    item: "Cheese",
    category: "Dairy",
    stock: 40,
    minThreshold: 10,
    costPerUnit: 2.0,
  },
  {
    item: "Bananas",
    category: "Fruit",
    stock: 5,
    minThreshold: 30,
    costPerUnit: 0.3,
  },
];

function generte_sock_alert(invData) {
  const Report = {
    restockList: [],
    totalRestockCost: 0,
    byCategory: {},
  };
  invData.forEach(({ item, category, stock, minThreshold, costPerUnit }) => {
    if (stock < minThreshold) {
      Report.restockList.push(item);
      Report.totalRestockCost += (minThreshold * 2 - stock) * costPerUnit;
      if (!(category in Report.byCategory)) {
        Report.byCategory[category] = [];
      }
      Report.byCategory[category].push(item);
    }
  });
  return Report;
}
let Dta = generte_sock_alert(inventory);
console.log(Dta);
