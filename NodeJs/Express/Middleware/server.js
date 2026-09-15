//? Middleware?
//its actualy afucntion excutes in the life cycleof req responce withn server
//do requests and accs req obejct parse them and so on
// simply sits betwen rq and response

//How it works
// the middlewarre  is wexuted in the way it added on the code
// here is the step
// request comes => middleware excutes => if middleware calles the next() its handled the  reqes other wise it fails
const express = require("express");
const app = express();
const PORT = 9000;

//Let us create simple middleware
app.use((req, res, next) => {
  console.log("Request URL :", req.url);
  console.log("Request Method :", req.method);
  next(); //pass to the next funtion or go forward after telling me the above
});

app.get("/", (req, res) => {
  res.send("Hellow World");
});

app.get("/erro", (req, res) => {
  throw new Error("Error While Doing Smtn");
});
//SO teh above app.use()// addes the middleware

// applucation level middleware
// its instance of an express that is used to hande requestes and regestered using app.use  and also can be attached to specific routeres

//Router level is attached to speific routher
const router = require("./level.routes");
app.use("/Menu", router);

// errtor handling middleware
// have 4 paramateres tat cates the errroor camedorm next(Error ) or thorown
// weited after all rutes

app.use((err, req, res, next) => {
  console.log(err.message, " Happend att ", req.method);
  res.status(500).json({ mesage: "Error occured here " });
});

app.listen(PORT, () => {
  console.log("Server running on http://localhost:9000");
});
