//the goal is to use this but makwingotehr objects won affected

let hamster = {
  stomach: [],
  eat(food) {
    this.stomach.push(food);
  },
};

let speed = {
  __proto__: hamster,
};
let ethiospeed = {
  __proto__: hamster,
};
speed.eat("banana");
console.log(ethiospeed.stomach); //banana beacuse we are using shared property stomache so we must use separete stomaches for each user

speed.stomach = [];
ethiospeed.stomach = [];
ethiospeed.eat("apple");
speed.eat("meat");
;
