//Total revenue
//category revemue
//product usnits
//Best seller
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
let Report = {
  Total_Reve: 0,
  Catergory_Revneue: {},
  Product_Units: {},
  BestSeller: "",
};

function Total_Revenue(SOLD_items) {
  let BestSeller = transactions[0];

  SOLD_items.forEach((element) => {
    if (!element["Catergory_Rev"]) {
      element["Catergory_Rev"] = 0;
    }
    element["Catergory_Rev"] += element.quantity * element.price;

    Report.Total_Reve += element["Catergory_Rev"];

    Report.Catergory_Revneue[element.category] = element["Catergory_Rev"];

    Report.Product_Units[element.product] = element.quantity;

    if (element.quantity > BestSeller.quantity) {
      BestSeller = element;
    }
  });

  Report.BestSeller = BestSeller.product;
}
Total_Revenue(transactions);

console.log(Report);
