// function Acceptuserdata() {
//   let data;
//   let arr = [];
//   do {
//     data = prompt("enter currunt array and enter string to dispay the sum");
//     if (data == 0) {
//       arr.push(data);
//       continue;
//     }
//     if (data == null || !Number(data)) {
//       break;
//     } else arr.push(Number(data));
//   } while (true);
//   return arr;
// }
// let To_Besumed = Acceptuserdata();
// let sum = 0;
// for (data in To_Besumed) {
//   sum += +To_Besumed[data];
// }
// alert(sum);

//accept array
//find the max of the arrays
// start at the fist elemtn
//if teh currunt elemntis max continue
//else sum it and chek if teh sum is maximum tah the sum
// if you get the max value assing it as max
// wehn you finish iteration dispaly it
function find_max_sumofarr(arr) {
  let max_sum = 0;
  let max_num = Math.max(...arr);
  if (max_num < 0) {
    return max_sum;
  } else {
    for (let i = 0; i < arr.length; i++) {
      const element = arr[i];
      if (element == max_num) continue;
      else {
        if (element + max_num > max_sum) {
          max_sum = element + max_num;
        }
      }
    }
  }
  return max_sum;
}
let Array = [1, 2, 73, 4, 5];
let maxsum = find_max_sumofarr(Array);
console.log(maxsum);
// let sum = 0;
// for (let key of Array) {
//   sum += key;
//   console.log(sum);
// }
