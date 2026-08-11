//- 1 Promise All
// we use all when we want to excute all and wait all
//takes array of promises and returns apromise

class keyError extends Error {
  constructor(message) {
    super("Error while retrieving Data under " + message);
    this.name = this.constructor.name;
  }
}

function getdata(key) {
  return localStorage.getItem(key);
}
function promiseallData(Key1, key2, key3) {
  return Promise.all([
    new Promise((resolve, reject) => {
      try {
        let data1 = getdata(Key1);
        if (!data1) {
          throw new keyError(Key1);
        }
        resolve(JSON.parse(data1));
      } catch (error) {
        reject(error.message);
      }
    }),
    new Promise((resolve, reject) => {
      try {
        let data2 = getdata(key2);
        if (!data2) {
          throw new keyError(key2);
        }
        resolve(JSON.parse(data2));
      } catch (error) {
        console.log(error.message)
        reject(error.message);
      }
    }),
    new Promise((resolve, reject) => {
      try {
        let data3 = getdata(key3);
        if (!data3) {
          throw new keyError(key3);
        }
        resolve(JSON.parse(data3));
      } catch (error) {
        reject(error.message);
      }
    }),
  ]);
}

// USAGE
promiseallData("Usersdata", "Usersdata", "Usersdata")
  .then(([data1, data2, data3]) => {
    console.log("Users:", data1);
    console.log("Orders:", data2);
    console.log("Rejected Users:", data3);
  })
  .catch((error) => {
    console.warn(error.message);
  });


  //hrw we must consider tah in promise all if 1 files everytign gets failed so me must be consistent