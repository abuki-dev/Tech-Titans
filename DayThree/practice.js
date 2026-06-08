//if conditions while for do while switch
//count evens and odds from 174 to 356
//using for loop
let Odds = 0,
  evens = 0;
for (let i = 174; i <= 356; i++) {
  find_and_log(i);
}
function find_and_log(currunt) {
  currunt % 2 === 0 ? evens++ : Odds++;
}
console.log(`For loop Tottal evens : ${evens} and total odds : ${Odds}`);
//using while loop
let start = 0;
while (start < 357) {
  find_and_log(start);
  start++;
}
console.log(`While Tottal evens : ${evens} and total odds : ${Odds}`);

//or finds teh first trush value but evaletes everyting
console.log(null || Odds || undefined);
console.log(console.log("abebe") || "34");

