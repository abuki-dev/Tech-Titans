//Promise.any does the work and wites only teh first setted promise
//only finds 1 trush values
//
Promise.any([
  new Promise((resolve, reject) => {
    setTimeout(() => {
      reject(new Error("Im out"));
    }, 1000);
  }),
  new Promise((resolve, reject) => {
    setTimeout(() => {
      reject(new Error("Im done doing  this"));
    }, 1500);
  }),
])
  .then((result) => console.log(result))
  .catch((error) =>
    error.errors.forEach((throwed) => {
      console.log(throwed.message);
    }),
  );
