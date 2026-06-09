let user = new Object();
user.name = "john";
user.surnmae = "smith";
user.name = "pete";
delete user.name;
let schedue = {};
function IsEmpty(Tobe_Cheked) {
  for (let keys in Tobe_Cheked) {
    return false;
  }
  return true;
}
IsEmpty(schedue);
schedue["2;30"] = "biology";
IsEmpty(schedue);

let User_Salaries = {
  jhon: 300,
  abuki: 400,
  peterson: 100,
};
function Chek_and_sum(User_Salaries, sum) {
  if (IsEmpty(User_Salaries)) {
    sum = 0;
  } else {
    for (let value in User_Salaries) {
      sum += User_Salaries[value];
    }
  }

  return sum;
}
let all = Chek_and_sum(User_Salaries, 0);
console.log(all);
