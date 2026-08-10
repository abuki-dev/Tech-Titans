//Furter inheritance on error
class Myerror extends Error {
  constructor(message) {
    super(message);
    this.name = this.constructor.name;
  }
}

class validateError extends Myerror {}
class Propertyerror extends validateError {
  constructor(property) {
    super("No property " + property);
    this.property = property;
  }
}

function parsedata(message) {
  let usres = JSON.parse(message);
  if (+message || !usres) {
    throw new Error("Error invalid Data");
  }
  if (!usres.name) {
    throw new Propertyerror("name");
  }
  console.log(usres);
}
function getData(key) {
  try {
    parsedata(key);
  } catch (error) {
    if (error instanceof Propertyerror) {
      console.log("Error at Object " + error.message);
    } else if (error instanceof SyntaxError) {
      console.log("Error On JSON " + error.message);
    } else {
      console.log(error.message);
    }
  } finally {
    console.log("The oprations done is done ");
  }
}

let Data;
getData(Data);
Data = '{ "age": 25 }';
getData(Data);
