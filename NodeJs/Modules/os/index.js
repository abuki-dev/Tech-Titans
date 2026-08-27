//Os module lets us colaborate an dwork wiht the operating system  and get infos
const os = require("os");

//Platform
console.log(os.platform()); // the platform node is running on
if (os.platform() == "win32") {
  console.log("im windows code");
}

//Arch() cpu arcitechur for teh node.js
console.log(os.arch()); //x64

//Type official  name of the opreating system
console.log(os.type());

//Release shows release verion
console.log(os.release());

//versuion tells whic version of the os
console.log(os.version()); //Windows 11

// cpus logical cpus array
console.log(os.cpus());

//Uptime time after reboot in ms
console.log(os.uptime());

//totalmem and freemem as the name indicates they tell us the ramm an dteh storage voulume
console.log(os.freemem()); //RAM
console.log(os.totalmem()); //Storage Volume

// Userinfo() objet thattels teh curunt user informaions
console.log(os.userInfo());

//Networkinterface network interaces that assinged no network adrees
console.log(os.networkInterfaces());
