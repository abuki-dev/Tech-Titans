let users = {
  a: "1",
  b: "2",
  c: "a",
};
function swapgiveobjet(obj) {
  let mapobject = new Map(Object.entries(obj));
  mapobject.forEach((element, key, mapobject) => {
    mapobject.set(element, key);
    // mapobject.delete(key);
  });

  console.log(mapobject);
  let tobereturned = Object.fromEntries(mapobject);
  return tobereturned;
}
console.log(swapgiveobjet(users));

const { a, b, ...rest } = users;
console.log(a);
