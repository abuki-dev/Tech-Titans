const { users, delete_useraccount } = require("./source");

//create wekaset for users thare logined
//remove users then chek the existence
const Logined_accounts = new WeakMap();
const justaccounts = new WeakSet();
users.forEach((user) => {
  if (user.isLoggedIn) {
    Logined_accounts.set(user, new Date());
    justaccounts.add(user);
  }
});
function chekaccount(sessionobject) {
  if (justaccounts.has(sessionobject)) {
    let result = Logined_accounts.get(sessionobject);
    return `${sessionobject.username} logined in ${result}`;
  } else return `the account is not found`;
}
console.log("before account was deleted", chekaccount(users[0]));
delete_useraccount();
console.log("after deleting ", chekaccount(users[0]));
