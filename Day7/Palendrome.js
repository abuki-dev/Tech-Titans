//acception the word
//finding the length
//cheg the rignt sided and th eleft sides are the same until the middle
//if diidnt match break and return false
//use is palidrone as bollean testiing
function Palindrone_Tester(word) {
  if (!word || +word) {
    return "No Word detected";
  } else {
    let is_Palindrone = true;
    let Word_length = word.length;
    let Start = 0;
    let end = Word_length - 1;
    while (Start <= end) {
      if (word[Start] !== word[end]) {
        is_Palindrone = false;
        break;
      }
      Start++;
      end--;
    }
    return is_Palindrone;
  }
}
module.exports = Palindrone_Tester;
