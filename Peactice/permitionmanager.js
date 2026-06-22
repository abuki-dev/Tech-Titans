//actept user is sytem conifg and mudulename
//contert to array teh currunt
// use find to find tehcurrunt isd inside the users
//if founded got to teh permition
//chek if tehn currunt modul exises else add
//coun tteh length of teh permition then if its 3 make role supereUser
const systemConfig = {
  users: {
    usr_01: { name: "Abuki", role: "User", permissions: ["Read", "Write"] },
    usr_02: { name: "Alex", role: "User", permissions: ["Read"] },
  },
};
function grantAcces(config, userId, moduleName) {
  let user = config.users[userId];
  if (!user) {
    return;
  }
  if (!user.permissions.includes(moduleName)) {
    user.permissions.push(moduleName);
  }
  if (user.permissions.length >= 3) {
    user.role = "superUser";
  }
  return config;
}
console.log(grantAcces(systemConfig, "usr_01", "revoke"));
