//convert teh object entries to the values array
// sum everyting in teh array using reduce
//then return it
function sumSalaries(salaries) {
  let Arrayof_saleries = Object.values(salaries);
  //   let sum = 0;
  //   for (let element of Arrayof_saleries) {
  //     sum += element;
  //   }
  return Arrayof_saleries.reduce((sum, item) => sum + item, 0);
}
let salaries = {
  John: 100,
  Pete: 300,
  Mary: 250,
};
console.log("the sum of all user saleries", sumSalaries(salaries));
