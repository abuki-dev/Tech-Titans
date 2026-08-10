//instade of using js buit in error we add by our hands custom errors
//thsi is js buit in js erro class

//we wil extend error from buit in Error object
class customeror extends Error {
  constructor(message) {
    super(message);
    this.name = "CustomError";
  }
}
class InvalidKey extends Error {
  constructor(message) {
    super(message);
    this.name = "Age Error";
  }
}
function test() {
  throw new customeror("Whops");
}
try {
  test();
} catch (error) {
  console.log(error.name); //"Custome Error"
  console.log(error.message); //-"Whops"
}

function loadDatas(key) {
  return new Promise((resolve, reject) => {
    try {
      // users; users is not defined
      let allUsers = localStorage.getItem(key);
      if (!allUsers) {
        throw new InvalidKey("( Error while retriving Data under key : " + key);
      }
      resolve(JSON.parse(allUsers));
    } catch (error) {
      if (error instanceof InvalidKey) {
        reject(error);
      } else {
        throw error;
      }
    }
  });
}
loadDatas("All ").then(
  (fulfiled) => {
    console.log(fulfiled);
  },
  (notfulfiled) => {
    console.error(notfulfiled);
  },
);

//Further inheritance

