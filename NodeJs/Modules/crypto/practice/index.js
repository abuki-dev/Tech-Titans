//goal is to create hassed and then save it inside afile named hassed.key
const fs = require("fs/promises");
const crypto = require("crypto");
const { Buffer } = require("buffer");
// first we want to  cerate using create hassh and save
async function createandSave(data) {
  try {
    let generaedhash = getHashed(data);
    //then let us write the file there
    await fs.appendFile(
      "./keys/hassed.key",
      "Psswrod 1 " + generaedhash,
      "utf8",
    );
    console.log("The pasword have been saved sucussfully ");
  } catch (error) {
    console.log(error.message);
  }
}

function getHashed(data) {
  return crypto.createHash("sha256").update(data).digest("hex");
}
createandSave("Abubeker ahmed");

//Let us create using cipher
async function generateCipher(data) {
  try {
    let cipherKey = crypto.randomBytes(32);
    let cipherIv = crypto.randomBytes(16);
    let chipher = crypto.createCipheriv("aes-256-cbc", cipherKey, cipherIv);
    //Now let us cipher it and wrote it inside file
    let encryoted = chipher.update(data, "utf8", "base64");
    encryoted += chipher.final("base64");
    let payload = {
      key: cipherKey,
      iv: cipherIv,
      encrypted: encryoted,
    };
    await writeTofile(payload, "./keys/encrypted.json");
  } catch (error) {
    console.log(error.message);
  }
}
async function writeTofile(data, path) {
  try {
    await fs.writeFile(path, JSON.stringify(data, null, 2));
    console.log("Succsufuly wirted Data inside :", path);
  } catch (error) {
    console.log(path, error.message);
  }
}

//The goal is to decivfer and retrive the data
// finction to retrive All kyes related to the deciper
//then try to decipeher it and then log it

async function retriveEncrypted() {
  try {
    let { key, iv, encrypted } = JSON.parse(
      await readFile("./keys/encrypted.json"),
    );
    key = Buffer.from(key, "hex");
    iv = Buffer.from(iv, "hex");
    encrypted = Buffer.from(encrypted, "base64");
    let decipher = crypto.createDecipheriv("aes-256-cbc", key, iv);
    let decrpted = decipher.update(encrypted, "base64", "utf8");
    decrpted += decipher.final("utf8");
    return decrpted;
  } catch (error) {
    console.log("Error", error.message);
    throw error;
  }
}
async function readFile(path) {
  try {
    let data = await fs.readFile(path, "utf-8");
    console.log("Rterived From ", path);
    return data;
  } catch (error) {
    console.log("Error Reading " + path, error.message);
    throw error;
  }
}
async function main() {
  await generateCipher("Abubeker Ahmed Ali");
  await retriveEncrypted().then((dataiside) =>
    console.log("The stored data was ", dataiside),
  );
}
main();
