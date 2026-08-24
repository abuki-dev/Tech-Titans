// External and Built in
// built ins arre provided by the node js itsef whil eteh exterbals are bu developers and we have to intall thenm

// Built in Modules

// ? 1 the Os Module
//Module tha related with te os systme of the user

const osSystem = require("os");

let systemUptime = osSystem.uptime();
let userinfo = osSystem.userInfo();
let otehr_infos = {
  name: osSystem.type(),
  release: osSystem.release(),
  SSD: osSystem.totalmem(),
  RAM: osSystem.freemem(),
  Other: osSystem.version(),
};

console.log(otehr_infos, systemUptime, userinfo);


//Paht Module
