const expres = require("express");
const userRouter = expres.Router(); //here we created our router mini expres app
//now we just do the old expres method
userRouter.get("/", (req, res) => {
  res.json({ message: "Hellow User this is The users routig JSON" });
});

//export tis for later use
module.exports = userRouter;
