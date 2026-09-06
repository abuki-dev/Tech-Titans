// Crypto
// as method to store sensitive datas by encryption decrrption and keepeing away this is low level beuildign blok for security not tge plug in

const crypto = require("crypto");

// Methods
// The createHash() method creates a hash object by taking in algorithms like sha256, sha512, or md5. It's a one-way operation, so you can't reverse it.

// Create hash is usefull for hasing usin gthe lgorithm them pass it to update and give it the actual value the digest to get the hashed password

const hasedpaasword = crypto
  .createHash("sha256")
  .update("12345678")
  .digest("hex");
console.log("Hasged password ", hasedpaasword);

//CreateHmac() same ting but 2 step verication to go forward and update

const hashedmessage = crypto
  .createHmac("sha256", "secret")
  .update("Secured message")
  .digest("hex");
console.log("Hmach method ", hashedmessage);

// Cipher

// 🔑 The 4 Key Concepts of Encryption

// 1. Plaintext: Your original readable message (e.g., "hello").

// 2. Key: The secret password. For aes-256-cbc, the key must be exactly 32 bytes (256 bits) long.

// 3. IV (Initialization Vector): A random piece of data (16 bytes) that ensures if you encrypt the word "hello" twice, it produces two completely different encrypted outputs. This stops hackers from spotting patterns!

// 4. Ciphertext: The final scrambled text (e.g., "a3f12c...").

let key = crypto.randomBytes(32);
let iv = crypto.randomBytes(16);

let Cipher = crypto.createCipheriv("aes-256-cbc", key, iv);

let encrypted = Cipher.update("hellow world", "utf8", "hex");
encrypted += Cipher.final("hex");
console.log("The encrypted", encrypted);

console.log(encrypted.toString("utf8"));

let decipher = crypto.createDecipheriv("aes-256-cbc", key, iv);
let decrypted = decipher.update(encrypted, "hex", "utf8");
decrypted += decipher.final("utf8");
console.log(decrypted);

// sign() and verfy()
// createsecretkey() and  export()
//  createoublik and private keys
// certificate ()
// createDiffieHellman()

const { publicKey, privateKey } = crypto.generateKeyPairSync("rsa", {
  modulusLength: 2048,
});
function gethmac(message) {
  return crypto.createHmac("sha256", "secret").update(message).digest("hex");
}
const orginalMessage = "Trsanfer $1,000 to Bob";
let hassed = gethmac(orginalMessage);
const signature = crypto.sign("sha256", hassed, privateKey);

console.log("sinature ", signature.toString("base64"));

const isValid = crypto.verify("sha256", hassed, publicKey, signature);
console.log("fisr message result ", isValid);

let modfiedmessage = "Trsanfer $1,000,000 to Bob";
let fakeHashed = gethmac(modfiedmessage);
let hacked = crypto.verify("sha256", fakeHashed, publicKey, signature);
console.log("Second message result ", hacked);

//let us crete versy an dsing fuctions using Creta verfy and sign
//fist get funtion that acepts 3 arguments
// create signiture usin galgorithm the update using the message then end it
// finalty sign the currunt result using prvatekey  and the format as base64

function createSignature(message, privatekey) {
  let sign = crypto.createSign("SHA256").update(message).end();
  let signature = sign.sign(privatekey, "base64");
  return signature;
}
console.log(createSignature(hassed, privateKey));

function createVerfy(message, publicKey, signature) {
  let verfy = crypto.createVerify("SHA256").update(message).end();
  let verfyed = verfy.verify(publicKey, signature, "base64");
}

//Method1 sinature
function signatureMethod(privatekey, buffuredmessage) {
  return crypto.sign("sha256", buffuredmessage, privatekey);
}

function verfySignaturemethod(publicKey, buffuredmessage, signature) {
  return crypto.verify("sha256", buffuredmessage, publicKey, signature);
}
