const path = require("path");
console.log(path.join(__dirname, "../public"));
let ab = { title: "", author: "abuki", year: "4000" };
const { title } = ab;
console.log(!title.trim());
