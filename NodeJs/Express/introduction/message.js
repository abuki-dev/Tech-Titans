const express = require("express");
const router = express.Router();
router.get("/new", (req, res) => {
  res.json({ message: "Hellow from Express" });
});

router.get("/", (req, res) => {
  res.send("Hellow World");
});

module.exports = router;
