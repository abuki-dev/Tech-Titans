let arr = [100, 5, 3, 2, 6, 8];
//start at the fist element
//compare it with the
//if this index included at the pushed continue
// set the firts elemnt as larger value
//if you get geetr or equal tp this number update it
//whn tou finich iterration pushi this idndex
//
function swap(x, y) {
  let z = arr[x];
  arr[x] = arr[y];
  arr[y] = z;
}
function makeranked(data) {
  for (let i = 0; i < data.length; i++) {
    data[i] = i + 1;
  }
}
for (let index = 0; index < arr.length - 1; index++) {
  let maxindex = index;
  for (let j = index + 1; j < arr.length; j++) {
    if (arr[j] > arr[maxindex]) {
      maxindex = j;
    }
  }
  swap(maxindex, index);
}
console.log(arr);
makeranked(arr);
console.log(arr);
