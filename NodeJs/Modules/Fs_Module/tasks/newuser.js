//read the json data then add new user there
//Async funtion that reads the daata from teh given path
// if the file doesnt exust it creates anew file
// then we call teh writer funtion
// if teh data not exits inside we just write the user
// then log the message we did it and if errror happend cath it
const fs = require("fs/promises");
let newUser = {
  id: 2,
  name: "ab",
  role: "editior",
};
async function readJsonFile(path) {
  try {
    let users = await isThefileExiat(path);
    users.push(newUser);
    await writeThenewdata(path, JSON.stringify(users, null, 2));
  } catch (error) {
    console.log(error.message);
  }
}

async function isThefileExiat(path) {
  try {
    let data = await fs.readFile(path, "utf8");
    return JSON.parse(data) || [];
  } catch (error) {
    if ((error.code = "ENOENT")) {
      await fs.writeFile(path, "[]", "utf8");
      console.log("we writed New file to the path");
      return [];
    }
    throw error;
  }
}
async function writeThenewdata(path, data) {
  try {
    await fs.writeFile(path, data, "utf8");
    console.log("The users Written sucussfully");
  } catch (error) {
    console.log("Erro while wrting", error.message);
  }
}

readJsonFile("user.json");
fetch("user.json")
  .then((response) => response.json())
  .then((data) => console.log(data))
  .catch((error) => console.log(error.message));
