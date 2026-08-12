//get teh users data there and after retriving add new propert age then display it at the promise
class Myerror extends Error {
  constructor(message) {
    super("Propery Missed " + message);
    this.name = this.constructor.name;
  }
}
class Noproperty extends Myerror {
  constructor(message) {
    super(message);
  }
}
function addnewproperty(object, property) {
  return new Promise((resolve, reject) => {
    if (!property) {
      reject(new Noproperty("Error no Value for property"));
    }
    if (!object.age) {
      reject(new Myerror("Age"));
    }
    object.gpa = property;
    resolve(object); //hit
  });
}

// error with promiess
fetch("./user.json")
  .then((response) => response.json())
  .then((data) => {
    try {
      addnewproperty(data, "null").then(
        (resolve) => {
          console.log("New property aded sucssfully");
          console.log(resolve);
        },
        (rejected) => {
       console.error(rejected.message)
        },
      );
    } catch (error) {
      console.log(error.message);
    }
  })
  .catch((error) => {
    console.log("Error Cannot get from the origin " + error.message);
  });
