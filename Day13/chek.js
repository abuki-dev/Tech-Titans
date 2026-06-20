//accepting tehe strin gto tehc wetehr it containes xxx or viagra
//first convert everyting to lowrecase then try includes
function checkSpam(word) {
  word = word.toLowerCase();
  if (word.includes("xxx") || word.includes("viagra")) {
    return "alert spam detected ";
  } else return "no spam detected";
}
console.log(checkSpam("free ViAgRA xxxxx"));

//accept the word
//if it exxeded the max length provided slice it the add 3 dots at teh end else return as its

function truncate(word, maxlenth) {
  if (word.length > maxlenth) {
    return word.slice(0, maxlenth - 1) + "...";
  }
  return word;
}
console.log(truncate("abuki kira", 5));

//returning number by slicing starting from 1
function curruncy(strng) {
  return +strng.slice(1);
}
console.log(curruncy("$64646"));
