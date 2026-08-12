//wehen we chsin propises usin then at every pass the new romise with result
//
let chain = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve(5);
  }, 1000);
});
chain
  .then((result) => {
    result *= 2;
    console.log("result is now ", result);
    return result;
  })
  .then((result) => {
    result *= 2;
    console.log("result is now ", result);
    return result;
  });
