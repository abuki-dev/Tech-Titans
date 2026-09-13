const express = require("express");
const app = express();
app.use(express.json()); // this app can acept JSONS and pars them automatically
app
  .route("/prefi_path")
  .get((req, res) => {
    res.send("Fethig teh users Data");
  })
  .post((req, res) => {
    const { name } = req.body;
    console.log(name);
    res.json({ name: name });
  });
// we can chan and add more an dmore methods for teh path .prfofilrpath

app.listen(1000, () => {
  console.log("The server is runnign on port 1000");
});

//?expres.Routher()
//now let us use mointing router it's the best way to use the routign
// allow us to use the above routign method in the way that allows code reusabilytig and separac teh method post get and other things
// simply its mini expres Expres aplication
// see the file named usesrs.routes.js  teh come back and continue here

const usersrouter = require("./users.routes");
app.use("/user", usersrouter); //teh teh expers ap to use this min express ap whwnevr teh reques cames from the /user path
