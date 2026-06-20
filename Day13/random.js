//acctepting 2 numbers the startign andthe end
//use math rand to generate random 0 to 1
// multiply by the higest point
//teh base ..
function generate_random(lower, higner) {
  //
  return lower + Math.ceil(Math.random() * (higner - lower));
}
console.log(generate_random(1, 5));
