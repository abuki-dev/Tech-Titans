function tryall(number) {
  return Promise.allSettled([
    new Promise((resolve, reject) => {
      if (number > 0) {
        resolve(number * 2);
      } else reject(new Error("Negative number not allowed"));
    }),
    new Promise((resolve, reject) => {
      resolve(number * 4);
    }),
    fetchdata("./data.json"),
  ]);
}
tryall(5).then((results) =>
  results.forEach((resut) => console.log(resut.value)),
);
function fetchdata(url) {
  return fetch(url)
    .then((response) => response.json())
    .then((result) => result)
    .catch((err) => {
      console.log(err.message);
    });
}
