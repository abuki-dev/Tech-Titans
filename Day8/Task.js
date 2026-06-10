let User = {};
User.name = "jhon";
User.surname = "smith";
console.log(User);
User.name = "pete";
delete User.name;
console.log(User);

function IsEmpty(OBj) {
  for (let key in OBj) {
    return false;
  }
  return true;
}
let Chek = IsEmpty(User);
console.log(Chek);

let Slaray = {
  jhon: 100,
  Ann: 160,
  pete: 130,
};
let Sum = 0;
function Sleriess_sum(obj) {
  if (IsEmpty(obj)) {
    return 0;
  } else {
    for (keys in obj) {
      Sum += obj[keys];
    }
    return Sum;
  }
}
let Total_sum = Sleriess_sum(Slaray);
console.log(Total_sum);

// before the call
let menu = {
  width: 200,
  height: 300,
  title: "My menu",
};
function MeltpyNumeric(X) {
  for (Key in X) {
    if (typeof X[Key] === "number") {
      X[Key] *= 2;
    }
  }
}
console.log(menu);
MeltpyNumeric(menu);
console.log(menu);
