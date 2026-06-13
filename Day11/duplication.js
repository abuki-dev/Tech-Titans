//in teh list of array find the duplicated items then display them
//1 itereat throu the array if you get similar insert to the duplicatyed items
let duplicate = [8, 3, 3, 4, 5, 5, 6, 8, 7];
let list = [];
let list_index = 0;
for (let index = 0; index < duplicate.length; index++) {
  for (let i = index + 1; i < duplicate.length; i++) {
    if (duplicate[i] === duplicate[index]) {
      list[list_index++] = duplicate[i];
    }
  }
}
console.log(list);
