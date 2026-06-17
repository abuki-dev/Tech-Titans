//Delete elemet used to delete but it just make the ide empty best is slice
let Arr = [1, 3, 4, 5, 6];

//so we can use spliece(start,removenos,[inserdert itens at that position])
Arr.splice(Arr.indexOf(5), 1, "first");
//console.log(Arr); //1,2,3,4,1,"firs",6

//slice(start,end) lik string returns arrays form teh start to the
let copy = Arr.slice(-3, -3);
console.log(copy);
//concat(args) meerging the givenn args //this aslo gives teh copy of the array
let cobcat = Arr.concat(Arr);
//console.log(cobcat);
let ob_arr = [
  { name: "abuki", age: 7 },
  { name: "kira", age: 78 },
];
//iterate usng for each
ob_arr.forEach(function ({ name, age }) {
  // console.log(`name: ${name} age ${age}`);
});

ob_arr.forEach((element) => {
  // console.log(element.age);
});

//searchig arays
//includes(ietem,from) or idexOf(item,from) // the values ar coputed as indexes

let Full = [3, 4, 5, 6, 7, 4, 3, 5, 6];
//console.log(Full.includes(7, 4));
let user = ob_arr[1];
//console.log(ob_arr.includes(user));
//lasst indexof start at the last
//console.log(Full.indexOf(4)); //returns -1 if exist
//console.log(Full.lastIndexOf(4)); //returns 1 if not exits

//splice cut of and return cn delete elements andadd nde element ther
//slice cut of and return copy
//concat merging copy
//forecah
//indexof
//lastindexof
//includes
let Arrofme = [1, 2, 3, 4, 5];
Arrofme.splice(2);
console.log(Arrofme);
