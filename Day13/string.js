//stings can e decribed using single double and backstrip
let string1 = "single quete";
let string2 = `back-strip`;

//Method .length to get teh full length of  the string
let full_name = "abubeker ahmed ";
let lenth = full_name.length;
console.log(`the length is ${lenth}`); //15
//accesing at specific postions
let lettr = full_name.at(0); //'a'
let last = full_name[lenth - 1]; // negative odexes work only at the .at()

//substring methods
let name = "abuebekrkiro";
let subtrs = name.indexOf("@"); //geitn 3 emelemts
console.log(subtrs);
