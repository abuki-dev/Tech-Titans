let Menu = {
  width: 300,
  heigh: 200,
  title: "Menu",
};
console.log("BEFORE TEST");
console.log(Menu);
function MultiplyNumerics(To_be_multiplied) {
  if (isEmpty(To_be_multiplied)) {
    console.log("your onejct is empty");
  } else {
    for (keys in To_be_multiplied) {
      if (typeof To_be_multiplied[keys] === "number") {
        To_be_multiplied[keys] *= 2;
      }
    }
  }
}
function isEmpty(IS_empty_object) {
  for (key in IS_empty_object) {
    return false;
  }
  return true;
}
console.log("After Test");
MultiplyNumerics(Menu);
console.log(Menu);
