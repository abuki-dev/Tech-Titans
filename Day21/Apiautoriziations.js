//firs creat cline
//then cerate funtion for creating request
let privateCredentials = new WeakMap();
function createClient(username, Apikey) {
  if (username.length > 5 || Apikey.length > 5) {
    //se we have pure data
    let user = { username: [username] };
    privateCredentials.set(user, Apikey);
    return user;
  }
}
function sendRequest(clientobject) {
  if (privateCredentials.has(clientobject)) {
    console.log(
      "Request sent Using :",
      ` [${privateCredentials.get(clientobject)}]`,
    );
    return true;
  } else
    console.log(
      `user ${Object.values(clientobject)}`,
      " is Unauthorized client",
    );
  return false;
}
let newClient = createClient("abuki_kira", "AH38SKH");
let Abuki = { abuki: "kira" };
sendRequest(newClient);
sendRequest(Abuki);
