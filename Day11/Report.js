const transactions = [
  {
    id: 1,
    category: "Electronics",
    product: "Laptop",
    price: 1000,
    quantity: 1,
    date: "2026-06-01",
  },
  {
    id: 2,
    category: "Clothing",
    product: "T-Shirt",
    price: 20,
    quantity: 3,
    date: "2026-06-02",
  },
  {
    id: 3,
    category: "Electronics",
    product: "Mouse",
    price: 50,
    quantity: 2,
    date: "2026-06-02",
  },
  {
    id: 4,
    category: "Clothing",
    product: "Jeans",
    price: 60,
    quantity: 1,
    date: "2026-06-03",
  },
  {
    id: 5,
    category: "Books",
    product: "JS Guide",
    price: 30,
    quantity: 5,
    date: "2026-06-04",
  },
  {
    id: 6,
    category: "Electronics",
    product: "Laptop",
    price: 1000,
    quantity: 1,
    date: "2026-06-05",
  },
];
let report = {
  totalRevenue: 2370,
  categoryRevenue: {
    Electronics: 2100,
    Clothing: 120,
    Books: 150,
  },
  productUnits: {
    Laptop: 2,
    "T-Shirt": 3,
    Mouse: 2,
    Jeans: 1,
    "JS Guide": 5,
  },
  bestSeller: "JS Guide", // Because it sold 5 units
};
//iterate though the trabsactions
//gerate totl revuniue by summing and multplying the the quntity // or sumn gtehcatagory revenue
// prodatnunit bythe wuanty imple way
// best seller coparing evey thing as we go
const Report = {
  totalRevenue: 0,
  categoryRevenue: {},
  productUnits: {},
  bestSeller: "",
};
function generate_report(Transactions) {
  for (let index = 0; index < transactions.length; index++) {
    let rev = Transactions[index].price * Transactions[index].quantity;
    Report.totalRevenue += rev;
    //first let us do category revenue for each

    // let chek if this categorey registered first
    if (!(Transactions[index].category in Report.categoryRevenue)) {
      Report.categoryRevenue[Transactions[index].category] = 0;
    }
    Report.categoryRevenue[Transactions[index].category] += rev;

    //now we do product units as we go
    if (!(Transactions[index].product in Report.productUnits)) {
      Report.productUnits[Transactions[index].product] = 0;
    }

    Report.productUnits[Transactions[index].product] +=
      Transactions[index].quantity;
  }
}
generate_report(transactions);
console.log(Report);
