// Stearam module is used when The data is too larg To load
// Like you tube video watch it loads  smal smal tings not all 
// Readable streams let you read data in chunks (for example, reading a large file).
// Writable streams let you write data in chunks (for example, saving a file).
// Duplex streams can both read and write data.
// Transform streams are a special kind of duplex stream that can change or process the data as it flows through.

const { Readable, Writable, Transform } = require("stream");
const fs = require("fs");
const path = require("path");

const inputFilePath = path.join(__dirname, "input.txt");
const outputFilePath = path.join(__dirname, "output.txt");

// Create the read stream first
const readInputFileStream = fs.createReadStream(inputFilePath);

// Create the write stream
const writeOutputFileStream = fs.createWriteStream(outputFilePath);

readInputFileStream.pipe(writeOutputFileStream);

writeOutputFileStream.on("finish", () => {
  console.log("All data has been written to the file");
});

writeOutputFileStream.on("error", (err) => {
  console.error("Error writing to file:", err.message);
});
