//crating object that have ecery key an values or etries
let map = new Map();
map.set("name", "jhon");
let keys = Object.fromEntries(map);

keys.push = function push(key, value) {
  map.set(key, value);
  this[key] = value;
};
keys.push("user", "name");
console.log(map);
