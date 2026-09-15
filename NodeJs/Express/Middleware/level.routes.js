const express = require("express");
const router = express.Router();
router.use((req, res, next) => {
  console.log("The request made to the /Menu ");
  next();
});
router.get("/", (req, res) => {
  res.send("This is the menu peage");
});
module.exports = router;
