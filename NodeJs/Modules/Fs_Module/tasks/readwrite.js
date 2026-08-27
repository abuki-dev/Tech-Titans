// goal wrritn data in logs message witout trunciting
//Import the fs module
// create funtion that accepts path and data  to write
// inside the trycath funtion try to write teh data inside as utf8 fortmat by appending method
//Then drop succussu message

const Fs = require("fs/promises");

async function writelogmessage(message) {
  try {
    let date = new Date().toISOString();

    if (isThefileExists("./message.log"))
      message = "\n[" + date + "] " + message;
    else message = "[" + date + "] " + message;

    await Fs.appendFile("./message.log", message, "utf8");

    console.log("Log data saves sucussfully");
  } catch (error) {
    console.log("Error writing the file", error.message);
  }
}
writelogmessage("User Trunciated");

//Now let us reade teh log datas of taht files
//get asynf funtion that rys to read promse dtas and display them
async function readLogdatas(filepath) {
  try {
    if (!isThefileExists(filepath)) throw new Error("The file doesnt exists");
    //else we can go and read the actual data
    let logdatas = await Fs.readFile(filepath, "utf8");
    // then desplay it
    console.log("The log datas Look like :", logdatas);
  } catch (error) {
    console.log("Error while retiving datas ", error.message);
  }
}
readLogdatas("./message.log");

async function isThefileExists(path) {
  try {
    await Fs.access(path, Fs.constants.F_OK);
    return true;
  } catch (error) {
    console.log("The file you are lokign for is not exists", error.message);
    return false;
  }
}
