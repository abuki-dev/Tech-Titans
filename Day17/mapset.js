//map keyed dtas liekobject
let map = new Map();
let name;
//cannnot assin to undefined or un dec;arade key
map.set(name, "abuki");
console.log(map.get(name));
map.delete(name);
console.log(map.has(name));
let john = { name: "John" };
let ben = { name: "Ben" };
// for every user, let's store their visits count
let visitsCountMap = new Map();

// john is the key for the map
visitsCountMap.set(john, john.name);
visitsCountMap.set(ben, ben.name);
//chang als works
visitsCountMap.set(1, "number").set(2, "anoter number");
//using for
let arrof_values = [];
// for (let users of visitsCountMap.entries()) {
//   arrof_values.push(users);
// }
// console.log(arrof_values);

//we can use aslo for each
// visitsCountMap.forEach((value, key, map) => {
//   console.log(`${key}: ${value}`);
// });

//crating object from tehmap entires
let mt_object = Object.fromEntries(visitsCountMap.entries());
console.log(mt_object);
