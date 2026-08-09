//-- promise you that i will give you the result or an error that you wil use is for the operations
//excutors is teh funtion insie the peromise
//arguments re callback funtion by js
//? reso;le is called wehn the opration or teh state of teh promise is fullfiled

//? let us try weh succsuss
let mypromise = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("Done Data retrived succuessfully ");
  }, 1500);
});

mypromise.then((result) => {
  console.log(result);
});

//? now let us try reject
let rejectpromise = new Promise((resolve, reject) => {
  setTimeout(() => {
    reject(new Error("Whoops i filed"));
  }, 1500);
});

// rejectpromise.then((result) => {
//   console.log(result);
// });

////Consumers then and catch

//--then()
//we use tehm both for the result of reject or the resolve
//this have 2 raguments then((arg1),(arg2))
//like in the promise arg1==result of resolve arg2==result of rejection
rejectpromise.then(
  (resolve) => display(resolve),
  (reject) => display("Error"),
);
function display(value) {
  console.log("the result i get it ", value);
}

//--Cach
// if e interested on acceptign errrors we use .cathc() or null at the first arwumnet on then
// then(null,(errorhandler)=>{})
rejectpromise.catch(display);
