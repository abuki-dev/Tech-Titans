//goal is updating the invetory products
//od operations where the quintiii is geter tha zero
// map and updat ethe proce of each element by 10% discount
//reduce then calcukat eteh total vlue of remainings
const inventory = [
  { name: "Laptop", price: 1000, quantity: 5 },
  { name: "Phone", price: 500, quantity: 0 }, // Out of stock! Skip this.
  { name: "Mouse", price: 50, quantity: 10 },
  { name: "Monitor", price: 300, quantity: 2 },
];
function manageInventory(products) {
  let copy_then_use = [...products];
  copy_then_use = copy_then_use.filter(
    (item, index, array) => item.quantity > 0,
  );
  copy_then_use.map((item) => (item.price -= item.price * 0.1));
  let totalInvetoryValue = copy_then_use.reduce(
    (result, item) => (result += item.price * item.quantity),
    0,
  );
  return {
    discountedProducts: copy_then_use,
    totalInvetoryValues: totalInvetoryValue,
  };
}
console.log(manageInventory(inventory));
