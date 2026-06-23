// let john = { name: "John" };
// let ab = john;
// let weak = new WeakMap();
// weak.set(john, "jhon is alive");
// let map = new Map();
// map.set(john, "jhon is alive");
// john = null;
// console.log(weak.get(john));
// console.log(weak.has(john));
// console.log(map.get(john));
// console.log(map);
// console.log(weak);
const messages = require("./messages");
let localmessages = new WeakMap();
messages.forEach((elemet) => {
  localmessages.set(elemet, `${elemet.text} im ${elemet.from}`);
});

for (let index = 0; index < localmessages.size; index++) {
  console.log(localmessages.get(messages[index]));
}
