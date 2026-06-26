//Goal is to collect each users allowed location for routing
//create function that acceots the currunt object
//initialize routed datas object to return as innverted
//the crate array of object entries [routestring,{allowedUsers}] to iterate and atore them in variable named toiterateonthem
//use for each to toiterateitem then use mapping on each allowed users
//if allowed user is not incloded inkey of inventeds creat key and empty array else push routstring data to it
//
const routeConfig = {
  "/dashboard": { allowedUsers: ["Admin", "Developer"], requiresAuth: true },
  "/settings": { allowedUsers: ["Admin"], requiresAuth: true },
  "/profile": {
    allowedUsers: ["Admin", "Developer", "Guest"],
    requiresAuth: false,
  },
  "/analytics": { allowedUsers: ["Developer"], requiresAuth: true },
};
function invertRouther(cofig) {
  let inverted = {};
  let toiterateonthem = Object.entries(cofig);
  toiterateonthem.forEach(([routstring, { allowedUsers }]) => {
    allowedUsers.forEach((user) => {

      if (!(user in inverted)) {
        inverted[user] = [];
      }
      
      inverted[user].push(routstring);
    });
  });
  return inverted;
}
console.log(invertRouther(routeConfig));
