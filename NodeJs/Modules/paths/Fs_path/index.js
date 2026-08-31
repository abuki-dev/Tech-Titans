// goal os to read directory and remove files with the extention .log
// firt creat afunction that  reads the directory and return the array of the dirent (contents )
// for each dirent chek wether file or directory
// if directory recusive call  to read directory
// if file chek the extention by using path.extname(path)
// get th epath from the name
// if teh extname is .log remove teh file using fs.remove
//else ingore it
const Fs = require("fs/promises");
const path = require("path");
async function readdirectory(directory) {
  try {
    let contents = await Fs.readdir(directory, { withFileTypes: true });
    console.log(contents);
    //we will pass to teh chek and remover
    if (contents.length == 0) {
      console.log("Currunt direcory is empty");
      return;
    }
    console.log("Cheking Directory ", contents[0].name);
    await chekAndRemove(contents);
  } catch (error) {
    console.log("Error Readindg directory", error.message);
  }
}

async function chekAndRemove(items) {
  items.forEach((item) => {
    if (item.isDirectory()) {
      //calback the directory
      readdirectory(item.parentPath + "/" + item.name);
    } else if (item.isFile()) {
      //let chek the extention the remove
      removeFile(item);
    } else console.log(item, "Is neither file nor directory");
  });
}
async function removeFile(file) {
  try {
    //let us check the extebtion
    if (path.extname(file.name) == ".log") {
      //we can remove teh file
      await Fs.rm(file.parentPath + "/" + file.name, {
        recursive: true,
        force: true,
      });
      console.log("Removed the file ", file.name);
    } else console.log("Ignoring ", file.name);
  } catch (error) {
    console.log("Error while removing", file);
  }
}
readdirectory("../");
