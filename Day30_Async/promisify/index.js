//-promisisfy is coverting callbacs to promiss
function count_andhellow(number, callback) {
  for (let i = 0; i < number; i++) {
    console.log("Numbere is Now:" + i);
  }
  callback(number);
}
function display(num) {
  console.log("Thanks we display numbers from 0 to:" + num);
}

//now let us promisify that fintions
//fort accept 1 number as arg
//crete promise then if error hpened rejetc
//ales resolve after all sat hellow
let promisified = function (numbere) {
  return new Promise((resolve, reject) => {
    if (numbere > 8)
      reject(
        new Error("The entered Number (" + numbere + ") is Above 50 try below"),
      );
    else
      for (let i = 0; i < number; i++) {
        console.log("Numbere is Now:" + i);
      }
    resolve(numbere);
  });
};

promisified(53)
  .then((result) => display(result))
  .catch((err) => console.log(err.message));
