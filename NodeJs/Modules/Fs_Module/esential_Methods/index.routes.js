//Read dir method
const Fs = require("fs/promises");

//let us read teh directorues using readir and passing 2nd argumet
async function readDirectory() {
  try {
    let items = await Fs.readdir("../", { withFileTypes: true });
    for (const element of items) {
      console.log(element.name, element.isFile() ? "File" : "Directory");
    }
  } catch (error) {
    console.log(error.message);
  }
}

//Creating File usgin mkdir and we can use recurcive ture to make nessted file creations

async function cerateFolders() {
  try {
    await Fs.mkdir("./src", { recursive: true });
    await Fs.writeFile("./src/index.js", "console.log(`hellow world`)", "utf8");
    console.log("The folder hav eben created sucussfully");
  } catch (error) {
    console.log("Error cretaing teh file " + error.message);
  }
}
async function sethefilemethadata() {
  try {
    let data = await Fs.stat("./index.js");
    console.log(data);
  } catch (error) {
    console.log("Erroe reading the meta data", error.message);
  }
}

async function main() {
  await cerateFolders();
  await readDirectory();
  await sethefilemethadata();
  await copyfiles();
}

//Funtion to copy the data to new locations
async function copyfiles() {
  try {
    await Fs.copyFile("./index.js", "./index.routes.js");
    await Fs.appendFile(
      "./index.routes.js",
      "//? this is the copied file from the index.js not teh main file",
    );
    console.log("Copied files");
  } catch (error) {
    console.log("Error coping files ");
  }
}

main();
//? this is the copied file from the index.js not teh main file