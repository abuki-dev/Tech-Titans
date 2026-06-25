//dcetructuring menasin array or in obejcts we dont want to use everyting there so we chose only wgat we neeed
let arr = ["abuki", 44, 3696, "software engineere", "kiot"];
let [name, age, ...rest] = arr;
//console.log(age);
//console.log(rest); teh rest of teh array
//teh rght side only to be iterable notign nedded
let [a, b, c] = "abcd";
//console.log(a, b, c); //a b c
let user = {
  name: "abuki",
  nickname: "kira",
};
let [username, nickname] = Object.entries(user);
//console.log(username); // [name  abuki]
//console.log(nickname); // [nickname , kira]

//this distructuing also works in map and set sice they ar eiterable
let student01 = new Map();
student01.set("id", "Wour/3696/17");
student01.set("departnment", "software");
for (let [key, value] of student01) {
  // console.log(key + " " + value);
}
let options = {
  title: "Menu",
  width: 100,
  height: 200,
};
//destructuring object the keys must be stryclt smame as teh left sides
const { height: H, width: kira, title: T } = options;

let { key: K = "new key added", title: Time = "new title" } = options;
const { title: only_title, ...restof } = options;
//console.log(restof); //{widht heign}
let datas = {
  size: {
    width: 100,
    height: 200,
  },
  items: ["Cake", "Donut"],
  extra: true,
};
let { size, items, newVar = "im new variable" } = datas;
//console.log(items);{width  height}
//smart funtion tha understands teh default parameteres
function dsplayout_nofiction(message, notificationapp = "telegram") {
  console.log(`there is message from ${notificationapp} message says :`, [
    message,
  ]);
}
dsplayout_nofiction("hi", "facebook");
