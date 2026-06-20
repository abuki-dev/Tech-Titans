//cheking if teh array is uniqe of creating new array using set
//create unikearray of new set
//use for each
//if cuurunt value not existin uniqe arra add it to it
function create_Uniqearray(oldArray) {
  let unique = new Set();
  oldArray.forEach((element) => {
    if (!unique.has(element)) {
      unique.add(element);
    }
  });

  return unique;
}
function is_Unique(array) {
  let obj = {};
  array.forEach((element) => {
    obj[element] = element;
  });
  return Object.keys(obj);
}
let values = [
  "Hare",
  "Krishna",
  "Hare",
  "Krishna",
  "Krishna",
  "Krishna",
  "Hare",
  "Hare",
  ":-O",
];
let result = create_Uniqearray(values);
console.log(is_Unique(values));
console.log(create_Uniqearray(values));
