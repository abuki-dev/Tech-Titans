const subscriptions = [
  { id: "sub_1", user: "Alice", plan: "Premium", price: 49, status: "active" },
  { id: "sub_2", user: "Bob", plan: "Basic", price: 19, status: "canceled" },
  {
    id: "sub_3",
    user: "Charlie",
    plan: "Premium",
    price: 49,
    status: "active",
  },
  {
    id: "sub_4",
    user: "David",
    plan: "Enterprise",
    price: 199,
    status: "active",
  },
  { id: "sub_5", user: "Eve", plan: "Basic", price: 19, status: "cancelled" },
];
//creating map from objetentriee
let accounts = new Map(Object.entries(subscriptions[0]));
console.log(accounts);
let array = new Array(accounts);
console.log(array[0]);
