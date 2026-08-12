//-- The bigger example here is fetch
//when we want to retrive dta from the fetch
//its promise
let me = fetch("./data.json")
  .then((response) => response.json())
  .then((data) => {
    console.log(data);
    return data;
  });
me.then((result) => {
  console.log(result);
});

//let us gry this usig try caths + custome errors
class FetchError extends Error {
  constructor(message) {
    super(message);
    this.name = this.constructor.name;
  }
}
try {
  fetch("./data.json")
    .then((response) => {
      if (!response) throw new FetchError("Fetching Error");
      return response.json();
    })
    .then((data) => {
      console.log(data);
    });
} catch (error) {
  console.log(error.message);
}
