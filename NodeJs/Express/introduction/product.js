const express = require("express");
const productsRother = express.Router();
productsRother.get("/", (req, res) => {
  res.send("This is The products Routher page");
});
productsRother.get("/new", (req, res) => {
  res.send("New products page ");
});
module.exports = productsRother;
