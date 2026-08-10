//retrive from local forage items called allusers
//if all users exist dislpay them else return error
//start new promise useing resolve
// at the try catch find all users data
//then display or catch teh resut at th wepromisae

let retrivedata = new Promise((rseolve, reject) => {
  try {
    let allusers = localStorage.getItem("Rejected Users");
    if (!allusers) {
      throw new SyntaxError("No data founded at the local storage");
    }
    rseolve(JSON.parse(allusers));
  } catch (error) {
    if (error instanceof SyntaxError) {
      reject(error.message);
    } else {
      console.log("Unexpected Error");
      throw error.message;
    }
  }
});

retrivedata.then(
  (rseolve) => {
    console.log("Succsusufully retived " + rseolve.length + " Users Data");
    console.log(rseolve);
  },
  (reject) => {
    console.log("Error", reject);
  },
);
