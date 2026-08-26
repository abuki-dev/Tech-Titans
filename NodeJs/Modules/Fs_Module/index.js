// ? Fs module is givrn by the NOde.js that allowes us to work with the file systems
// // shortly it allows us crud on files
const { rejects } = require("assert");
const { resolve } = require("dns");
const fs = require("fs"); //- imported

// It have bosh synk and async by default its asyc while running it
// fs.writeFile() // Asynchronous file writing
// fs.writeFileSync() // Synchronous file writing

// fs.readFile() // Asynchronous file reading
// fs.readFileSync() // Synchronous file reading

// fs.open() // Opens a file
// fs.openAsBlob() // Opens as blob
// fs.openSync() // Synchronous open
// fs.opendir() // Opens directory
// fs.opendirSync() // Synchronous directory open

/*fs.writeFile("Path", "content", "Format eg utf8", (Error) => {
  if (Error) {
    throw Error;
  }
  console.log("File writtn to")
});*/
//  an dteh otehr thing id teh file path specfied doent exist ir creates anew one and if exists over writes it

fs.writeFile("app.js", "console.log(`hellow World`)", "utf8", (error) => {
  if (error) {
    throw error;
  }
  console.log("I did it ");
});

//Ths fs promise Version

async function writeasync() {
  try {
    await fs.promises.writeFile(
      "./index.html",
      "<h2>hellow World</h2>",
      "utf8",
    );
    console.log("Data written succussfully Async Await 1");
  } catch (error) {
    console.log(error.message);
  }
}
writeasync();

//THE sync Version

try {
  fs.writeFileSync("./index.html", "Hellow wolrd", "utf8");
  console.log("File Written Asyncronosly ");
} catch (error) {
  console.log("Error", error);
}

//- using Aync is better beacuse it allows the systmemto excute othertngs instade of withing for single sync progam to finish exuting

//Anoter method
const promiseFs = require("fs/promises");
async function Writeralternative() {
  try {
    await promiseFs.writeFile(
      "Readme.md",
      "## Node fs Module Basics Guide",
      "utf8",
    );
    console.log("The Readme file wirtten ");
  } catch (error) {
    console.log(`Errow ${error}`);
  }
}
Writeralternative();

//appendFile() This method used to append data to the exiting file

//Let us add mole lines at the readme file
async function appendDatas() {
  try {
    await promiseFs.appendFile(
      "Readme.md",
      "\n We saw 3 methods to write the new file now let us move to reading file",
      "utf8",
    );
    console.log("Aditional Data added to the Readme file");
  } catch (error) {
    console.log("Error :", "Cannot appendign new data");
  }
}
appendDatas();

//radFile() to se whats actuay inside the file

async function readFileDatas() {
  try {
    const content = await promiseFs.readFile("Readme.md", "utf8");
    console.log("Readme File Nontent \n", content);
  } catch (error) {
    console.log("Error Readding file ");
  }
}
readFileDatas();
//If we didjt set the Conettn type utf8 we will recive a buffer

//Lastly unlink() Deletng files

async function deleteFile() {
  try {
    await promiseFs.unlink("./app.js");
    console.log("The FILE wiped out");
  } catch (error) {
    console.log(error.message);
  }
}
deleteFile();
