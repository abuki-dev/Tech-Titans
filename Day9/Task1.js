function Make_user(name, Age) {
  return {
    name,
    Age,
    ref() {
      return this;
    },
  };
}
let User = Make_user("abuki", 30);
console.log(User.ref().name);
