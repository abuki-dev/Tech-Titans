//Buffer
//Not all data in the web exost it text some exist in buffer like viedos images those are sent using teh Buffers

//node js npt run in broser so it needs its own mechanism to handel using the binary codes using buffer module

const { Buffer } = require("buffer");

//Then we useit using its own methods

//? Buffer.from() lets us create buffur from string array ot any raw data

let nameBuffer = Buffer.from("Abuki dev");
console.log(nameBuffer);

let numburbufer = Buffer.from([12, 23, 13, 1, 3, 1, 3, 1, 3, 10]);
console.log(numburbufer);

// the actual data held by the buffers can get using toString()
console.log(nameBuffer.toString()); //"Abuki dev"

//Buffer.alloc()
//This method allows us to create new buffer by teh given size
// and each buffer filled with 0
let someBuffer = Buffer.alloc(15);
console.log(someBuffer);

// Buffer.write(data) to wrote at the unallocated empty buffer

someBuffer.write("Abuki dev is an expert develeoper");
console.log(someBuffer); //If we ddd more datas that alocated space it wil be trunciated
console.log(someBuffer.toString()); //abuki dev and teh null data displayed

// Byte length Buffer.bytelength();
console.log(Buffer.byteLength("Abuki dev")); //Tells us the amout of the data We must allocate or tehbyt tah nedded to stor Abuki dev

//let us create empty space by teh space neded for the word teh alocate there
// frts find the bufffur lnght for that word
// then alocate the spaces by the length
// then write inside it
let dataToStore = "Data to Store";

let bufferlength = Buffer.byteLength(dataToStore);

let bufferSpace = Buffer.alloc(bufferlength);

bufferSpace.write(dataToStore);

console.log(bufferSpace.toString()); //Now it holds the actual data Without any trunctiated byte
// Buffer.isBuffer(): checks if a given object is a buffer
// Buffer.compare(): compares two buffers and returns their sort order
// Buffer.concat(): joins multiple buffers together into one
let ab = [1, 2, 3, 4, 5, 6];
const os = require("os");
console.log(os.cpus().length);
