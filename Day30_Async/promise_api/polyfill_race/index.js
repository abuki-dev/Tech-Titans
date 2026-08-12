//If polyfil doesnt work we shpud use polyfills

//just we converte teh gievne promisess liek if the promise al setteld doesnt workded

if (!Promise.allsettled) {
  //generting templates for allsetteled we know the result temolates are
  //[
  //   {status: 'fulfilled', value: ...response...},
  //   {status: 'fulfilled', value: ...response...},
  //   {status: 'rejected', reason: ...error object...}
  // ]
  const rejectd = (reason) => ({ status: "rejected", reason });
  const resolved = (value) => ({ status: "fulfilled", value });

  Promise.allsettled = function (promises) {
    //resolve each promises given to us using resolve and attach teh templates
    const converted = promises.map((prom) =>
      Promise.resolve(prom).then(resolved, rejectd),
    );
    //then after attaching do all promies each promis wil get resolved beavoause resolve and rejected object will sucucusufully resoved with out any error so the drawback for the promise all is resolved
    return Promise.all(converted);
  };
}
Promise.allsettled([
  fetch("../allsettled/data.json")
    .then((respone) => respone.json())
    .then((result) => result),
  124,
])
  .then((responses) =>
    responses.forEach((responese) => {
      console.log(responese.value);
    }),
  )
  .catch((err) => console.warn(err.message));

//-Race
//thsi also one waits result or erros always wait for teh seetled and ignore the others

Promise.race([
  new Promise((resolve, reject) => {
    reject(new Error("Im teh firt one"));
  }),
  new Promise((resolve, reject) => {
    resolve("Im  never rum im raced ");
  }),
]).then(
  (resolve) => console.log(resolve),
  (reject) => console.warn(reject.message),
);
