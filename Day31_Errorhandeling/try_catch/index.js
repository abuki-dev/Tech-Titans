//try cath as ablock of code like we try the code and tehn we cath the error if exist
try {
  localStorages;
  console.log("i will try to run");
} catch (error) {
  console.error(" Error ", error.name);
}

let server_data = "{bad:json}";
try {
  let user = JSON.parse(server_data);
} catch (error) {
  console.log(
    "there is an error in teh parsing users data above ,",
    error.name,
  );
}

//--Error Object
//wehn error occur js generates objet with error infos teh ready to catch
// all beuit in error have //--[message] ,[stack] and [name] deafult properties
//*message infos about teh error like errro readin undefined
//*name error name referece eroro and so many names
//* stack whenre thi ero happend at the call stack tha led to error

//-throwing own errors for the secifc situation
let customerror = new Error("error Division By zero");
let synatx = new SyntaxError("Erro while reading conde lines");
let ref = new ReferenceError("This is referecer erroro");

//for the above obejcts
//- for error object the name and the message taken from te construcors name as constractor name and message as message or argument passed
// console.log(customerror.message); //erro Division by zero
//console.log(synatx.name); //SyntaxError

//Example
//try error caths every type of error
function throwingerror() {
  try {
    let data = '{ "age": 30 }';
    let result = JSON.parse(data);
    if (!result.name) {
      throw new Error("The given user data doesn have all in formations");
    }
    console.log(result);
  } catch (error) {
    console.error(error.message);
    console.log(error.name);
  }
}
throwingerror();
//--re throwing Errors
// if errors happend out of errors tah we assum like
// we cath every erorr and isnide teh cath block we handel it

function catchnegatives(number) {
  setTimeout(() => {
    try {
      hsdg;
      if (number < 0) {
        throw new SyntaxError("Only positve numberes allowed");
      }
      console.log("you entered ", number);
    } catch (error) {
      if (error instanceof SyntaxError) {
        console.error("Numbers Error happened ", error.message);
      } else {
        throw error;
      }
    }
  }, 1500);
}
// catchnegatives(-2);
//the above funtion only handeles error related wth negative numberse

//that is what does mean custom error

//--Finnaly
//after we dotry cath teh finnlu code runs whatever teh situation is
function trycach_finaly(number) {
  try {
    if (number < 0 || Math.trunc(number) != number) {
      throw new SyntaxError("Number must be posistive And also Intiger");
    }
  } catch (error) {
    if (error instanceof SyntaxError) {
      console.log("Negative Number error ", error.name);
    } else {
      throw error;
    }
  } finally {
    console.log("the Entered  numbere is", number);
    console.log("Opreation done");
  }
}
trycach_finaly(-2)

//do try catch  to retrive array datas from th elocal storage
//thor
